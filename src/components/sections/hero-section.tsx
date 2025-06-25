import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-secondary">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
          Loka Daring
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          A Creative Full-Stack Developer Crafting Modern Web Experiences
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
         </Link>
      </div>
    </section>
  );
};

export default HeroSection;
