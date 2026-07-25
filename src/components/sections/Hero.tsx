import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            REPUTACIÓN BASADA EN EXPERIENCIAS REALES
          </div>

          <h1 id="hero-title">
            <span className="hero__title-line hero__title-line--navy">
              Convierte buenas
            </span>

            <span className="hero__title-line hero__title-line--navy">
              experiencias en
            </span>

            <span className="hero__title-line hero__title-line--green">
              confianza visible.
            </span>
          </h1>

          <p className="hero__lead">
            Tienda Review ayuda a tus clientes a compartir opiniones auténticas
            de forma simple, clara y humana. Smart Review™ organiza la idea; la
            persona siempre conserva la decisión final.
          </p>

          <div className="hero__actions">
            <a href="#registro" className="button button--primary">
              Solicitar acceso
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a href="#como-funciona" className="button button--secondary">
              Ver cómo funciona
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__proof" aria-label="Principios de Tienda Review">
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Sin descargar una app
            </span>

            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Nada se publica automáticamente
            </span>

            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Control humano de principio a fin
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Vista del proceso de reseña">
          <div className="hero__visual-background" aria-hidden="true" />

          <div
            className="floating-card floating-card--google"
            aria-hidden="true"
          >
            <div className="floating-card__icon">G</div>

            <div>
              <strong>Google Reviews</strong>
              <p>Más confianza donde importa</p>
            </div>
          </div>

          <div
            className="floating-card floating-card--rating"
            aria-hidden="true"
          >
            <div className="floating-card__rating-row">
              <strong>4.9</strong>
              <span>★★★★★</span>
            </div>

            <p>Experiencia verificada</p>
          </div>

          <div
            className="floating-card floating-card--growth"
            aria-hidden="true"
          >
            <div className="floating-card__growth-value">+38%</div>
            <p>más opiniones compartidas</p>
          </div>

          <div className="hero__trust-badge" aria-hidden="true">
            <span>
              <ShieldCheck size={18} />
            </span>

            <div>
              <strong>La persona siempre decide</strong>
              <small>La tecnología solo acompaña</small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
