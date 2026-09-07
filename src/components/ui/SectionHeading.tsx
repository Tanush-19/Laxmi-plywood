import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg max-w-2xl",
          centered && "mx-auto",
          light ? "text-white/80" : "text-primary/70"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
