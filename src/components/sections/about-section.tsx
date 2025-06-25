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
                src="/my_foto.jpg"
                alt="Portrait of the author" // TODO: Replace with a real description of the image
                width={600}
                height={800}
                className="h-full w-full object-cover object-top"
 data-ai-hint="Potret seorang seniman 3D dan pengembang game"
              />
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <h2 className="text-3xl font-bold tracking-tight text-primary font-headline">About Me</h2>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
 I am a passionate 3D artist specializing in modeling and also a game developer. With a strong foundation in 3D art and game development, I enjoy the process of bringing creative ideas to life, from concept to implementation.
                </p>
                <p>
 My journey in 3D art and game development started with a deep fascination for how digital worlds can be created and brought to life, which quickly evolved into a full-fledged passion. I thrive on tackling challenges and continuously learning new techniques and technologies to stay at the forefront of the ever-evolving creative landscape.
                </p>
                <p>
 When I'm not working, you can find me exploring new art ideas, experimenting with new game concepts, or contributing to the creative community.
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
