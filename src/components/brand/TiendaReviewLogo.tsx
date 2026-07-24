import Image from "next/image";

type TiendaReviewLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "horizontal" | "icon";
};

export function TiendaReviewLogo({
  className = "",
  priority = false,
  variant = "horizontal",
}: TiendaReviewLogoProps) {
  const isIcon = variant === "icon";

  return (
    <Image
      src={
        isIcon
          ? "/brand/tienda-review-icon-square.svg"
          : "/brand/tienda-review-logo-horizontal.svg"
      }
      alt="Tienda Review"
      width={isIcon ? 64 : 224}
      height={isIcon ? 64 : 56}
      priority={priority}
      className={className}
    />
  );
}
