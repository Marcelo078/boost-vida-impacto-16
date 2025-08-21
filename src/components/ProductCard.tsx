import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
  image?: string;
  featured?: boolean;
}

export const ProductCard = ({ 
  title, 
  description, 
  benefits, 
  ctaText, 
  ctaUrl, 
  image,
  featured = false 
}: ProductCardProps) => {
  return (
    <Card className={`h-full transition-smooth hover:shadow-medium ${featured ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-smooth hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              DESTAQUE
            </div>
          )}
        </div>
      )}
      <CardHeader>
        <CardTitle className={`${featured ? 'text-xl' : 'text-lg'} font-bold`}>
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={featured ? "hero" : "cta"} 
          size="lg" 
          className="w-full"
          onClick={() => window.open(ctaUrl, '_blank')}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};