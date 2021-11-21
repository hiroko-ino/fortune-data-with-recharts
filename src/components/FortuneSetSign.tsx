import React, { ReactNode } from 'react';
import { signData } from '../data/data';

import _forEach from 'lodash/forEach';

interface FortuneSetSignType {
  sign: string
  setSign: React.Dispatch<React.SetStateAction<string>>
}

const FortuneSetSign: React.FC<FortuneSetSignType> = ({ sign, setSign }) => {
  const signList: ReactNode[] = [];
  _forEach(signData, (sign, key) => {
    signList.push(<li className="mr-4 mb-2"><button aria-label="星座を選択" onClick={() => handleSetsign(key)}>{sign.jpName}</button></li>)
  })

  const handleSetsign = (sign: string) => {
    setSign(sign)
  }

  return (
    <ul className="flex flex-wrap">
      {signList}
    </ul>
  )
}

export default FortuneSetSign;
