import ProjectCard from '@/components/project-card';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Pembuatan Animasi Islami : Kisah PouCil',
    description: 'Membuat Kisah PouCil adalah animasi islami 3D yang saya buat menggunakan software 3D Blender. Animasi ini mengangkat nilai moral melalui cerita inspiratif. Saya bertanggung jawab atas modeling, animasi, rigging, dan rendering, menciptakan visual yang dinamis dan edukatif. Portofolio ini mencerminkan keahlian saya dalam animasi 3D, storytelling, dan desain visual.',
    tags: ['Blender', '3D Animation', 'Storytelling'],
    imageUrl: '/poucil.png',
    imageHint: 'Kisah PouCil Animation',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Modelling Lomba : Digital Content Competition Bank Indonesia 2024',
    description: 'Berpartisipasi dalam Digital Content Competition Bank Indonesia 2024, mengembangkan proyek 3D modeling yang mengangkat tema inovasi digital. Proses pengerjaan mencakup modeling, texturing, lighting, dan rendering, menghasilkan visual yang detail dan estetis. Portofolio ini menunjukkan keahlian saya dalam desain 3D, kreativitas visual, dan produksi konten digital berkualitas.',
    tags: ['Blender', '3D Modeling', 'Digital Content'],
    imageUrl: '/bank.png',
    imageHint: 'Bank Indonesia Digital Content Competition',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pembuatan Maskot Kampung Lemon, Sumberdem, Wonosari, Kabupaten Malang',
    description: 'Membuat maskot Kampung Lemon saat kegiatan KKM di desa Sumberdem, Wonosari, Kabupaten Malang. Saya menciptakan karakter menggunakan software 3D Blender yang merepresentasikan identitas kampung. Proses desain meliputi konseptualisasi, ilustrasi, dan pewarnaan, menampilkan keahlian saya dalam desain grafis dan branding visual.',
    tags: ['Blender', '3D Modeling', 'Graphic Design', 'Branding'],
    imageUrl: '/lemon.png',
    imageHint: 'Kampung Lemon Mascot',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pembuatan Environment Project Game : Save Me !',
    description: 'Mendesain environment kota bergaya low poly menggunakan Blender dan Unity untuk game bertema penyelamatan. Terdiri dari gedung rusak, jalan, kendaraan, dan area publik yang mendukung suasana pasca-bencana dengan pencahayaan malam dan detail visual realistis.',
    tags: ['Blender', 'Unity', 'Environment Design', 'Low Poly'],
    imageUrl: '/save_me_env.png',
    imageHint: 'Save Me! Game Environment',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pembuatan & Pemrograman Project Game Genre Maze',
    description: 'Membuat game third-person & Fps ber-genre maze menggunakan Unity dalam memenuhi project akhir mata kuliah Pemrograman Multimedia & Game, dilengkapi sistem navigasi musuh (AI), health bar, dan mekanik pertarungan. Proyek ini melibatkan pemrograman logika gameplay, pathfinding, dan interaksi karakter dalam lingkungan labirin 3D.',
    tags: ['Unity', 'Game Development', 'C#', 'AI', 'Pathfinding'],
    imageUrl: '/maze.jpg',
    imageHint: 'Maze Game Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Modelling Character Utama & NPC Game : Save Me !',
    description: 'Membuat model 3D karakter utama dan NPC menggunakan Blender untuk game “Save Me!”. Karakter dirancang dengan gaya low poly, mencerminkan role player seperti tim SAR, dokter, dan masyarakat, lengkap dengan ekspresi dan detail sederhana yang mendukung visual game.',
    tags: ['Blender', '3D Modeling', 'Character Design', 'Low Poly'],
    imageUrl: '/save_me_char.png',
    imageHint: 'Save Me! Character Modeling',
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
