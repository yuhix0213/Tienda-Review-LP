"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { TiendaReviewLogo } from "@/components/brand/TiendaReviewLogo";
import { Container } from "@/components/ui/Container";

const navigation = [
  {
    href: "#como-funciona",
    label: "Cómo funciona",
  },
  {
    href: "#problema",
    label: "El problema",
  },
  {
    href: "#smart-review",
    label: "Smart Review™",
  },
  {
    href: "#confianza",
    label: "Confianza",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={[
        "tr-header-v3",
        isScrolled ? "tr-header-v3--scrolled" : "",
        isMenuOpen ? "tr-header-v3--menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className="tr-header-v3__inner">
        <a
          href="#inicio"
          className="tr-header-v3__brand"
          aria-label="Tienda Review — Inicio"
          onClick={closeMenu}
        >
          <span className="tr-header-v3__logo-surface">
            <TiendaReviewLogo
              priority
              className="tr-header-v3__logo"
            />
          </span>
        </a>

        <nav
          id="site-navigation"
          className={[
            "tr-header-v3__nav",
            isMenuOpen ? "tr-header-v3__nav--open" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label="Navegación principal"
        >
          <div className="tr-header-v3__nav-links">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#registro"
            className="tr-header-v3__mobile-cta"
            onClick={closeMenu}
          >
            <span>Solicitar acceso</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </nav>

        <div className="tr-header-v3__actions">
          <a
            href="#registro"
            className="tr-header-v3__cta"
          >
            <span>Solicitar acceso</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="tr-header-v3__menu-button"
            aria-label={
              isMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => {
              setIsMenuOpen((current) => !current);
            }}
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
}
