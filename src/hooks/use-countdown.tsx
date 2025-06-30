// hook countdown date
import { useEffect, useState } from "react";

export function useCountdown(targetDate: Date | string): {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const [countdown, setCountdown] = useState<{
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });


  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate months (approximate - 30.44 days per month on average)
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        months,
        days,
        hours,
        minutes,
        seconds
      });
    };

    // Initial update
    updateCountdown();
    
    // Set up interval
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
