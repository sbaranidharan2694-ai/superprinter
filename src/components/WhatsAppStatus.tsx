import { useWhatsAppStatus } from "@/hooks/useWhatsAppStatus";

const WhatsAppStatus = () => {
  const isOnline = useWhatsAppStatus();

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? "animate-pulse" : ""}`}
        style={{
          backgroundColor: isOnline ? "#22C55E" : "#9CA3AF",
        }}
        aria-hidden
      />
      <span
        className="font-ui text-xs whitespace-nowrap"
        style={{ color: isOnline ? "#22C55E" : "#9CA3AF" }}
      >
        {isOnline ? "We're online — reply in 30 min" : "Offline · Opens Mon 9AM"}
      </span>
    </div>
  );
};

export default WhatsAppStatus;
