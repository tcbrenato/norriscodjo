import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-08-29T14:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
        <div className="text-3xl md:text-5xl font-bold text-[#0A3764]">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-white font-semibold mt-2 text-sm md:text-base">{label}</div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-[#0A3764] via-amber-500 to-[#0A3764] py-8 md:py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
          Compte à rebours avant le grand jour !
        </h2>
        <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Jours" />
          <TimeUnit value={timeLeft.hours} label="Heures" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>
    </div>
  );
}
