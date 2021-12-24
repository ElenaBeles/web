export interface IButton {
    text: any;
    type: "button" | "submit" | "reset" | undefined
    onClick?: (e : any) => void;
    disabled?: any;
    className?: string;
}