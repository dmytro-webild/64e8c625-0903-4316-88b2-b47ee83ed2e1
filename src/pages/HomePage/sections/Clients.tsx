import ScrollReveal from "@/components/ui/ScrollReveal";

const clients = [
  { name: "LUMINARIAN", subtitle: "GUZELLIK" },
  { name: "VIRA BLACK SEA", subtitle: "SEAFOOD" },
  { name: "NEXAFIN", subtitle: "Teknoloji" },
  { name: "GUNHAN MARINE", subtitle: "Marine Servis" },
  { name: "Nextphase", subtitle: "Lojistik" },
  { name: "VERTEX", subtitle: "" },
  { name: "AKBANK", subtitle: "Finans" },
  { name: "ÇİMSA", subtitle: "Sanayi" }
];

export default function ClientsSection() {
  return (
    <div data-webild-section="clients" id="clients">
      <section aria-label="Clients logo bar" className="py-12 bg-background border-y border-foreground/10 overflow-hidden">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="slide-up">
            <div className="flex flex-col items-center gap-6">
              <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase text-center">
                Güvenen Markalar & İş Ortakları
              </p>

              <div className="relative w-full overflow-hidden mask-fade-x">
                <div className="flex w-max animate-marquee-horizontal gap-12 md:gap-16 items-center" style={{ animationDuration: "35s" }}>
                  {[...clients, ...clients, ...clients].map((client, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 opacity-65 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default select-none"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-cta" />
                      <span className="text-lg md:text-xl font-bold tracking-widest text-foreground">
                        {client.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-accent border border-foreground/15 px-1.5 py-0.5 rounded">
                        {client.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}