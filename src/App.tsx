import React from 'react';
import './App.css';
import { fetchFortune } from './helper/fetch';

function App() {
  return (
    <div className="bg-pink-200 h-screen">
      <button onClick={() => fetchFortune('/2021/11')}>ボタンだよ</button>
    </div>
  );
}

export default App;
