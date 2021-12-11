import React from 'react';

import { lineData, graphSettings } from '../data/data';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine, CartesianGrid } from 'recharts';

import useMedia from "use-media";

import CustomToolTip from '../components/CustomTooltip';

interface FortuneGraphProps {
  data: dataType
  lineSettings: lineSettingsType
  formattedToday: string
}

const FortuneGraph: React.FC<FortuneGraphProps> = React.memo(({ data, lineSettings, formattedToday }) => {
  const isPc = useMedia({ minWidth: '768px' });

  return (
    <div className="overflow-x-scroll">
      <ResponsiveContainer width={isPc ? '100%' : 768} height={500}>
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
          <XAxis dataKey="date" tick={{ fill: graphSettings.textColor }} stroke={graphSettings.xStroke} />
          <YAxis tick={{ fill: graphSettings.textColor }} stroke={graphSettings.yStroke} domain={[1, 5]} />
          <ReferenceLine x={formattedToday} stroke={graphSettings.referenceLine} strokeWidth={graphSettings.referenceLineWidth} label="今日" />
          <Tooltip
            formatter={(value: number, name: string) => {
              return [value, lineData[name].jpName];
            }}
            content={<CustomToolTip data={data}/>}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
})

export default FortuneGraph;
