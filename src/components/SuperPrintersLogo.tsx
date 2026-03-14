interface SuperPrintersLogoProps {
  variant?: "header" | "footer";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: 36, md: 44, lg: 60 };

const SuperPrintersLogo = ({ variant = "header", size = "md", className = "" }: SuperPrintersLogoProps) => {
  const dim = sizeMap[size];
  const isHeader = variant === "header";

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 rounded-full border font-display font-bold ${className}`}
      style={{
        width: dim,
        height: dim,
        fontSize: size === "sm" ? "0.75rem" : size === "lg" ? "1.35rem" : "0.95rem",
        letterSpacing: "-0.02em",
        backgroundColor: isHeader ? "var(--gold)" : "transparent",
        color: isHeader ? "var(--ink-black)" : "var(--gold)",
        borderColor: isHeader ? "rgba(255,255,255,0.25)" : "rgba(212,168,67,0.5)",
        borderWidth: "1.5px",
      }}
      aria-hidden
    >
      <span className="relative">
        SP
        {/* Small print accent dot */}
        <span
          className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full opacity-70"
          style={{ backgroundColor: "currentColor" }}
        />
      </span>
    </span>
  );
};

export default SuperPrintersLogo;
