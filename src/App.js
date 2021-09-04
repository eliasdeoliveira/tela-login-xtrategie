import Routes from './router';
import './App.css';
import { createTheme , ThemeProvider } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        primary: {
          main: '#4d9488'
        },
        secondary: {
          main: '#606062'
        },
        error: {
          main: '#e57373'
        },
        warning: {
          main: '#ffb74d'
        },
        info: {
          main: '#64b5f6'
        },
        success: {
          main: '#81c784'
        }
      },
      color: {
        primary: {
          main: '#4d9488'
        },
        secondary: {
          main: '#606062'
        },
        error: {
          main: '#e57373'
        },
        warning: {
          main: '#ffb74d'
        },
        info: {
          main: '#64b5f6'
        },
        success: {
          main: '#81c784'
        }
      },
      primary: {
        main: '#4d9488'
      },
      secondary: {
        main: '#606062'
      },
      error: {
        main: '#e57373'
      },
      warning: {
        main: '#ffb74d'
      },
      info: {
        main: '#64b5f6'
      },
      success: {
        main: '#81c784'
      },
    }
  }, ptBR);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>

  );
}

export default App;
