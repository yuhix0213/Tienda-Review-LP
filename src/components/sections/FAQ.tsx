"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "¿Smart Review™ publica reseñas automáticamente?",
    answer:
      "No. Smart Review™ únicamente ayuda a organizar la experiencia y propone un borrador editable. El cliente decide si desea modificarlo, descartarlo o continuar hacia Google.",
  },
  {
    question: "¿Tienda Review inventa opiniones o experiencias?",
    answer:
      "No. La información parte de lo que el cliente expresa sobre una experiencia real. La plataforma no crea experiencias ficticias ni sustituye la voz de la persona.",
  },
  {
    question: "¿El cliente está obligado a dejar una reseña?",
    answer:
      "No. La participación es voluntaria. El cliente puede abandonar el proceso en cualquier momento y conserva el control de principio a fin.",
  },
  {
    question: "¿Necesito instalar una aplicación?",
    answer:
      "No. El cliente puede acceder mediante un código QR desde el navegador de su teléfono, sin descargar una aplicación adicional.",
  },
  {
    question: "¿Tienda Review garantiza más ventas o una mejor posición en Google?",
    answer:
      "No se garantizan resultados comerciales, posiciones de búsqueda ni un número específico de reseñas. La plataforma está diseñada para reducir fricción y facilitar que las experiencias reales puedan hacerse visibles.",
  },
  {
    question: "¿Puedo revisar cómo se presenta Tienda Review en mi negocio?",
    answer:
      "Sí. La implementación puede adaptarse al punto de contacto con el cliente, manteniendo una experiencia clara, coherente y respetuosa con la identidad del negocio.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <Container>
        <div className="faq__layout">
          <div className="faq__intro">
            <span className="section-heading__eyebrow">PREGUNTAS FRECUENTES</span>
            <h2>Claridad antes de comenzar.</h2>
            <p>
              Respuestas directas sobre el funcionamiento, el control humano y
              los límites de Tienda Review.
            </p>

            <div className="faq__trust-note">
              <span className="faq__trust-icon">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>
              <div>
                <strong>La confianza también se construye explicando.</strong>
                <span>
                  Sin automatismos ocultos, promesas exageradas ni decisiones
                  tomadas por la IA.
                </span>
              </div>
            </div>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="faq-item__number">0{index + 1}</span>
                    <span className="faq-item__question">{faq.question}</span>
                    <ChevronDown size={21} aria-hidden="true" />
                  </button>

                  <div className="faq-item__answer" hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="faq__bottom">
          <HelpCircle size={23} aria-hidden="true" />
          <span>¿Tienes una pregunta diferente?</span>
          <a href="#registro">Hablar con Tienda Review</a>
        </div>
      </Container>
    </section>
  );
}
