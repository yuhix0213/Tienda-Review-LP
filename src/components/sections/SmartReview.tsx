import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  PencilLine,
  ScanLine,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const process = [
  {
    icon: ScanLine,
    title: "Escanea",
    body: "El cliente accede desde un código QR, sin descargar una aplicación.",
  },
  {
    icon: MessageSquareText,
    title: "Cuenta su experiencia",
    body: "Responde con sus propias palabras a una guía breve y clara.",
  },
  {
    icon: Sparkles,
    title: "Recibe un borrador",
    body: "Smart Review™ organiza la idea y propone un texto editable.",
  },
  {
    icon: PencilLine,
    title: "Revisa y decide",
    body: "La persona puede modificar, descartar o continuar hacia Google.",
  },
];

const guarantees = [
  "La experiencia siempre parte del cliente",
  "El borrador puede editarse completamente",
  "Nada se publica sin una acción consciente",
];

export function SmartReview() {
  return (
    <section id="smart-review" className="smart-review">
      <Container>
        <div className="smart-review__layout">
          <div className="smart-review__content">
            <span className="section-heading__eyebrow">SMART REVIEW™</span>
            <h2>De una buena experiencia a una reseña clara.</h2>
            <p className="smart-review__lead">
              Smart Review™ reduce la fricción de escribir una reseña sin
              reemplazar la voz del cliente. La tecnología ayuda a ordenar la
              experiencia; la persona conserva el control de principio a fin.
            </p>

            <div className="smart-review__guarantees">
              {guarantees.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <a className="smart-review__link" href="#registro">
              Conocer Smart Review™
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="smart-review__demo" aria-label="Demostración conceptual de Smart Review">
            <div className="smart-review__device">
              <div className="smart-review__device-top">
                <span />
                <strong>Smart Review™</strong>
                <span />
              </div>

              <div className="smart-review__screen">
                <div className="smart-review__prompt">
                  <span>1 de 3</span>
                  <h3>¿Qué fue lo que más te gustó de tu experiencia?</h3>
                </div>

                <div className="smart-review__response">
                  <p>
                    La atención fue muy rápida y el personal me explicó todo con
                    mucha paciencia.
                  </p>
                </div>

                <div className="smart-review__draft">
                  <div className="smart-review__draft-label">
                    <Sparkles size={16} aria-hidden="true" />
                    Borrador sugerido
                  </div>
                  <p>
                    Recibí una atención rápida y muy amable. El personal explicó
                    todo con paciencia y claridad.
                  </p>
                  <div className="smart-review__draft-actions">
                    <button type="button">Editar</button>
                    <button type="button">Continuar</button>
                  </div>
                </div>

                <div className="smart-review__control">
                  <UserRoundCheck size={18} aria-hidden="true" />
                  <span>La decisión final siempre es tuya.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="smart-review__process">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="smart-review-step" key={step.title}>
                <div className="smart-review-step__header">
                  <span className="smart-review-step__number">0{index + 1}</span>
                  <span className="smart-review-step__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
