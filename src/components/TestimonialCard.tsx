import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

export const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-smooth">
      <CardContent className="p-6">
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4 italic">"{text}"</p>
        <p className="font-semibold text-sm">— {name}</p>
      </CardContent>
    </Card>
  );
};