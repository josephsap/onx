import { Grid, Typography, Link } from '@mui/material';

const HomePage = () => (
  <Grid container sx={{ mt: 6 }}>
    <Grid item xs={12} sm={6}>
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        Overview: 
      </Typography>
      <Typography variant="body1">
        I made this app with React, Vite, MUI, and Typescript. It's deployed to Cloudflare pages at <Link href="https://onx-9iy.pages.dev/">https://onx-9iy.pages.dev/</Link>. Click the nav items to see the other pages. Thanks for looking.
      </Typography>
    </Grid>
  </Grid>
);

export default HomePage;