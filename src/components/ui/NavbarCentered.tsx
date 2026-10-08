import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ArrowRight } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavbarCenteredProps {
  logo?: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const defaultLogo = "https://storage.googleapis.com/webild/users/user_3KFFa5W6OG5DQ11YaXgrbTF1V4I/uploaded-1791150305029-sbzk91sk.png";

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onClose?.();
};

const NavbarCentered = ({ logo = defaultLogo, navItems, ctaButton }: NavbarCenteredProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const logoSrc = logo || defaultLogo;

  return (
    <>
      <nav
        data-section="navbar"
        className={cls(
          "fixed z-1000 top-0 left-0 w-full transition-all duration-500 ease-in-out border-b border-white/10",
          isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex items-center justify-between gap-6 px-6 md:px-12 w-full max-w-[1800px]">
          {/* Left Side: Brand Statement & Logo */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center shrink-0">
              <img
                src={logoSrc}
                alt="Yasemin Günhan"
                className="h-7 md:h-9 w-auto object-contain"
              />
            </a>
            <span className="hidden xl:inline-block text-sm font-medium text-foreground/80 max-w-xs leading-snug">
              Yasemin Günhan® builds brand systems, not just logos.
            </span>
          </div>

          {/* Vertical Divider & Navigation Links */}
          <div className="hidden md:flex items-center gap-8 pl-8 border-l border-foreground/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm md:text-base font-medium text-foreground hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />

            <div
              className="flex md:hidden items-center justify-center shrink-0 size-9 rounded cursor-pointer primary-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Plus
                className={cls("w-1/2 h-1/2 text-primary-cta-text transition-transform duration-300", menuOpen ? "rotate-45" : "rotate-0")}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: "-135%" }}
            animate={{ y: 0 }}
            exit={{ y: "-135%" }}
            transition={{ type: "spring", damping: 26, stiffness: 170 }}
            className="md:hidden fixed z-1000 top-3 left-3 right-3 p-6 rounded card"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl text-foreground">Menu</p>
              <div
                className="flex items-center justify-center shrink-0 size-9 rounded cursor-pointer primary-button"
                onClick={() => setMenuOpen(false)}
              >
                <Plus className="w-1/2 h-1/2 text-primary-cta-text rotate-45" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, () => setMenuOpen(false))}
                    className="flex items-center justify-between py-2 text-base font-medium text-foreground"
                  >
                    {item.name}
                    <ArrowRight className="size-4 text-foreground" strokeWidth={1.5} />
                  </a>
                  {index < navItems.length - 1 && (
                    <div className="h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} className="w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarCentered;