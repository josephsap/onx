import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component='h1'>
            <Link style={{color: 'red'}} component={RouterLink} to='/'>Joke 😹 App</Link>
          </Typography>
          <Typography variant="h6">
            <Link style={{color: 'red'}} component={RouterLink} to='/random'>Random</Link>
          </Typography>
          <Typography variant="h6">
            <Link style={{color: 'red'}} component={RouterLink} to='/'>Search</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}