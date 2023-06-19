import { styled } from '@mui/material/styles';
import { AppBar, Link, Grid, Container } from '@mui/material';

export const StyledTopNav = styled(AppBar)({
  backgroundColor: 'white'
}) as typeof AppBar;

export const StyledNavItem = styled(Link)({
  color: '#15141A',
  transition: '0.15s ease',
  '&:hover': {
    color: '#797591',
    transition: '0.15s ease',
  }
}) as typeof Link;

export const StyledFooter = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5)
})) as typeof Grid;

export const StyledFooterContainer = styled(Container)({
  backgroundColor: '#fbf9f6'
}) as typeof Container;