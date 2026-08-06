import {
  CheckCircle2,
  MessageSquareText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "El cliente escanea",
    body: "Un código QR abre una experiencia simple, rápida y pensada para el momento posterior a la compra.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Comparte su experiencia",
    body: "El cliente responde con sus propias palabras y mantiene el control total sobre lo que desea comunicar.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Smart Review™ ayuda",
    body: "La tecnología organiza la idea y propone un borrador claro. No publica nada de forma automática.",
  },
  {
    number: "04",
    icon: Star,
    title: "La confianza se vuelve visible",
    body: "El cliente revisa, edita y decide si continúa hacia Google para publicar su opinión.",
  },
];

export function Education() {
  return (
    <section id="como-funciona" className="education">
      <Container>
        <div className="section-heading section-heading--center">
          <span className="section-heading__eyebrow">CÓMO FUNCIONA</span>
          <h2>Una buena experiencia no debería quedarse en silencio.</h2>
          <p>
            Tienda Review transforma un momento positivo en una oportunidad para
            que nuevos clientes conozcan y confíen en tu negocio.
          </p>
        </div>

        <div className="education__journey" aria-hidden="true">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="education__journey-node" key={step.number}>
                <span className="education__journey-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                {index < steps.length - 1 && (
                  <span className="education__journey-path" />
                )}
              </div>
            );
          })}
        </div>

        <div className="education__flow">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="education-step" key={step.number}>
                <div className="education-step__top">
                  <span className="education-step__number">{step.number}</span>
                  <span className="education-step__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.body}</p>

                {index < steps.length - 1 && (
                  <span className="education-step__connector" aria-hidden="true" />
                )}
              </article>
            );
          })}
        </div>

        <div className="education__trust">
          <div className="education__trust-icon">
            <ShieldCheck size={27} aria-hidden="true" />
          </div>

          <div>
            <strong>El cliente siempre mantiene el control.</strong>
            <p>
              Smart Review™ prepara un borrador. La persona puede editarlo,
              descartarlo o decidir no continuar.
            </p>
          </div>

          <div className="education__trust-points" aria-label="Principios de confianza">
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Sin publicación automática
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Sin reseñas inventadas
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Decisión humana
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
