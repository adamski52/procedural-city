import { IItemMeta } from "./ItemMeta";

export interface IItemProps {
    width: number;
    height: number;
    xCorrection: number;
    yCorrection: number;
    img: string;
    meta?: IItemMeta[];
}