import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-08-19T12:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Golden, CO',
  },
  {
    key: 'longest ride',
    label: 'Longest bike ride',
    value: '101.5 mi',
    link: 'https://www.strava.com/activities/12759885263/best-efforts',
  },
  {
    key: '14ers',
    label: '14ers climbed',
    value: '5',
  },
  {
    key: 'bad movies',
    label: 'Bad movies watched',
    value: 'Countless',
  },
];

export default data;
