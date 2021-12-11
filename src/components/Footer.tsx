import React from 'react';

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="p-4 md:p-16">
        <p>powerd by <a className="text-pink-700 underline" href="http://jugemkey.jp/api/">JugemKey</a> | 【PR】<a className="text-pink-700 underline" href="http://www.tarim.co.jp/">原宿占い館 塔里木</a></p>
    </footer>
  )
})

export default Footer;
