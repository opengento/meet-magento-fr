import React, {useEffect, useState} from 'react';
import {CountdownProps} from "@/components/Countdown/CountdownProps";
import { useTranslation } from "react-i18next";

const CountdownTimer = ({targetDate}: CountdownProps) => {
  const {t} = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');

        setTimeLeft({days, hours, minutes});
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-start justify-center space-x-4 p-4 rounded-lg text-white">
      <div className="text-center">
        <div className="text-6xl font-bold">{timeLeft.days}</div>
        <div className="text-sm uppercase">{t('days')}</div>
      </div>
      <div className="text-5xl font-bold ">:</div>
      <div className="text-center">
        <div className="text-6xl font-bold ">{timeLeft.hours}</div>
        <div className="text-sm uppercase">{t('hours')}</div>
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="text-center">
        <div className="text-6xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm uppercase">{t('minutes')}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
