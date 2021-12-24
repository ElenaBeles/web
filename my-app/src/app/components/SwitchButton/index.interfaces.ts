export interface ISwitchButton {
    checked : boolean;
    textLeft: string;
    textRight: string;
    onChange? : (e : any) => void;
    onClick?: (e : any) => void;
}