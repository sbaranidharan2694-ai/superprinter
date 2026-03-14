interface SectionHeadingProps {
  label: string;
  tamil?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ label, tamil, title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
      <div className="h-px w-10 bg-primary" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary font-body">{label}</span>
      {tamil && <span className="text-xs text-muted-foreground font-tamil">{tamil}</span>}
    </div>
    <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
