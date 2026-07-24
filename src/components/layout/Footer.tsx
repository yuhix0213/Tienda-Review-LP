import {
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { TiendaReviewLogo } from "@/components/brand/TiendaReviewLogo";
import { Container } from "@/components/ui/Container";

const productLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Smart Review™", href: "#smart-review" },
  { label: "Confianza digital", href: "#confianza" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Solicitar acceso", href: "#registro" },
];

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" aria-label="Tienda Review — Inicio">
              <TiendaReviewLogo className="footer__official-logo" />
            </a>

            <p>
              Una solución de Azul International para fortalecer la reputación
              digital a partir de experiencias reales, decisiones humanas y
              procesos transparentes.
            </p>

            <div className="footer__trust">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Diseñado para construir confianza, no para fabricarla.</span>
            </div>
          </div>

          <div className="footer__nav">
            <div>
              <span className="footer__nav-title">Producto</span>
              {productLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>

            <div>
              <span className="footer__nav-title">Información</span>
              <span className="footer__pending-link">Política de privacidad — próximamente</span>
              <span className="footer__pending-link">Términos de uso — próximamente</span>
              <span className="footer__pending-link">Política de cookies — próximamente</span>
            </div>

            <div>
              <span className="footer__nav-title">Contacto</span>
              <span className="footer__pending-link">
                <Mail size={15} aria-hidden="true" />
                Canal de contacto en preparación
              </span>
              <span className="footer__location">
                <MapPin size={15} aria-hidden="true" />
                Paraguay
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span>© 2026 Tienda Review. Todos los derechos reservados.</span>
          <a
            href="https://azulinternational.com.py"
            target="_blank"
            rel="noreferrer"
          >
            Un proyecto de Azul International
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
