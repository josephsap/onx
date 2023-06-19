import { Toolbar, Typography, Container, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { StyledTopNav, StyledNavItem } from './Layout.styles';

const TopNav = () => {
  return (
    <StyledTopNav position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <nav>
            <Stack direction="row" alignItems="center" spacing={6}>
              <Typography variant="h6" component='h1'>
                <StyledNavItem component={RouterLink} underline="none" to='/'>Joke 😹 App</StyledNavItem>
              </Typography>
              <StyledNavItem component={RouterLink} underline="none" to='/random'>Random</StyledNavItem>
              <StyledNavItem component={RouterLink} underline="none" to='/search'>Search</StyledNavItem>
            </Stack>
          </nav>
        </Toolbar>
      </Container>
    </StyledTopNav>
  );
}

export default TopNav;