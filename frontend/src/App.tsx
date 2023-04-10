import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/dashboaed';
import Navbar from './screens/navbar';
import { themeSettings } from './theme';
import Management from './screens/Management';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/predictions" element={<h1>Predictions</h1>} /> */}
              <Route path="/management" element={<Management />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
