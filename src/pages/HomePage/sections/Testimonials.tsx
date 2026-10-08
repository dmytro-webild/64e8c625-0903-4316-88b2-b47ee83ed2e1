import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import RatingStars from "@/components/ui/RatingStars";

const testimonials = [
  {
    name: "Luminarian",
    role: "Güzellik & Kozmetik Markası",
    quote: "Yasemin Hanım ile ambalaj ve marka kimliği sürecimizde harika bir sinerji yakaladık. Tasarladığı bütünsel sistem sayesinde lansman sonrasında ürün satışlarımız gözle görülür şekilde arttı ve pazarda lüks bir algı oluşturduk.",
    rating: 5,
    result: "%180 Satış Artışı & Pazarda Lüks Algı",
    clientTag: "GUZELLIK",
    avatar: "https://picsum.photos/seed/310472034/400/400"
  },
  {
    name: "Nexafin",
    role: "Fintech & Teknoloji Girişimi",
    quote: "İsimlendirmeden marka rehberine ve web arayüz tasarımlarına kadar tüm yapıyı tek elden sıfırdan kurdu. Yatırım turumuz öncesinde kurumsal güvenilirliğimizi en üst seviyeye taşıyan profesyonel bir tasarım sistemimiz oldu.",
    rating: 5,
    result: "Sıfırdan Bütünsel Tasarım Sistemi",
    clientTag: "DANIŞMANLIK&TEKNOLOJİ",
    avatar: "https://picsum.photos/seed/524317474/400/400"
  },
  {
    name: "Vira Black Sea",
    role: "Perakende & Mağazacılık",
    quote: "Logo, tipografi ve mağaza ambalaj detaylarının hepsi mükemmel bir uyum içinde çalışıyor. Müşterilerimizden aldığımız geri bildirimler harika. Markamızın hikayesini en net şekilde ifade eden tasarımcı ile çalıştık.",
    rating: 5,
    result: "%120 Müşteri Sadakati Artışı",
    clientTag: "PERAKENDE",
    avatar: "https://picsum.photos/seed/1438617768/400/400"
  }
];

export default function TestimonialsSection() {
  return (
    <div data-webild-section="testimonials" id="testimonials">
      <section aria-label="Customer testimonials" className="py-20 bg-background">
        <div className="w-content-width mx-auto flex flex-col gap-12">
          <ScrollReveal variant="slide-up">
            <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
              <div className="px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase card rounded w-fit">
                Müşteri Deneyimleri
              </div>
              <TextAnimation
                text="Müşterilerimizin Başarı Hikayeleri & Somut Sonuçlar"
                variant="fade-blur"
                gradientText={true}
                tag="h2"
                className="text-3xl md:text-5xl font-semibold leading-tight text-balance"
              />
              <p className="text-base md:text-lg text-accent text-balance mt-1">
                Birlikte çalıştığımız markalara değer katan, güven oluşturan ve gerçek dünya sonuçları getiren müşteri yorumları.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
                <div className="card p-6 md:p-8 rounded flex flex-col justify-between h-full gap-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                      <RatingStars rating={item.rating} />
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-accent border border-foreground/15 px-2 py-0.5 rounded">
                        {item.clientTag}
                      </span>
                    </div>

                    <p className="text-foreground/90 text-sm md:text-base leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 border-t border-foreground/10">
                    <div className="bg-primary-cta/10 text-primary-cta px-3 py-1.5 rounded text-xs font-semibold w-fit">
                      ✨ {item.result}
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-foreground/10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">{item.name}</span>
                        <span className="text-xs text-accent">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}