import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
  QrCode,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const principles = [
  {
    icon: MessageSquareText,
    title: "Experiencia real",
    description: "La información nace de lo que vivió el cliente.",
  },
  {
    icon: Sparkles,
    title: "Asistencia inteligente",
    description: "Smart Review™ ayuda a ordenar la idea.",
  },
  {
    icon: UserCheck,
    title: "Decisión humana",
    description: "La persona revisa, edita y decide.",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="tr-hero-v3"
      aria-labelledby="hero-title"
    >
      <div className="tr-hero-v3__ambient" aria-hidden="true">
        <div className="tr-hero-v3__grid" />
        <div className="tr-hero-v3__glow tr-hero-v3__glow--one" />
        <div className="tr-hero-v3__glow tr-hero-v3__glow--two" />
        <div className="tr-hero-v3__line tr-hero-v3__line--one" />
        <div className="tr-hero-v3__line tr-hero-v3__line--two" />
      </div>

      <Container className="tr-hero-v3__container">
        <div className="tr-hero-v3__copy">
          <div className="tr-hero-v3__eyebrow">
            <span className="tr-hero-v3__eyebrow-icon">
              <Sparkles size={15} aria-hidden="true" />
            </span>

            <span>Reputación basada en experiencias reales</span>
          </div>

          <h1 id="hero-title" className="tr-hero-v3__title">
            Haz visible la confianza que tu negocio
            <span>ya está generando.</span>
          </h1>

          <p className="tr-hero-v3__lead">
            Tienda Review transforma una buena experiencia en un
            proceso simple para compartir una opinión auténtica,
            con asistencia inteligente y control humano de
            principio a fin.
          </p>

          <div className="tr-hero-v3__actions">
            <a
              href="#registro"
              className="tr-hero-v3__button tr-hero-v3__button--primary"
            >
              <span>Solicitar acceso</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href="#como-funciona"
              className="tr-hero-v3__button tr-hero-v3__button--secondary"
            >
              <span>Ver cómo funciona</span>
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div
            className="tr-hero-v3__assurance"
            aria-label="Principios de Tienda Review"
          >
            <div className="tr-hero-v3__assurance-icon">
              <ShieldCheck size={20} aria-hidden="true" />
            </div>

            <div>
              <strong>Nada se publica automáticamente.</strong>
              <p>
                Smart Review™ prepara una propuesta. El cliente
                conserva la decisión final.
              </p>
            </div>
          </div>
        </div>

        <div
          className="tr-hero-v3__visual"
          aria-label="Representación del proceso Tienda Review"
        >
          <div className="tr-hero-v3__visual-header">
            <div>
              <span className="tr-hero-v3__visual-kicker">
                Flujo de confianza
              </span>

              <h2>De la experiencia a una opinión clara</h2>
            </div>

            <div className="tr-hero-v3__status">
              <span />
              Control humano activo
            </div>
          </div>

          <div className="tr-hero-v3__workflow">
            <div className="tr-hero-v3__qr-panel">
              <div className="tr-hero-v3__panel-label">
                <span>01</span>
                Punto de contacto
              </div>

              <div className="tr-hero-v3__qr-card">
                <div className="tr-hero-v3__qr-code">
                  <QrCode size={92} strokeWidth={1.35} aria-hidden="true" />
                </div>

                <div>
                  <strong>Escanea y participa</strong>
                  <p>
                    Sin descargar una aplicación.
                  </p>
                </div>
              </div>

              <div className="tr-hero-v3__mini-note">
                <CheckCircle2 size={16} aria-hidden="true" />
                Acceso simple desde el navegador
              </div>
            </div>

            <div className="tr-hero-v3__workflow-arrow" aria-hidden="true">
              <ChevronRight size={22} />
            </div>

            <div className="tr-hero-v3__experience-panel">
              <div className="tr-hero-v3__panel-label">
                <span>02</span>
                Experiencia
              </div>

              <div className="tr-hero-v3__question">
                <p>¿Cómo fue tu experiencia?</p>

                <div
                  className="tr-hero-v3__stars"
                  aria-label="Cinco estrellas seleccionadas"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={23}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="tr-hero-v3__customer-answer">
                “La atención fue rápida y el equipo explicó todo
                con mucha claridad.”
              </div>
            </div>

            <div className="tr-hero-v3__workflow-arrow" aria-hidden="true">
              <ChevronRight size={22} />
            </div>

            <div className="tr-hero-v3__review-panel">
              <div className="tr-hero-v3__panel-label">
                <span>03</span>
                Smart Review™
              </div>

              <div className="tr-hero-v3__review-card">
                <div className="tr-hero-v3__review-card-heading">
                  <span>
                    <Sparkles size={15} aria-hidden="true" />
                  </span>

                  <strong>Borrador sugerido</strong>
                </div>

                <p>
                  “Recibí una atención rápida, clara y muy amable.
                  El equipo respondió mis dudas con paciencia.”
                </p>

                <div className="tr-hero-v3__review-control">
                  <ShieldCheck size={15} aria-hidden="true" />
                  Revisar antes de continuar
                </div>
              </div>

              <div className="tr-hero-v3__review-actions">
                <button type="button">Editar</button>

                <button type="button">
                  Continuar
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="tr-hero-v3__visual-footer">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="tr-hero-v3__principle"
                >
                  <span>
                    <Icon size={17} aria-hidden="true" />
                  </span>

                  <div>
                    <strong>{principle.title}</strong>
                    <p>{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="tr-hero-v3__floating-badge"
            aria-hidden="true"
          >
            <span className="tr-hero-v3__floating-check">
              <Check size={15} strokeWidth={3} />
            </span>

            <div>
              <strong>La persona siempre decide</strong>
              <small>La tecnología solo acompaña</small>
            </div>
          </div>
        </div>
      </Container>

      <div className="tr-hero-v3__bottom">
        <Container className="tr-hero-v3__bottom-inner">
          <span>Smart Review™</span>

          <p>
            Menos fricción para compartir. Más claridad para
            decidir.
          </p>

          <a href="#como-funciona">
            Explorar el proceso
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </Container>
      </div>
    </section>
  );
}
