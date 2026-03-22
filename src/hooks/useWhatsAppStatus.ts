import { useState, useEffect } from "react";

/**
 * Business hours: Mon–Sat 9:00–19:00 (Chennai).
 * Returns true if currently within business hours.
 */
export function useWhatsAppStatus(): boolean {
  const [isOnline, setIsOnline] = useState(false);

  const check = () => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const minutesSinceMidnight = hour * 60 + minute;
    const isWeekday = day >= 1 && day <= 6;
    const isSunday = day === 0;
    const weekdayOpen = 9 * 60;
    const weekdayClose = 20 * 60;
    const sundayOpen = 10 * 60;
    const sundayClose = 16 * 60;
    const isWeekdayHours = isWeekday && minutesSinceMidnight >= weekdayOpen && minutesSinceMidnight < weekdayClose;
    const isSundayHours = isSunday && minutesSinceMidnight >= sundayOpen && minutesSinceMidnight < sundayClose;
    setIsOnline(isWeekdayHours || isSundayHours);
  };

  useEffect(() => {
    check();
    const interval = setInterval(check, 60000); // every minute
    return () => clearInterval(interval);
  }, []);

  return isOnline;
}
