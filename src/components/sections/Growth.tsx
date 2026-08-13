import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Repeat2,
  Search,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const outcomes = [
  {
    icon: Star,
    title: "Más experiencias visibles",
    body: "Las buenas experiencias tienen más oportunidades de convertirse en señales públicas de confianza.",
  },
  {
    icon: Search,
    title: "Mejor primera impresión",
    body: "Una presencia digital más completa ayuda a que nuevos clientes entiendan mejor la calidad de tu negocio.",
  },
  {
    icon: UsersRound,
    title: "Más confianza para decidir",
    body: "Las opiniones reales reducen dudas y aportan contexto antes de una visita, compra o reserva.",
  },
  {
    icon: Repeat2,
    title: "Un proceso repetible",
    body: "El sistema puede integrarse al cierre de cada experiencia sin depender de acciones improvisadas.",
  },
];

const loop = [
  "Buena experiencia",
  "Reseña más fácil",
  "Confianza visible",
  "Más oportunidades",
];

export function Growth() {
  return (
    <section id="crecimiento" className="growth">
      <Container>
        <div className="growth__header">
          <div className="section-heading">
            <div className="section-heading__kicker">
              <span className="photo-chip" aria-hidden="true">
                <span
                  className="photo-chip__img"
                  style={{ backgroundImage: "url(/images/sections/accent-crecimiento.jpg)" }}
                />
              </span>
              <span className="section-heading__eyebrow">CRECIMIENTO BASADO EN CONFIANZA</span>
            </div>
            <h2>La reputación no es un resultado aislado. Es un activo que se acumula.</h2>
          </div>

          <p className="growth__lead">
            Cuando las experiencias positivas se vuelven visibles de forma
            constante, tu negocio construye una presencia digital más sólida,
            clara y creíble.
          </p>
        </div>

        <div className="growth__outcomes">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="growth-card" key={item.title}>
                <div className="growth-card__top">
                  <span className="growth-card__index">0{index + 1}</span>
                  <span className="growth-card__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="growth__loop">
          <div className="growth__loop-copy">
            <span className="growth__loop-label">CÍRCULO DE CONFIANZA</span>
            <h3>Una experiencia positiva puede fortalecer la siguiente decisión.</h3>
            <p>
              Tienda Review convierte momentos dispersos en un proceso continuo
              de reputación, descubrimiento y crecimiento.
            </p>

            <div className="growth__loop-checks">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Basado en experiencias reales
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Sin automatizar la decisión humana
              </span>
            </div>
          </div>

          <div className="growth__loop-visual" aria-label="Círculo de confianza">
            <div className="growth__loop-center">
              <ShieldCheck size={34} aria-hidden="true" />
              <strong>Confianza</strong>
            </div>

            {loop.map((item, index) => (
              <div
                className={`growth__loop-node growth__loop-node--${index + 1}`}
                key={item}
              >
                <span>{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}

            <div className="growth__loop-ring" aria-hidden="true" />
          </div>
        </div>

        <div className="growth__bottom">
          <div>
            <BarChart3 size={24} aria-hidden="true" />
            <span>
              La mejora se construye experiencia por experiencia, no con promesas
              instantáneas.
            </span>
          </div>

          <a href="#registro">
            Empezar a construir confianza
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
