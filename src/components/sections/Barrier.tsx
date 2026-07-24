import {
  Bot,
  CheckCircle2,
  FileCheck2,
  MessageCircleMore,
  PenLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const barriers = [
  {
    icon: MessageCircleMore,
    question: "No quiero incomodar a mis clientes",
    answer:
      "La invitación puede integrarse de forma natural al cierre de la experiencia, sin presión ni insistencia.",
  },
  {
    icon: PenLine,
    question: "¿Y si no saben qué escribir?",
    answer:
      "Smart Review™ ayuda a ordenar sus ideas y propone un borrador editable a partir de lo que la persona desea expresar.",
  },
  {
    icon: Bot,
    question: "¿La IA publica automáticamente?",
    answer:
      "No. La tecnología solo prepara una propuesta. El cliente revisa, modifica y decide si quiere continuar.",
  },
  {
    icon: FileCheck2,
    question: "¿Se crean opiniones artificiales?",
    answer:
      "No. Tienda Review no inventa experiencias ni reemplaza la voz del cliente. La decisión y el contenido final siguen siendo humanos.",
  },
];

const trustPoints = [
  "Sin publicación automática",
  "Sin reseñas inventadas",
  "Sin presión sobre el cliente",
];

export function Barrier() {
  return (
    <section id="dudas" className="barrier">
      <Container>
        <div className="barrier__header">
          <div className="section-heading">
            <span className="section-heading__eyebrow">LAS DUDAS SON NORMALES</span>
            <h2>Pedir una reseña no debería sentirse incómodo.</h2>
          </div>

          <p className="barrier__lead">
            La tecnología debe reducir la fricción, no reemplazar la voluntad de
            las personas. Por eso, Tienda Review está diseñado alrededor del
            consentimiento, la claridad y el control humano.
          </p>
        </div>

        <div className="barrier__grid">
          {barriers.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="barrier-card" key={item.question}>
                <div className="barrier-card__top">
                  <span className="barrier-card__number">0{index + 1}</span>
                  <span className="barrier-card__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                </div>

                <p className="barrier-card__question">{item.question}</p>
                <div className="barrier-card__answer">
                  <span>Respuesta</span>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="barrier__trust">
          <div className="barrier__trust-main">
            <div className="barrier__trust-icon">
              <UserRoundCheck size={30} aria-hidden="true" />
            </div>

            <div>
              <span>PRINCIPIO CENTRAL</span>
              <h3>Siempre decide la persona. Nunca la IA.</h3>
              <p>
                Smart Review™ acompaña el proceso, pero no toma decisiones en
                nombre del cliente.
              </p>
            </div>
          </div>

          <div className="barrier__trust-points">
            {trustPoints.map((point) => (
              <span key={point}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>

          <div className="barrier__trust-seal" aria-label="Diseñado para generar confianza">
            <ShieldCheck size={24} aria-hidden="true" />
            <span>Diseñado para generar confianza</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
