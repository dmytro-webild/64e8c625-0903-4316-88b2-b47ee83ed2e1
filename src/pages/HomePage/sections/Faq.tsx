import React, { useState } from 'react';
import Accordion from '@/components/ui/Accordion';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

const faqCategories: Record<string, Array<{ title: string; content: string }>> = {
  process: [
    {
      title: "Tasarım süreci nasıl ilerliyor ve ne kadar sürer?",
      content: "Proje kapsamına göre süreç genellikle 2-4 hafta arasında tamamlanır. Strateji belirleme, konsept geliştirme, revizyonlar ve nihai teslimat aşamalarını adım adım birlikte yürütüyoruz."
    },
    {
      title: "Marka kimliği veya ambalaj tasarımı için revizyon hakkım var mı?",
      content: "Evet, her tasarım aşamasında belirlenmiş revizyon haklarınız bulunur. Amacımız markanızın hedeflerine ve estetik standartlarına %100 uyum sağlayan en doğru sonucu üretmektir."
    },
    {
      title: "Sadece ambalaj tasarımı veya tek bir hizmet için çalışabilir miyiz?",
      content: "Kesinlikle. İhtiyacınıza göre tekil projeler (örneğin sadece ambalaj tasarımı veya web sitesi) ya da bütünsel marka stratejisi çözümleri sunuyorum."
    }
  ],
  pricing: [
    {
      title: "Fiyatlandırma ve ödeme koşulları nasıldır?",
      content: "Projenin detaylarına ve teslimat takvimine göre şeffaf bir fiyatlandırma yapılır. Çalışma başlangıcında ön ödeme, proje tamamlandığında ise kalan ödeme şeklinde ilerlenir."
    },
    {
      title: "Proje bütçesi ne zaman kesinleşir?",
      content: "İlk görüşme ve ihtiyaç analizinden sonra hazırlanan teklif belgesinde tüm kalemler ve net bütçe yazılı olarak tarafınıza sunulur."
    }
  ],
  deliverables: [
    {
      title: "Proje teslimatından sonra destek sağlıyor musunuz?",
      content: "Evet, teslimat sonrasında baskı süreçleri, dijital varlıkların kullanımı ve ek revizyon ihtiyaçlarınızda destek sunmaya devam ediyorum."
    },
    {
      title: "Tasarım dosyaları hangi formatlarda teslim ediliyor?",
      content: "Baskıya hazır vektörel formatlar (AI, PDF, EPS), dijital kullanım için yüksek çözünürlüklü PNG/SVG/JPG ve tipografi/renk rehberlerini içeren eksiksiz bir paket sunulur."
    }
  ]
};

export default function FaqSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('all');

  const currentItems = activeTab === 'all'
    ? Object.values(faqCategories).flat()
    : faqCategories[activeTab] || [];

  return (
    <div id="faq" data-webild-section="faq">
      <SectionErrorBoundary name="faq">
        <section className="relative w-full bg-background">
          <div className="w-content-width mx-auto">
            <ScrollReveal variant="slide-up">
              <div className="text-center max-w-content-width mx-auto">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-foreground/5 border border-foreground/10 text-foreground/70 rounded-full mb-4">
                  FAQ
                </span>
                <TextAnimation
                  tag="h2"
                  text="Sıkça Sorulan Sorular"
                  variant="fade-blur"
                  gradientText={false}
                  className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                />
                <p className="text-accent text-base md:text-lg">
                  Tasarım süreci, çalışma modeli ve merak ettiğiniz tüm detaylar.
                </p>
              </div>
            </ScrollReveal>

            {/* Category Filter Tabs */}
            <ScrollReveal variant="slide-up" delay={0.1}>
              <div className="flex justify-center">
                <div className="inline-flex items-center p-1.5 bg-card/80 border border-foreground/10 rounded-full shadow-sm gap-1 max-w-full overflow-x-auto">
                  {[
                    { key: 'all', label: 'Tüm Sorular' },
                    { key: 'process', label: 'Süreç & Çalışma' },
                    { key: 'pricing', label: 'Fiyatlandırma' },
                    { key: 'deliverables', label: 'Teslimat & Destek' }
                  ].map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveTab(cat.key)}
                      className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${ activeTab === cat.key ?'bg-foreground text-background shadow-md'
                          : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-up" delay={0.2}>
              <div className="max-w-content-width mx-auto">
                <Accordion
                  items={currentItems}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </SectionErrorBoundary>
    </div>
  );
}