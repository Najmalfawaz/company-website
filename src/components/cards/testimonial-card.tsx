import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
}

export function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-gray-600 mb-4">{text}</p>
        <p className="text-gray-800 font-semibold">{author}</p>
      </CardContent>
    </Card>
  );
}
