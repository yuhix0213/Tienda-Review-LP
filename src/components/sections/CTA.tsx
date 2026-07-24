import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const benefits = [
  "Implementación simple mediante código QR",
  "Experiencia clara para el cliente",
  "Smart Review™ con control humano",
];

export function CTA() {
  return (
    <section id="registro" className="cta">
      <Container>
        <div className="cta__panel">
          <div className="cta__content">
            <span className="cta__eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              EMPIEZA A CONSTRUIR CONFIANZA
            </span>

            <h2>Haz visible la experiencia que tu negocio ya ofrece.</h2>

            <p>
              Conecta cada buena atención con una oportunidad real de fortalecer
              tu reputación digital.
            </p>

            <div className="cta__benefits">
              {benefits.map((benefit) => (
                <span key={benefit}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="cta__action-card">
            <div className="cta__action-icon">
              <Mail size={26} aria-hidden="true" />
            </div>

            <h3>Solicita acceso inicial</h3>
            <p>
              Cuéntanos sobre tu negocio y te contactaremos para revisar la mejor
              forma de implementar Tienda Review.
            </p>

            <a href="#faq" aria-label="Revisar preguntas frecuentes antes de solicitar acceso">
              Revisar antes de comenzar
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <div className="cta__action-note">
              <ShieldCheck size={17} aria-hidden="true" />
              <span>Sin compromisos ni promesas de resultados automáticos.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
