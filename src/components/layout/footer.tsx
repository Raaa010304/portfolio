import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yasril Adim Al-Amin. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
