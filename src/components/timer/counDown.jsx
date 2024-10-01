import React, { useEffect, useState } from 'react';

const Countdown = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const end = new Date(endDate);
      const difference = end - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [endDate]);

  return (
    <div className='flex gap-2 items-center'>
      {timeLeft.days > 0 && <span className='flex flex-col font-bold'> days <span className='text-[32px]'>{timeLeft.days}</span> </span>}
      <p className='text-[40px] text-[#E07575]'>:</p>
      {timeLeft.hours > 0 && <span className='flex flex-col font-bold'> hours <span className='text-[32px]'>{timeLeft.hours}</span> </span>}
      <p className='text-[40px] text-[#E07575]'>:</p>
      {timeLeft.minutes > 0 && <span className='flex flex-col font-bold'> minutes  <span className='text-[32px]'>{timeLeft.minutes}</span></span>}
      <p className='text-[40px] text-[#E07575]'>:</p>
      {timeLeft.seconds > 0 && <span className='flex flex-col font-bold'> seconds <span className='text-[32px]'>{timeLeft.seconds}</span></span>}
      {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
        <span>Discount Ended</span>
      )}
    </div>
  );
};

export default Countdown;
