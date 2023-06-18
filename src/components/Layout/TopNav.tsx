import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { Link as RouterLink} from 'react-router-dom';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component='h1'>
            Joe's Joke App
          </Typography>
          <Typography variant="h6">
            Search
          </Typography>
          {/* <Typography variant="h6"> */}
            {/* <Link component={RouterLink} to='/random'>Random</Link> */}
          {/* </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}