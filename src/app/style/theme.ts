import { ms } from 'react-native-size-matters';

const Theme = {
  color: {
    background: '#03060E',
    white: '#fff',
    primary: {
      main: '#03060E',
      contrastText: '#9988FF',
    },
    secundary: {
      main: '#1E2430',
      light: '#243A58',
      contrastText: '#B8A3FF',
    },
  },
  padding: {
    sm: `${ms(4)}px`,
    md: `${ms(8)}px`,
    lg: `${ms(12)}px`,
    xl: `${ms(16)}px`,
  },
  border: {
    radius: {
      sm: `${ms(4)}px`,
      md: `${ms(8)}px`,
      lg: `${ms(12)}px`,
    },
    color: {
      main: '#373E51',
    },
  },

  font: {
    sm: `${ms(12)}px`,
    md: `${ms(14)}px`,
    lg: `${ms(18)}px`,
    xl: `${ms(22)}px`,
  },
};

export default Theme;
