import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "IA con supervisión humana",
  },
  {
    icon: CheckCircle2,
    label: "Sin publicaciones automáticas",
  },
  {
    icon: Check,
    label: "Tu cliente siempre decide",
  },
];

export function Hero() {
  return (
    <section id="inicio" className="hero hero--v2">
      <div
        className="hero__background-grid"
        aria-hidden="true"
      />

      <div
        className="hero__background-orb hero__background-orb--one"
        aria-hidden="true"
      />

      <div
        className="hero__background-orb hero__background-orb--two"
        aria-hidden="true"
      />

      <Container className="hero__inner hero__inner--v2">
        <div className="hero__copy hero__copy--v2">
          <div className="hero__eyebrow hero__eyebrow--v2">
            <Sparkles size={16} aria-hidden="true" />
            <span>SMART REVIEW™</span>
          </div>

          <h1 className="hero__title">
            Tu reputación vende
            <span>
              incluso cuando tu negocio está cerrado.
            </span>
          </h1>

          <p className="hero__lead hero__lead--v2">
            Convierte experiencias reales en confianza visible.
            Tienda Review ayuda a tus clientes a expresar mejor
            lo que vivieron, sin publicar nada automáticamente.
          </p>

          <div className="hero__value-line">
            <span>Más opiniones auténticas.</span>
            <span>Más credibilidad.</span>
            <span>Más oportunidades.</span>
          </div>

          <div className="hero__actions hero__actions--v2">
            <ButtonLink
              href="#registro"
              className="hero__primary-action"
            >
              Solicitar acceso
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>

            <ButtonLink
              href="#como-funciona"
              variant="secondary"
              className="hero__secondary-action"
            >
              Cómo funciona
              <ArrowDown size={17} aria-hidden="true" />
            </ButtonLink>
          </div>

          <div
            className="hero__proof hero__proof--v2"
            aria-label="Principios de confianza"
          >
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <span key={point.label}>
                  <Icon size={17} aria-hidden="true" />
                  {point.label}
                </span>
              );
            })}
          </div>
        </div>

        <div
          className="hero__visual hero__visual--v2"
          aria-label="Ejemplo conceptual del proceso de Smart Review"
        >
          <div
            className="hero__visual-ring hero__visual-ring--outer"
            aria-hidden="true"
          />

          <div
            className="hero__visual-ring hero__visual-ring--inner"
            aria-hidden="true"
          />

          <div
            className="hero__glow hero__glow--v2"
            aria-hidden="true"
          />

          <div className="device-mockup device-mockup--v2">
            <div
              className="device-mockup__speaker"
              aria-hidden="true"
            />

            <div
              className="device-mockup__notch"
              aria-hidden="true"
            />

            <div className="device-mockup__screen">
              <div className="review-survey review-survey--v2">
                <div className="review-survey__brand">
                  <span className="review-survey__brand-icon">
                    <Sparkles size={15} aria-hidden="true" />
                  </span>

                  <span>Tienda Review</span>
                </div>

                <p className="review-survey__label">
                  Tu experiencia
                </p>

                <h2>¿Cómo fue tu visita?</h2>

                <p className="review-survey__instruction">
                  Selecciona una puntuación y comparte tu
                  experiencia.
                </p>

                <div
                  className="review-survey__stars"
                  aria-label="Cinco estrellas"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={27}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="review-survey__answer">
                  Excelente atención y ambiente.
                </div>

                <div className="review-survey__draft">
                  <div className="review-survey__draft-title">
                    <Sparkles size={17} aria-hidden="true" />
                    <strong>Smart Review™</strong>
                  </div>

                  <p>
                    “Excelente atención, ambiente agradable y
                    una experiencia que sin duda repetiría.”
                  </p>

                  <div className="review-survey__control">
                    <ShieldCheck size={15} aria-hidden="true" />
                    Tú revisas antes de continuar
                  </div>
                </div>

                <button type="button">
                  Continuar a Google
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <article className="floating-card floating-card--google floating-card--v2">
            <div className="floating-card__icon">
              G
            </div>

            <div>
              <span className="floating-card__step">
                Paso 1
              </span>
              <strong>Experiencia real</strong>
              <p>El cliente comparte lo que vivió.</p>
            </div>
          </article>

          <article className="floating-card floating-card--rating floating-card--v2">
            <span className="floating-card__step">
              Paso 2
            </span>

            <div className="floating-card__rating-row">
              <strong>4.9</strong>
              <span>★★★★★</span>
            </div>

            <p>Smart Review organiza el mensaje.</p>
          </article>

          <article className="floating-card floating-card--growth floating-card--v2">
            <span className="floating-card__step">
              Paso 3
            </span>

            <span className="floating-card__growth-value">
              Control humano
            </span>

            <p>El cliente revisa y decide si continuar.</p>
          </article>
        </div>
      </Container>

      <a
        href="#como-funciona"
        className="hero__scroll-cue"
        aria-label="Ir a la sección Cómo funciona"
      >
        <span>Descubrir cómo funciona</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
