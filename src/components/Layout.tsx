import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = React.memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
})

export default Layout;
