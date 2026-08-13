import {
  EyeOff,
  MessageCircleWarning,
  SearchX,
  Star,
  TrendingDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const problems = [
  {
    icon: EyeOff,
    title: "Las buenas experiencias quedan invisibles",
    body: "Muchos clientes satisfechos se van contentos, pero nunca convierten esa experiencia en una reseña pública.",
  },
  {
    icon: MessageCircleWarning,
    title: "Solo habla quien tuvo un problema",
    body: "Cuando opinar exige demasiado esfuerzo, las experiencias negativas suelen tener más probabilidades de terminar publicadas.",
  },
  {
    icon: SearchX,
    title: "Tu reputación no refleja la realidad",
    body: "Un negocio puede ofrecer un gran servicio y aun así parecer poco confiable porque su presencia digital está incompleta.",
  },
  {
    icon: TrendingDown,
    title: "Cada silencio puede costar una oportunidad",
    body: "Sin señales visibles de confianza, nuevos clientes pueden elegir otra opción antes de conocerte.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="problem">
      <Container>
        <div className="problem__intro">
          <div className="section-heading">
            <div className="section-heading__kicker">
              <span className="photo-chip" aria-hidden="true">
                <span
                  className="photo-chip__img"
                  style={{ backgroundImage: "url(/images/sections/accent-el-problema.jpg)" }}
                />
              </span>
              <span className="section-heading__eyebrow">EL PROBLEMA</span>
            </div>
            <h2>Tu negocio puede ser excelente y parecer invisible.</h2>
            <p>
              La reputación real de un negocio y la reputación que las personas
              encuentran en internet no siempre son la misma.
            </p>
          </div>

          <div className="problem__statement">
            <div className="problem__fade" aria-hidden="true">
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <EyeOff size={18} />
            </div>
            <span>La brecha</span>
            <strong>
              Entre lo que tus clientes viven y lo que los nuevos clientes pueden ver.
            </strong>
          </div>
        </div>

        <div className="problem__grid">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <article className="problem-card" key={problem.title}>
                <div className="problem-card__index">0{index + 1}</div>
                <div className="problem-card__icon">
                  <Icon size={25} aria-hidden="true" />
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            );
          })}
        </div>

        <div className="problem__comparison">
          <div className="problem__comparison-side problem__comparison-side--before">
            <span className="problem__comparison-label">REALIDAD DEL NEGOCIO</span>
            <strong>Buen servicio. Clientes satisfechos. Experiencias positivas.</strong>
          </div>

          <div className="problem__comparison-gap" aria-hidden="true">
            <span />
            <em>silencio digital</em>
            <span />
          </div>

          <div className="problem__comparison-side problem__comparison-side--after">
            <span className="problem__comparison-label">PERCEPCIÓN ONLINE</span>
            <strong>Pocas reseñas. Menos confianza. Más dudas antes de elegir.</strong>
          </div>
        </div>
      </Container>
    </section>
  );
}
