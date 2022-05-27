import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontSize: 15
        },
        sizeMedium: {
          fontSize: 14
        },
        sizeSmall: {
          fontSize: 13
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%'
        },
        '#root': {
          height: '100%'
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '.MuiTableRow-root:last-of-type': {
            '.MuiTableCell-root': {
              border: 'none'
            }
          }
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: '#506176'
          }
        }
      }
    }
  },
  palette: {
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#003ecb'
    },
    text: {
      primary: '#03060b',
      secondary: '#506176'
    }
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(9, 30, 66, 0.2)',
    '0px 1px 3px rgba(9, 30, 66, 0.12)',
    '0px 2px 4px rgba(9, 30, 66, 0.08)',
    '0px 3px 5px rgba(9, 30, 66, 0.08)',
    '0px 3px 5px -1px rgba(9, 30, 66, 0.08)',
    '0px 5px 7px rgba(9, 30, 66, 0.08)',
    '0px 6px 8px rgba(9, 30, 66, 0.08)',
    '0px 8px 12px rgba(9, 30, 66, 0.08)',
    '0px 9px 14px rgba(9, 30, 66, 0.08)',
    '0px 10px 16px rgba(9, 30, 66, 0.08)',
    '0px 11px 18px rgba(9, 30, 66, 0.08)',
    '0px 12px 20px rgba(9, 30, 66, 0.08)',
    '0px 13px 22px rgba(9, 30, 66, 0.08)',
    '0px 14px 24px rgba(9, 30, 66, 0.08)',
    '0px 15px 26px rgba(9, 30, 66, 0.08)',
    '0px 18px 28px rgba(9, 30, 66, 0.08)',
    '0px 20px 30px rgba(9, 30, 66, 0.08)',
    '0px 22px 32px rgba(9, 30, 66, 0.08)',
    '0px 24px 34px rgba(9, 30, 66, 0.08)',
    '0px 26px 36px rgba(9, 30, 66, 0.08)',
    '0px 28px 38px rgba(9, 30, 66, 0.08)',
    '0px 30px 40px rgba(9, 30, 66, 0.08)',
    '0px 32px 42px rgba(9, 30, 66, 0.08)',
    '0px 36px 46px rgba(9, 30, 66, 0.12)'
  ],
  shape: {
    borderRadius: 6
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5
    },
    body1: {},
    body2: {},
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.57
    },
    caption: {
      fontWeight: 500
    },
    overline: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 1.66
    },
    button: {
      fontWeight: 500,
      textTransform: 'none'
    }
  }
});
