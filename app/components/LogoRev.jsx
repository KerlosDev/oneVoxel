import React from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiPrisma,
  SiLaravel,
  SiCplusplus,
  SiFsharp,
  SiBootstrap,
  SiMongodb,
  SiAmazonaws
} from 'react-icons/si';
import { FaCloud } from 'react-icons/fa';
import LogoLoop from './ui/LogoLoop';

const LogoRev = () => {

  const techLogos = [
    { node: <SiNextdotjs />, title: "Next.js 15", href: "https://nextjs.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
    { node: <SiFsharp />, title: "C#", href: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { node: <FaCloud />, title: "Cloud Essential", href: "https://aws.amazon.com" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  ];
 

  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology stack"
      />
    </div>
  )
}

export default LogoRev;