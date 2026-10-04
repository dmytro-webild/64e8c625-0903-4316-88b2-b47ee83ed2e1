import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="Marka Tasarımı & AEO"
      title="Markanı bir sistem olarak tasarlıyorum."
      description="Adana merkezli tasarım stüdyosu. Stratejik marka kimliği, ambalaj tasarımı ve yapay zekâ destekli arama görünürlüğü (AEO) çözümleri ile markanızı geleceğe hazırlıyorum."
      primaryButton={{
        text: "Çalışmalara bak",
        href: "#projects",
      }}
      secondaryButton={{
        text: "Projeni anlat",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition_23-2147915838.jpg",
          title: "Marka Kimliği",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition_23-2147915838.jpg",
          title: "Ambalaj Tasarımı",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition_23-2147915838.jpg",
          title: "AEO Çözümleri",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Hakkımda"
      descriptions={[
        "Yasemin Günhan olarak, markaların sadece görsel değil, işlevsel ve stratejik bir sisteme sahip olmaları gerektiğine inanıyorum. Tasarım yaklaşımım; derin analiz, estetik disiplin ve modern teknolojilerin sentezidir.",
        "Amacım, karmaşık marka hikâyelerini yalın ve etkileyici bir görsel dile dönüştürerek, markanızın hedef kitlesiyle kalıcı bağlar kurmasını sağlamaktır.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCards
      tag="Hizmetlerim"
      title="Stratejik Tasarım Hizmetleri"
      description="Modern markalar için uçtan uca tasarım ve görünürlük çözümleri."
      items={[
        {
          title: "Marka kimliği",
          description: "Sistem odaklı, uzun vadeli ve ölçeklenebilir marka stratejileri ve görsel kimlik.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-travel-icon-with-boat_23-2151037327.jpg",
        },
        {
          title: "Ambalaj tasarımı",
          description: "Ürününüzün hikâyesini rafta anlatan, tüketiciyle ilk temasta etki yaratan özgün ambalaj çözümleri.",
          imageSrc: "http://img.b2bpic.net/free-photo/ripples-water_23-2147797814.jpg",
        },
        {
          title: "Web sitesi",
          description: "Minimalist, kullanıcı dostu ve dönüşüm odaklı dijital deneyimler tasarlıyorum.",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169899.jpg",
        },
        {
          title: "Ek hizmet: AEO",
          description: "Markanızın yapay zekâ tabanlı arama motorlarında görünür olmasını sağlayan teknik ve içerik optimizasyonu.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-vhs-cover-template_23-2149839498.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="projects" data-section="projects">
    <SectionErrorBoundary name="projects">
          <FeaturesRevealCardsBento
      tag="Projeler"
      title="Seçilmiş Çalışmalar"
      description="Markaların dünyasına dair stratejik ve estetik çıktılar."
      items={[
        {
          title: "Günhan Marine",
          description: "Denizcilik sektörüne yönelik stratejik marka kimliği.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/view-paper-boat_23-2150785152.jpg",
        },
        {
          title: "Vira Blacksea",
          description: "Modern ve minimalist deniz ürünleri ambalaj tasarımı.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/marine-composition-with-rope_23-2147804761.jpg",
        },
        {
          title: "Alesta Marine",
          description: "Sektörel dijital görünürlük ve web tasarımı.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-vhs-cover-template_23-2149875857.jpg",
        },
        {
          title: "Coming Soon",
          description: "Yeni projeler çok yakında.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/elegant-furniture-logo-concept_23-2148457463.jpg",
        },
        {
          title: "Coming Soon",
          description: "Yeni projeler çok yakında.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169885.jpg",
        },
        {
          title: "Coming Soon",
          description: "Yeni projeler çok yakında.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-vhs-cover-template_23-2149913955.jpg",
        },
        {
          title: "Coming Soon",
          description: "Yeni projeler çok yakında.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/plug-hybrid-electric-vehicle-combining-electric-motor-with-combustion-engine_482257-124569.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="İletişim"
      text="Markanızın sistemini tasarlamaya başlayalım. Projenizi anlatın, birlikte neler yapabileceğimizi planlayalım."
      primaryButton={{
        text: "info@yasemingunhan.com",
        href: "mailto:info@yasemingunhan.com",
      }}
      secondaryButton={{
        text: "LinkedIn Profili",
        href: "https://www.linkedin.com/in/yasemin-gunhan-72bb55172/",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
