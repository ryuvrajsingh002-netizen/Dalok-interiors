import React from 'react';
import { Sparkles, Compass, Shield, Feather } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Tactile Organic Materiality',
      description: 'We prioritize raw textural purity — hand-loomed flax linen, unfinished white oak, and porous earthenware ceramics that develop a gentle patina over decades.',
    },
    {
      icon: Compass,
      title: 'Architectural Balance',
      description: 'Our furniture is conceived not as isolated objects, but as spatial anchors that allow light, airflow, and human tranquility to move freely across your interior.',
    },
    {
      icon: Shield,
      title: 'Sustainable Longevity',
      description: '100% FSC-certified timber, low-VOC natural finishes, and generational mortise-and-tenon joints ensure our pieces outlive transient trends.',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Dalok Interior"
      className="py-16 md:py-24 bg-[#F7F4EE] border-b border-[#EBE4D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Ethos Header */}
        <ScrollReveal direction="up" distance={30} duration={650} className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE5D9] text-xs font-semibold uppercase tracking-widest text-[#885232] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D97E4A]" />
            <span>The Atelier Ethos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#221F1B] font-normal mb-4">
            Harmonious Spaces for Mindful Living
          </h2>
          <p className="text-base sm:text-lg text-[#666056] leading-relaxed font-light">
            Founded on the belief that intentional design grounds our daily rituals, Dalok Interior crafts bespoke living environments with warm materiality and enduring craftsmanship.
          </p>
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                delay={idx * 140}
                distance={35}
                duration={700}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE5D9] shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6F2EA] flex items-center justify-center text-[#D97E4A] mb-5 border border-[#ECE5DA] shrink-0">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#221F1B] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666056] leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Numbers Strip with Scroll Reveal */}
        <ScrollReveal direction="up" delay={180} distance={30} duration={700}>
          <div className="rounded-3xl bg-[#ECE5D8]/80 p-8 sm:p-10 border border-[#DFD7C8] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#221F1B] mb-1">14+</div>
              <div className="text-xs text-[#6F6960] uppercase tracking-wider font-medium">Years of Studio Design</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#221F1B] mb-1">100%</div>
              <div className="text-xs text-[#6F6960] uppercase tracking-wider font-medium">FSC Certified Woods</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#221F1B] mb-1">4</div>
              <div className="text-xs text-[#6F6960] uppercase tracking-wider font-medium">Flagship Showrooms</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#221F1B] mb-1">1,850+</div>
              <div className="text-xs text-[#6F6960] uppercase tracking-wider font-medium">Homes Elevated</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
