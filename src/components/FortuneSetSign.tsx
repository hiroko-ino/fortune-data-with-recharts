import React, { ReactNode } from 'react';
import { signData } from '../data/data';
import classNames from 'classnames'

import _forEach from 'lodash/forEach';

interface FortuneSetSignType {
  sign: string
  setSign: React.Dispatch<React.SetStateAction<string>>
}

const FortuneSetSign: React.FC<FortuneSetSignType> = React.memo(({ sign, setSign }) => {
  const signList: ReactNode[] = [];
  _forEach(signData, (signData, key) => {
    signList.push(<li key={signData.jpName} className="ml-4 mb-2"><button className={classNames('p-1', 'rounded', { 'text-white': key === sign, 'bg-pink-700': key === sign })} aria-label="星座を選択" onClick={() => handleSetsign(key)}>{signData.jpName}</button></li>)
  })

  const handleSetsign = (sign: string) => {
    setSign(sign)
  }

  return (
    <div className="flex">
      <p className="mr-4 flex-shrink-0 font-semibold mt-1">星座の選択：</p>
      <ul className="-ml-4 flex flex-wrap">
        {signList}
      </ul>
    </div>
  )
})

export default FortuneSetSign;
