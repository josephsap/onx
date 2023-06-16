import Container from '@mui/material/Container';
import TopNav from './TopNav';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<Props>  = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <TopNav />
      {children}
    </Container>
  );
};

export default GlobalLayout;