import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Anasayfa",
      "href": "#hero"
    },
    {
      "name": "Çalışmalar",
      "href": "#projects"
    },
    {
      "name": "Hakkımda",
      "href": "#about"
    },
    {
      "name": "Yazılar",
      "href": "#blog"
    },
    {
      "name": "İletişim",
      "href": "#contact"
    },
    {
      "name": "Hizmetler",
      "href": "#services"
    }
  ];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
          logo="https://storage.googleapis.com/webild/users/user_3KFFa5W6OG5DQ11YaXgrbTF1V4I/uploaded-1791150305029-sbzk91sk.png"
          ctaButton={{
            text: "Projeni anlat",
            href: "#contact",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
          columns={[
            {
              title: "İletişim",
              items: [
                {
                  label: "info@yasemingunhan.com",
                  href: "mailto:info@yasemingunhan.com",
                },
              ],
            },
            {
              title: "Sosyal",
              items: [
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/yasemin-gunhan-72bb55172/",
                },
              ],
            },
            {
              title: "Yasal",
              items: [
                {
                  label: "KVKK Politikası",
                  href: "#",
                },
              ],
            },
          ]}
          leftText="© 2024 Yasemin Günhan Design. Tüm hakları saklıdır."
          rightText="Adana, Türkiye"
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}