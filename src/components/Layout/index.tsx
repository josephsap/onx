import React from 'react';
import Container from '@mui/material/Container';
import TopNav from './TopNav';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<Props>  = ({ children }) => {
  return (
    <>
      <TopNav />
      <Container maxWidth="lg" style={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default GlobalLayout;