import React, { useState, useEffect } from 'react';

import { fetchFortune } from '../helper/fetch';
import { fortuneDataInit } from '../helper/data'

import FortuneGraph from './FortuneGraph';

const FortunePage = () => {
  const date = new Date();
  const [now, setNow] = useState<nowType>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  const [data, setData] = useState<dataType>([]);
  const formattedToday = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;

  const displayLineSettings = [
    { key: 'total', isDisplay: true },
    { key: 'love', isDisplay: true },
    { key: 'job', isDisplay: true },
    { key: 'money', isDisplay: true },
  ];

  const [lineSettings, setLineSettings] = useState(displayLineSettings);

  useEffect(() => {
    let unmounted = false;
    (async() => {
      if (!unmounted) {
        const fetchResult = await fetchFortune(`/${now.year}/${('0' + now.month).slice(-2)}`);
        const result = fortuneDataInit(fetchResult, now, 'leo');
        setData(result);
      }
    })();
    return () => { unmounted = true; };
  }, [now])

  return (
      <FortuneGraph data={data} lineSettings={lineSettings} formattedToday={formattedToday} />
  )
}

export default FortunePage;
