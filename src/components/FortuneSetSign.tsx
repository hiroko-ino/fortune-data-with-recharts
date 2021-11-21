import React, { ReactNode } from 'react';
import { signData } from '../data/data';

import _forEach from 'lodash/forEach';

interface FortuneSetSignType {
  sign: string
  setSign: React.Dispatch<React.SetStateAction<string>>
}

const FortuneSetSign: React.FC<FortuneSetSignType> = ({ sign, setSign }) => {
  const signList: ReactNode[] = [];
  _forEach(signData, (sign) => {
    signList.push(<li className="mr-4 mb-2">{sign.jpName}</li>)
  })

  return (
    <ul className="flex flex-wrap">
      {signList}
    </ul>
  )
}

export default FortuneSetSign;
