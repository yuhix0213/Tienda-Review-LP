"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TiendaReviewLogo } from "@/components/brand/TiendaReviewLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

const navigation = [
  ["#como-funciona", "Cómo funciona"],
  ["#problema", "El problema"],
  ["#smart-review", "Smart Review™"],
  ["#confianza", "Confianza"],
  ["#faq", "FAQ"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#inicio" className="site-header__brand" aria-label="Tienda Review — Inicio">
          <TiendaReviewLogo priority />
        </a>

        <nav
          className={`site-header__nav ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ButtonLink href="#registro">Solicitar acceso</ButtonLink>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
