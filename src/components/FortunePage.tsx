import React, { useState, useEffect } from 'react';

import { fetchFortune } from '../helper/fetch';
import { fortuneDataInit } from '../helper/data'

import FortuneGraph from './FortuneGraph';
import FortuneControl from './FortuneControl';
import FortuneSetSign from './FortuneSetSign';
import FortuneSetLine from './FortuneSetLine';

const FortunePage = () => {
  const date = new Date();
  const [now, setNow] = useState<nowType>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  const [data, setData] = useState<dataType>([]);
  const formattedToday = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
  const [sign, setSign] = useState('aries');

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
        const result = fortuneDataInit(fetchResult, now, sign);
        setData(result);
      }
    })();
    return () => { unmounted = true; };
  }, [now, sign])

  return (
      <>
        <div className="mt-4 px-4 md:px-16">
          <FortuneSetSign sign={sign} setSign={setSign} />
        </div>
        <div className="mt-1 px-4 md:px-16">
          <FortuneSetLine lineSettings={lineSettings} setLineSettings={setLineSettings} />
        </div>
        <div className="pt-4 pr-4 md:pr-16">
          <FortuneGraph data={data} lineSettings={lineSettings} formattedToday={formattedToday} />
        </div>
        <div className="mt-4 px-4 md:px-16">
          <FortuneControl now={now} setNow={setNow} date={date} />
        </div>
      </>
  )
}

export default FortunePage;
