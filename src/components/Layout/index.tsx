import React from 'react';
import Container from '@mui/material/Container';
import TopNav from './TopNav';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<Props>  = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <TopNav />
      {children}
      <Footer />
    </Container>
  );
};

export default GlobalLayout;