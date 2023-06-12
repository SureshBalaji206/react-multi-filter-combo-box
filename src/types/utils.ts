export interface CustomButtonPropsType {
  clickHandler: () => void;
  text: string;
}

interface ColorsPropsType {
  primary: string;
}

interface ThemePropsType {
  colors: ColorsPropsType;
}

export interface ThemeProviderPropsType {
  theme?: ThemePropsType;
}
