"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { TiendaReviewLogo } from "@/components/brand/TiendaReviewLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 16);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 1120) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`site-header site-header--v2 ${
        isScrolled ? "is-scrolled" : ""
      }`}
    >
      <Container className="site-header__inner site-header__inner--v2">
        <a
          href="#inicio"
          className="site-header__brand site-header__brand--v2"
          aria-label="Tienda Review — Inicio"
          onClick={closeMenu}
        >
          <TiendaReviewLogo
            priority
            className="site-header__official-logo"
          />
        </a>

        <nav
          className={`site-header__nav site-header__nav--v2 ${
            isMenuOpen ? "is-open" : ""
          }`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <div className="site-header__mobile-cta">
            <ButtonLink
              href="#registro"
              className="site-header__mobile-cta-button"
            >
              Solicitar acceso
            </ButtonLink>
          </div>
        </nav>

        <div className="site-header__actions site-header__actions--v2">
          <ButtonLink
            href="#registro"
            className="site-header__desktop-cta"
          >
            Solicitar acceso
          </ButtonLink>

          <button
            className="menu-button menu-button--v2"
            type="button"
            aria-label={
              isMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
}
