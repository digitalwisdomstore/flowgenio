interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
