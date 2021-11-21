import React from 'react';

import { lineData } from '../data/data'

const CustomToolTip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg">
        <p>{label}</p>
        {payload.map((item: any) => {
          return <p key={item.name}><span style={{ color: item.stroke }}>{lineData[item.name].jpName}</span> : {item.value}</p>
        })}
      </div>
    )
  } else {
    return <div />
  }
}

export default CustomToolTip;
