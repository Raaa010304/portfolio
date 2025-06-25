import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, Database, LayoutTemplate, PenTool } from 'lucide-react';
import { ReactIcon, NextjsIcon, NodejsIcon, TailwindcssIcon, TypescriptIcon, FirebaseIcon } from '@/components/icons';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <LayoutTemplate className="h-6 w-6" />,
    skills: [
      { name: 'React', icon: <ReactIcon className="h-8 w-8" /> },
      { name: 'Next.js', icon: <NextjsIcon className="h-8 w-8" /> },
      { name: 'TypeScript', icon: <TypescriptIcon className="h-8 w-8" /> },
      { name: 'Tailwind CSS', icon: <TailwindcssIcon className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', icon: <NodejsIcon className="h-8 w-8" /> },
      { name: 'Firebase', icon: <FirebaseIcon className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Tools & Design',
    icon: <PenTool className="h-6 w-6" />,
    skills: [
      { name: 'Git', icon: <p className="font-bold text-2xl">G</p> },
      { name: 'Figma', icon: <p className="font-bold text-2xl">F</p> },
      { name: 'Shadcn/UI', icon: <p className="font-bold text-2xl">S</p> },
    ],
  },
];

const SkillItem = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-lg border bg-card p-4 transition-all hover:bg-accent">
    {icon}
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
            <Cog className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight font-headline">Technologies I Use</h2>
            <p className="mt-2 text-lg text-muted-foreground">My favorite tools for building amazing things.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
