import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
