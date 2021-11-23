import React from 'react';
import { lineData } from '../data/data';

interface FortuneSetLineType {
  lineSettings: lineSettingsType
  setLineSettings: React.Dispatch<React.SetStateAction<lineSettingsType>>
}

const FortuneSetLine: React.FC<FortuneSetLineType> = ({ lineSettings, setLineSettings }) => {
  const handleSetLine = (lineKey: string, index: number) => {
    const temp = [...lineSettings];
    const selectLine = temp[index];
    temp[index] = {
      key: selectLine.key,
      isDisplay: !selectLine.isDisplay
    }
    setLineSettings(temp);
  }

  return (
    <div className="flex">
      <p className="mr-4 flex-shrink-0 font-semibold mt-1">線の表示・非表示：</p>
      <ul className="flex flex-wrap -ml-4">
        {lineSettings.map((line, index) => {
          const color = line.isDisplay === true ? { color: 'white', backgroundColor: lineData[line.key].color } : { color: 'inherit' };
          return <li className="ml-4 mb-2"><button className="rounded p-1" style={color} aria-label="ラインを選択" onClick={() => handleSetLine(line.key, index)}>{lineData[line.key].jpName}</button></li>
        })}
      </ul>
    </div>
  )
}

export default FortuneSetLine;
