import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Container className="hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow"><Sparkles size={16} /><span>SMART REVIEW™</span></div>
          <h1>Tu reputación vende<span> incluso cuando tu negocio está cerrado.</span></h1>
          <p className="hero__lead">
            Convierte cada buena experiencia en confianza visible, más visitas y nuevas oportunidades de crecimiento para tu negocio.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#registro">Registrar mi negocio <ArrowRight size={17} /></ButtonLink>
            <ButtonLink href="#como-funciona" variant="secondary">Ver cómo funciona</ButtonLink>
          </div>
          <div className="hero__proof">
            <span><CheckCircle2 size={17} />Configuración sencilla</span>
            <span><CheckCircle2 size={17} />Sin conocimientos técnicos</span>
            <span><CheckCircle2 size={17} />El cliente siempre decide</span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Vista conceptual de Smart Review">
          <div className="hero__glow" />
          <div className="device-mockup">
            <div className="device-mockup__notch" />
            <div className="device-mockup__screen">
              <div className="review-survey">
                <p className="review-survey__label">Tu experiencia</p>
                <h2>¿Cómo fue tu visita?</h2>
                <div className="review-survey__stars">{[1,2,3,4,5].map(i => <Star key={i} size={26} fill="currentColor" />)}</div>
                <div className="review-survey__answer">Excelente atención y ambiente.</div>
                <div className="review-survey__draft">
                  <div><Sparkles size={17} /><strong>Smart Review™</strong></div>
                  <p>“Excelente atención, ambiente agradable y una experiencia que sin duda repetiría.”</p>
                </div>
                <button type="button">Continuar a Google</button>
              </div>
            </div>
          </div>

          <article className="floating-card floating-card--google">
            <div className="floating-card__icon">G</div>
            <div><strong>Google Reviews</strong><p>Reseña lista para revisar</p></div>
          </article>
          <article className="floating-card floating-card--rating">
            <div className="floating-card__rating-row"><strong>4.9</strong><span>★★★★★</span></div>
            <p>Confianza visible</p>
          </article>
          <article className="floating-card floating-card--growth">
            <span className="floating-card__growth-value">+ confianza</span>
            <p>Más oportunidades para tu negocio</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
