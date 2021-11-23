import React from 'react';

interface FortuneControlType {
  date: Date
  now: nowType
  setNow: React.Dispatch<React.SetStateAction<nowType>>
}

const FortuneControl: React.FC<FortuneControlType> = ({now, setNow, date}) => {
  const handlePrev = () => {
    setNow((prevState) => ({
      year: now.month === 1 ? prevState.year - 1 : prevState.year,
      month: now.month === 1 ? 12 : prevState.month - 1
    }))
  }

  const handleNext = () => {
    setNow((prevState) => ({
      year: now.month === 12 ? prevState.year + 1 : prevState.year,
      month: now.month === 12 ? 1 : prevState.month + 1
    }))
  }

  return (
    <div className="flex justify-between">
      <button className="p-1 bg-gray-800 text-white rounded" onClick={handlePrev}>前月</button>
      {!(now.year === date.getFullYear() && now.month === date.getMonth() + 1) && <button className="p-1 bg-gray-800 text-white rounded" onClick={handleNext}>次月 &gt;</button>}
    </div>
  )
}

export default FortuneControl;
