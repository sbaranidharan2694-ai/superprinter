import { useState, useEffect } from "react";

/**
 * Business hours: Mon–Sat 9:00–19:00 (Chennai).
 * Returns true if currently within business hours.
 */
export function useWhatsAppStatus(): boolean {
  const [isOnline, setIsOnline] = useState(false);

  const check = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const isWeekday = day >= 1 && day <= 6;
    const minutesSinceMidnight = hour * 60 + minute;
    const open = 9 * 60;   // 9:00
    const close = 19 * 60; // 19:00
    const isBusinessHour = minutesSinceMidnight >= open && minutesSinceMidnight < close;
    setIsOnline(isWeekday && isBusinessHour);
  };

  useEffect(() => {
    check();
    const interval = setInterval(check, 60000); // every minute
    return () => clearInterval(interval);
  }, []);

  return isOnline;
}
