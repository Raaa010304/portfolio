import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Portrait of the author"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <h2 className="text-3xl font-bold tracking-tight text-primary font-headline">About Me</h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate and results-driven full-stack developer with a knack for creating modern, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life, from concept to deployment.
                </p>
                <p>
                  My journey in web development started with a fascination for how websites work, which quickly grew into a full-fledged passion. I thrive on challenges and am constantly learning new technologies to stay at the forefront of the ever-evolving tech landscape.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or contributing to open-source projects.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
