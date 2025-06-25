import ProjectCard from '@/components/project-card';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process. Built with Next.js and integrated with Stripe for payments.',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative tool for teams to manage tasks, set deadlines, and track progress. Features real-time updates using Firebase.',
    tags: ['React', 'Firebase', 'Zustand', 'Shadcn/UI'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects. Designed to be clean, modern, and fully responsive. You are looking at it right now!',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    githubUrl: '#',
  },
  {
    title: 'Recipe Finder API',
    description: 'A RESTful API that allows users to search for recipes based on ingredients. Built with Node.js, Express, and connected to a PostgreSQL database.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'API'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'recipe app',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <Code2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight font-headline">My Work</h2>
            <p className="mt-2 text-lg text-muted-foreground">A selection of projects I've built.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
