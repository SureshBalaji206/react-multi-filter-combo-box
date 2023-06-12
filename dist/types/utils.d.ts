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
export interface CustomInputPropsType {
    className?: string;
    changeHandler: (value: string) => void;
    placeHolder: string;
    value: string;
}
export {};
