import { createTheme } from '@mui/material/styles';
import * as color from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    charts: {
      blueMono: {
        one: React.CSSProperties['color'];
        two: React.CSSProperties['color'];
        three: React.CSSProperties['color'];
        four: React.CSSProperties['color'];
        five: React.CSSProperties['color'];
      }
      sentiment: {
        one: React.CSSProperties['color'];
        two: React.CSSProperties['color'];
        three: React.CSSProperties['color'];
        four: React.CSSProperties['color'];
        five: React.CSSProperties['color'];
        six: React.CSSProperties['color'];
      }
      red: React.CSSProperties['color'];
      pink: React.CSSProperties['color'];
      purple: React.CSSProperties['color'];
      deepPurple: React.CSSProperties['color'];
      indigo: React.CSSProperties['color'];
      blue: React.CSSProperties['color'];
      lightBlue: React.CSSProperties['color'];
      cyan: React.CSSProperties['color'];
      teal: React.CSSProperties['color'];
      green: React.CSSProperties['color'];
      lightGreen: React.CSSProperties['color'];
      lime: React.CSSProperties['color'];
      yellow: React.CSSProperties['color'];
      amber: React.CSSProperties['color'];
      orange: React.CSSProperties['color'];
      deepOrange: React.CSSProperties['color'];
      brown: React.CSSProperties['color'];
      grey: React.CSSProperties['color'];
      blueGrey: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    charts: {
      blueMono: {
        one: React.CSSProperties['color'];
        two: React.CSSProperties['color'];
        three: React.CSSProperties['color'];
        four: React.CSSProperties['color'];
        five: React.CSSProperties['color'];
      }
      sentiment: {
        one: React.CSSProperties['color'];
        two: React.CSSProperties['color'];
        three: React.CSSProperties['color'];
        four: React.CSSProperties['color'];
        five: React.CSSProperties['color'];
        six: React.CSSProperties['color'];
      }
    red: React.CSSProperties['color'];
      pink: React.CSSProperties['color'];
      purple: React.CSSProperties['color'];
      deepPurple: React.CSSProperties['color'];
      indigo: React.CSSProperties['color'];
      blue: React.CSSProperties['color'];
      lightBlue: React.CSSProperties['color'];
      cyan: React.CSSProperties['color'];
      teal: React.CSSProperties['color'];
      green: React.CSSProperties['color'];
      lightGreen: React.CSSProperties['color'];
      lime: React.CSSProperties['color'];
      yellow: React.CSSProperties['color'];
      amber: React.CSSProperties['color'];
      orange: React.CSSProperties['color'];
      deepOrange: React.CSSProperties['color'];
      brown: React.CSSProperties['color'];
      grey: React.CSSProperties['color'];
      blueGrey: React.CSSProperties['color'];
    };
  }
  interface Palette {
    info: Palette['info'];
  }
  interface PaletteOptions {
    info: PaletteOptions['info'];
  }
}

const mainTheme = createTheme({
  palette: {
    info: {
      main: color.blue['A200'],
      // main: color.blue[100],
    },
    success: {
      main: color.green[600],
    },
    error: {
      main: color.red['A400'],
    },
  },
  charts: {
    blueMono: {
      one: '#1a237e',
      two: '#3f51b5',
      three: '#7986cb',
      four: '#c5cae9',
      five: '#e8eaf6'
    },
    sentiment: {
      one: '#00BCC1',
      two: '#51DCBC',
      three: '#D43C6E',
      four: '#8F217F',
      five: '#605788',
      six: '#AF2C2F'
    },
    red: color.red['A400'],
    pink: color.pink[500],
    purple: color.purple[500],
    deepPurple: color.deepPurple[500],
    indigo: color.indigo['A400'],
    blue: color.blue[700],
    lightBlue: color.lightBlue[500],
    cyan: color.cyan[500],
    teal: color.teal['A400'],
    green: color.green['A700'],
    lightGreen: color.lightGreen[500],
    lime: color.lime[500],
    yellow: color.yellow[500],
    amber: color.amber[500],
    orange: color.orange[500],
    deepOrange: color.deepOrange[500],
    brown: color.brown[500],
    grey: color.grey[500],
    blueGrey: color.blueGrey[500],
  },
});

export default mainTheme;
