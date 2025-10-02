import React from 'react';
import CardNav from './components/CardNav';
import { LOGO_SVG } from './constants';
import type { CardNavItem } from './types';
import Beams from './components/Beams';

const App = () => {
  const items: CardNavItem[] = [
    {
      label: "Company",
      bgColor: "#111827",
      textColor: "#fff",
      links: [
        { label: "Our Mission", href: "#", ariaLabel: "Our Mission" },
        { label: "Team", href: "#", ariaLabel: "Meet the Team" }
      ]
    },
    {
      label: "Solutions",
      bgColor: "#1F2937",
      textColor: "#fff",
      links: [
        { label: "AI Platform", href: "#", ariaLabel: "Our AI Platform" },
        { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#374151",
      textColor: "#fff",
      links: [
        { label: "Contact Us", href: "#", ariaLabel: "Contact us" },
        { label: "Careers", href: "#", ariaLabel: "Careers at AIRIES AI" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative isolate">
       <div className="absolute inset-0 -z-10 h-full w-full">
         <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
       </div>
       <header className="relative z-50">
         <CardNav
            logo={LOGO_SVG}
            items={items}
            baseColor="#fff"
            menuColor="#111"
            buttonBgColor="#3FFF69"
            buttonTextColor="#111827"
            ease="power3.out"
          />
       </header>
    </main>
  );
};

export default App;