import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export default function Card({ title, description, icon, href }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
      <div className="mb-4 text-4xl text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      {href && (
        <a
          href={href}
          className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Ver más →
        </a>
      )}
    </div>
  );
}
