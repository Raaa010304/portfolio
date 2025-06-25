import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({ title, description, tags, imageUrl, imageHint, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="aspect-video overflow-hidden rounded-md border">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={liveUrl} target="_blank">
              <ExternalLink />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button variant="secondary" size="sm" asChild>
            <Link href={githubUrl} target="_blank">
              <Github />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
