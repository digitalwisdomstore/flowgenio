#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { OpenAI } = require('openai');

(async () => {
  // Carga calendario
  const calendar = yaml.load(
    fs.readFileSync('content/editorial-calendar.yml', 'utf8')
  );
  const today = new Date().toISOString().slice(0, 10);

  // Configura OpenAI (SDK v4)
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Recorre entradas
  for (const entry of calendar) {
    if (entry.date <= today) {
      const slug = entry.slug;
      const filePath = path.join('content', 'blog', `${slug}.mdx`);

      // Si no existe, generar
      if (!fs.existsSync(filePath)) {
        console.log(`Generating ${filePath}…`);

        const prompt = `
Genera un post en formato MDX (con frontmatter YAML y contenido) para este artículo:
- Título: ${entry.title}
- Fecha: ${entry.date}
- Tipo: ${entry.type}
Audiencia: influencers y emprendedores LATAM (18–35 años).
Incluye al menos 3 secciones con subtítulos (###).

Output completo en MDX.
`;

        // Llamada al endpoint chat completions
        const response = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 1200,
        });

        // Extrae el contenido generado
        const content = response.choices[0].message.content;

        // Guarda el MDX
        fs.writeFileSync(filePath, content);
        console.log(`✔ Created ${filePath}`);
      }
    }
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
