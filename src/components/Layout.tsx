import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Ana sayfa",
      "href": "/"
    },
    {
      "name": "Çalışmalar",
      "href": "/#projects"
    },
    {
      "name": "Hizmetler",
      "href": "/#services"
    },
    {
      "name": "Hakkımda",
      "href": "/hakkimda"
    },
    {
      "name": "Yazılar",
      "href": "/#blog"
    },
    {
      "name": "İletişim",
      "href": "/#contact"
    },
  ];

  return (
    <StyleProvider buttonVariant="default" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
          logo=""
          ctaButton={{
            text: "Projenizi anlatın",
            href: "/#contact",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow pt-[80px]">
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