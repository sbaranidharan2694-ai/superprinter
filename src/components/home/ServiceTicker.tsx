import { services } from "@/data/services";

const ServiceTicker = () => {
  const items = services.map((s) => `${s.emoji} ${s.name}`);
  const doubled = [...items, ...items];

  return (
    <div className="bg-secondary overflow-hidden py-3">
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 text-sm md:text-base font-semibold text-secondary-foreground font-body">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceTicker;
