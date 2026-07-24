"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { TiendaReviewLogo } from "@/components/brand/TiendaReviewLogo";
import { Container } from "@/components/ui/Container";

const navigation = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#problema", label: "El problema" },
  { href: "#smart-review", label: "Smart Review™" },
  { href: "#confianza", label: "Confianza" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) {
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
    <header className="site-header">
      <Container className="site-header__inner">
        <a
          href="#inicio"
          className="site-header__brand"
          aria-label="Tienda Review — Inicio"
          onClick={closeMenu}
        >
          <TiendaReviewLogo priority className="site-header__logo" />
        </a>

        <nav
          id="site-navigation"
          className={`site-header__nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            href="#registro"
            className="button button--primary site-header__mobile-cta"
            onClick={closeMenu}
          >
            Solicitar acceso
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </nav>

        <div className="site-header__actions">
          <a
            href="#registro"
            className="button button--primary desktop-only"
          >
            Solicitar acceso
            <ArrowRight size={17} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="menu-button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => {
              setIsMenuOpen((current) => !current);
            }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
