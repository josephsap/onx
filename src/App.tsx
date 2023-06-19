import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalLayout from './components/Layout';
import HomePage from './pages/HomePage';
import SingleJokePage from './pages/SingleJokePage';
import RandomJokePage from './pages/RandomJokePage';
import SearchPage from './pages/SearchPage';
import { CssBaseline } from '@mui/material';

const App = () => (
  <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <CssBaseline />
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="random" element={<RandomJokePage />} />
          <Route path="joke/:jokeId" element={<SingleJokePage />} />
        </Routes>
      </GlobalLayout>
    </Router>
  </div>
);

export default App;
    