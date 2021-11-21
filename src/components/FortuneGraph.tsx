import React, { useState, useEffect } from 'react';

import { fetchFortune } from '../helper/fetch';
import { fortuneDataInit } from '../helper/data'
import { lineData, graphSettings } from '../data/data';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine, CartesianGrid } from 'recharts';

import CustomToolTip from '../components/CustomTooltip';

const FortuneGraph = () => {
  const date = new Date();
  const [now, setNow] = useState<nowType>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  const [data, setData] = useState([]);
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
  }, [])

  return (
    <ResponsiveContainer width="100%">
    <LineChart data={data}>
      <CartesianGrid horizontalFill={graphSettings.bgColor} vertical={false} fillOpacity={0.4} />
      {lineSettings.map((item: any) => {
        if (item.isDisplay) {
          return <Line
                    key={item.key}
                    dataKey={item.key}
                    stroke={lineData[item.key].color}
                    isAnimationActive={false}
                    dot={{ fill: lineData[item.key].color, ...graphSettings.dots }} />
        } else {
          return null;
        }
      })}
      <XAxis dataKey="date" stroke={graphSettings.xStroke} />
      <YAxis stroke={graphSettings.yStroke} domain={[1, 5]} />
      <ReferenceLine x={formattedToday} stroke={graphSettings.referenceLine} label="今日" />
      <Tooltip
        formatter={(value: number, name: string) => {
          return [value, lineData[name].jpName];
        }}
        content={<CustomToolTip formattedData={data}/>}
      />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default FortuneGraph;
