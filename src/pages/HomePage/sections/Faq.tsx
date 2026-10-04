import React from 'react';
import Accordion from '@/components/ui/Accordion';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function FaqSection(): React.JSX.Element {
  const faqItems = [
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
    },
    {
      title: "Fiyatlandırma ve ödeme koşulları nasıldır?",
      content: "Projenin detaylarına ve teslimat takvimine göre şeffaf bir fiyatlandırma yapılır. Çalışma başlangıcında ön ödeme, proje tamamlandığında ise kalan ödeme şeklinde ilerlenir."
    },
    {
      title: "Proje teslimatından sonra destek sağlıyor musunuz?",
      content: "Evet, teslimat sonrasında baskı süreçleri, dijital varlıkların kullanımı ve ek revizyon ihtiyaçlarınızda destek sunmaya devam ediyorum."
    }
  ];

  return (
    <div id="faq" data-webild-section="faq">
      <SectionErrorBoundary name="faq">
        <section className="relative w-full py-24 bg-background">
          <div className="w-content-width mx-auto">
            <ScrollReveal variant="slide-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-4">
                  Sıkça Sorulan Sorular
                </span>
                <TextAnimation
                  tag="h2"
                  text="Aklınıza Takılan Sorular"
                  variant="fade-blur"
                  gradientText={false}
                  className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                />
                <p className="text-accent text-base md:text-lg">
                  Tasarım süreci, çalışma modeli ve merak ettiğiniz tüm detaylar.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-up" delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <Accordion items={faqItems} className="w-full" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </SectionErrorBoundary>
    </div>
  );
}