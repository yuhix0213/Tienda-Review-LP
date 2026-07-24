import type { ReactNode } from "react";
export function ButtonLink({
  href, children, variant = "primary", className = ""
}: {
  href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string;
}) {
  return <a className={`button button--${variant} ${className}`.trim()} href={href}>{children}</a>;
}
