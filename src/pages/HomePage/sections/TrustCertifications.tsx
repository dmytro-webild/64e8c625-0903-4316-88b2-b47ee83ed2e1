import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import { ShieldCheck, Award, CheckCircle2, Sparkles, Lock, FileCheck } from "lucide-react";

export default function TrustCertificationsSection() {
  const certifications = [
    {
      icon: ShieldCheck,
      badge: "Sözleşmeli Güvence",
      title: "Gizlilik & NDA Protokolü",
      description: "Tüm proje süreçleri, fikri mülkiyet hakları ve stratejik dokümanlar bağlayıcı Gizlilik Sözleşmesi (NDA) ile koruma altına alınır."
    },
    {
      icon: Award,
      badge: "Tescil Uyumluluğu",
      title: "Sınai Mülkiyet & WIPO Standartları",
      description: "Tasarlanan isim, logo ve ambalaj sistemleri Türk Patent ve uluslararası tescil kriterlerine tam uyumlu olarak kurgulanır."
    },
    {
      icon: CheckCircle2,
      badge: "Üretim Normları",
      title: "ISO Baskı & Ambalaj Kalitesi",
      description: "Ambalaj bıçak izleri, renk profilleri ve matbaa dosyaları ISO baskı standartlarına ve sektörel kalite normlarına uygun teslim edilir."
    },
    {
      icon: Sparkles,
      badge: "AI & SEO Uyumlu",
      title: "Arama Motoru & GEO Akreditasyonu",
      description: "Markanızın arama motorlarında ve yapay zekâ asistanlarında (ChatGPT, Perplexity) doğru bulunmasını sağlayan veri yapısı."
    },
    {
      icon: Lock,
      badge: "Kurumsal Güvenlik",
      title: "Fintech & Enterprise Veri Güvenliği",
      description: "Hassas finansal ve teknolojik girişimlerin dijital varlıkları 256-bit şifreli altyapıda güvenle saklanır ve iletilir."
    },
    {
      icon: FileCheck,
      badge: "Tam Mülkiyet",
      title: "%100 Lisans & Dosya Devri",
      description: "Proje sonunda tüm kaynak dosyalar, tipografi lisans yönlendirmeleri ve vektörel materyaller eksiksiz olarak tarafınıza devredilir."
    }
  ];

  return (
    <div data-webild-section="trust-certifications" id="trust-certifications">
      <section aria-label="Security, Certifications & Trust Badges" className="py-20 bg-background border-b border-foreground/10">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="slide-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-accent/15 text-foreground rounded-full mb-4 border border-foreground/10">
                Güvenlik & Kalite Standartları
              </span>
              <TextAnimation
                tag="h2"
                text="Kurumsal Güvenilirlik & Tescil Sertifikasyonu"
                variant="fade-blur"
                gradientText={false}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              />
              <p className="text-accent text-base md:text-lg">
                Marka kimliği, ambalaj üretimi ve dijital varlıklarınız uluslararası güvenlik, tescil ve kalite protokolleriyle güvence altındadır.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="card p-6 md:p-8 rounded flex flex-col justify-between hover:border-primary-cta/40 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded bg-primary-cta/10 text-primary-cta flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-foreground" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded bg-background text-foreground/80 border border-foreground/10">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2.5 group-hover:text-foreground transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center gap-2 text-xs text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-cta" />
                      <span>Sertifikalı & Doğrulanmış Standart</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.25}>
            <div className="mt-12 p-6 rounded card border border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-cta/15 flex items-center justify-center text-foreground shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    Sözleşmeli Güvenlik & Gizlilik Garantisi
                  </h4>
                  <p className="text-xs text-accent mt-0.5">
                    Tüm projelerde iş başlamadan önce karşılıklı Gizlilik Sözleşmesi (NDA) imzalanır.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="primary-button px-5 py-2.5 rounded text-xs font-semibold whitespace-nowrap shrink-0"
              >
                Proje Güvenlik Şartlarını İnceleyin
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}