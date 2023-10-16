import 'styled-components';

import Theme from './Theme';

export type ITheme = typeof Theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
