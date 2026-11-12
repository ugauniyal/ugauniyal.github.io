import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Hero } from '@/components/sections/Hero';
import { Reviews } from '@/components/sections/Reviews';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Reviews />
      <Services />
    </>
  );
}
