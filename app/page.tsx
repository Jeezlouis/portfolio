"use client";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";

// Dynamically import components that use animations
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ClientOnly>
          <FloatingNav navItems={navItems} />
        </ClientOnly>
        <ClientOnly fallback={<div className="min-h-screen" />}>
          <Hero />
        </ClientOnly>
        <Grid />
        <ClientOnly>
          <RecentProjects />
        </ClientOnly>
        <ClientOnly>
          <Clients />
        </ClientOnly>
        <ClientOnly>
          <Experience />
        </ClientOnly>
        <ClientOnly>
          <Approach />
        </ClientOnly>
        <Footer />
      </div>
    </main>
  );
};

export default Home;