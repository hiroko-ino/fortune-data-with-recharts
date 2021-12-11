import React from 'react';

const Header: React.FC = React.memo(() => {
  return (
    <header className="bg-white py-4 px-4 md:px-16">
      <div className="border-l-2 border-gray-800 border-solid pl-3">
        <h1>占いAPIを使用したRechartsのデモです。 this is demo with fortune API and Recharts</h1>
        <p>display http only</p>
      </div>
    </header>
  )
})

export default Header;
