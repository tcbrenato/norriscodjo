import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  authorName: string;
  message: string;
  createdAt: string;
}

export default function TestimonialCard({ authorName, message, createdAt }: TestimonialCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-3 rounded-full flex-shrink-0">
          <Quote className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 mb-4 italic leading-relaxed">"{message}"</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-orange-600">{authorName}</p>
            <p className="text-xs text-gray-400">{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
