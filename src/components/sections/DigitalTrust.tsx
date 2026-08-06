import { Globe2, Link2, ShieldCheck, Star, Store, UsersRound } from "lucide-react";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: Store,
    title: "Negocios",
    body: "Construyen una reputación más visible a partir de experiencias reales.",
  },
  {
    icon: UsersRound,
    title: "Clientes",
    body: "Comparten su opinión cuando lo desean y mantienen el control del proceso.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Review™",
    body: "Reduce la fricción sin inventar experiencias ni reemplazar la decisión humana.",
  },
  {
    icon: Globe2,
    title: "Ecosistema",
    body: "Cada interacción transparente fortalece la confianza digital.",
  },
];

export function DigitalTrust() {
  return (
    <section id="confianza" className="digital-trust">
      <Container>
        <div className="section-heading section-heading--center">
          <span className="section-heading__eyebrow">DIGITAL TRUST</span>
          <h2>Construimos un ecosistema de confianza digital.</h2>
          <p>
            Tienda Review es el primer paso hacia una economía donde la
            reputación nace de experiencias reales, decisiones humanas y
            procesos transparentes.
          </p>
        </div>

        <div
          className="section-photo-banner section-photo-banner--confianza"
          role="img"
          aria-label="Terraza de un negocio al atardecer con clientes y personal"
        />

        <div className="digital-trust__network" aria-hidden="true">
          <div className="digital-trust__network-ring" />
          <div className="digital-trust__network-center">
            <ShieldCheck size={26} aria-hidden="true" />
          </div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                className={`digital-trust__network-node digital-trust__network-node--${index + 1}`}
                key={pillar.title}
              >
                <span>
                  <Icon size={18} aria-hidden="true" />
                </span>
                <strong>{pillar.title}</strong>
              </div>
            );
          })}
        </div>

        <div className="digital-trust__grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="digital-trust-card" key={pillar.title}>
                <span className="digital-trust-card__icon">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            );
          })}
        </div>

        <div className="digital-trust__banner">
          <div className="digital-trust__banner-icon">
            <Link2 size={27} aria-hidden="true" />
          </div>
          <div>
            <span>UNA INFRAESTRUCTURA DE CONFIANZA</span>
            <h3>Más que una herramienta para obtener reseñas.</h3>
            <p>
              Una forma de fortalecer la relación entre personas, negocios y
              nuevas oportunidades digitales.
            </p>
          </div>
          <Star size={28} aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
