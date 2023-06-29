export interface CustomButtonPropsType {
    clickHandler: () => void;
    text: string;
}
interface ColorsPropsType {
    backgroundColor: string;
    primaryColor: string;
    textColor: string;
}
interface StylesPropType {
    borderStyle: string;
    containerHeight: string;
    containerPadding: string;
    containerWidth: string;
    fontStyle: string;
}
interface ThemePropsType {
    colors: ColorsPropsType;
    styles: StylesPropType;
}
export interface ThemeProviderPropsType {
    theme?: ThemePropsType;
}
export interface CustomInputPropsType {
    className?: string;
    changeHandler: (value: string) => void;
    placeHolder: string;
    value: string;
}
export interface IconProps {
    fill?: string;
    height?: number | string;
    width?: number | string;
}
export {};
