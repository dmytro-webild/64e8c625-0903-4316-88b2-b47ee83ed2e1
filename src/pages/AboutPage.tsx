import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Yasemin Günhan"
        navItems={navItems}
        ctaButton={{ text: "Projenizi anlatın", href: "/contact" }}
      />

      <main>
        <HeroBillboard
          tag="Hakkımda"
          title="Yasemin Günhan, marka kimliği ve ambalaj tasarımcısı"
          description="Logo, renk, yazı, ambalaj ve marka rehberini tek bir tasarım sistemi olarak kuruyorum. Tasarımın yanında, markanızın yapay zekâ destekli aramalarda bulunmasını da sağlıyorum."
          primaryButton={{ text: "Projenizi anlatın", href: "/contact" }}
          secondaryButton={{ text: "İletişime Geçin", href: "/contact" }}
          imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />

        <FeaturesTaggedCards
          tag="Yaklaşım & Detaylar"
          title="Markanızı Tek Elden Tasarlıyorum"
          description="Aşağıda marka geliştirme sürecim, vizyonum, misyonum ve çalışma modelim hakkında bilgi bulabilirsiniz."
          textAnimation="slide-up"
          items={[
            {
              tag: "Kimdir",
              title: "Yasemin Günhan kimdir?",
              description: "Ben Yasemin Günhan, marka kimliği ve ambalaj tasarımcısıyım. Logo tek başına marka değildir. Renk, yazı, dil ve ambalaj aynı sistemin parçaları olarak çalıştığında marka tutarlı görünür ve hatırlanır. İsimlendirmeden marka rehberine kadar bütün kimliği tek elden tasarlıyorum. Türkiye’deki ve yurt dışındaki markalarla çalışıyorum, her işi baştan sona bizzat yürütüyorum.",
            },
            {
              tag: "Vizyon",
              title: "Vizyonum nedir?",
              description: "Küçük ve orta ölçekli her markanın, büyük bir ajansa ihtiyaç duymadan özgün, tutarlı ve güçlü bir tasarıma sahip olmasını istiyorum. İyi tasarlanmış bir marka, ilk bakışta kendini tanıtır ve güven verir.",
            },
            {
              tag: "Misyon",
              title: "Misyonum nedir?",
              description: "Markaları tasarım odağında, kısa ve net bir süreçle kurmak. Önce markanın kim olduğunu ve müşterisine ne söylemesi gerektiğini netleştiririm. Sonra kimliği ve ambalajı tasarlarım. Tasarımın üzerine, isteyen markalar için yapay zekâ destekli arama (AEO) çalışması ekleyerek müşterilerin Google’da ve yapay zekâ asistanlarında markayı bulmasını sağlarım. Her projede kapsamı net, dili sade ve süreci şeffaf tutarım.",
            },
            {
              tag: "Süreç",
              title: "Nasıl çalışıyorum?",
              description: "Saat başı değil, kapsamı belli paketlerle çalışırım. Önce kısa bir görüşmede markanızı ve hedeflerinizi dinlerim, sonra kapsamı ve süreci netleştirip teklifimi sunarım.",
            },
          ]}
        />

        <ContactCta
          tag="Birlikte Çalışalım"
          text="Markanız için güçlü ve özgün bir kimlik tasarlamaya hazır mısınız?"
          primaryButton={{ text: "Projenizi anlatın", href: "/contact" }}
          secondaryButton={{ text: "İletişime Geçin", href: "/contact" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Yasemin Günhan"
        columns={[{ title: "Navigasyon", items: navItems.map((n) => ({ label: n.name, href: n.href })) }]}
        copyright="© 2025 Yasemin Günhan. Tüm hakları saklıdır."
        links={[{ label: "Gizlilik", href: "/privacy" }]}
      />
    </div>
  );
}