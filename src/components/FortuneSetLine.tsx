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
    <ul className="flex flex-wrap">
      {lineSettings.map((line, index) => {
        const color = line.isDisplay === true ? { color: lineData[line.key].color } : { color: 'inherit' };
        return <li className="mr-4 mb-2" style={color}><button aria-label="ラインを選択" onClick={() => handleSetLine(line.key, index)}>{lineData[line.key].jpName}</button></li>
      })}
    </ul>
  )
}

export default FortuneSetLine;
