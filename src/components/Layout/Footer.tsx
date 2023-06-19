import { Grid, Typography } from '@mui/material';
import { StyledFooterContainer, StyledFooter } from './Layout.styles';

const Footer = () => {
  return (
    <StyledFooterContainer maxWidth="xl">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <StyledFooter item xs={12}>
          <Typography variant="body1">Made by Joe</Typography>
        </StyledFooter>
      </Grid>
    </StyledFooterContainer>
  )
};

export default Footer;