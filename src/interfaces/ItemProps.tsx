import { TagsEnum } from "../interfaces/TagsEnum";

export interface IIsometricSize {
    depth: number;
    width: number;
}

export interface IItemProps {
    width: number;
    height: number;
    xCorrection: number;
    yCorrection: number;
    img: string;
    isometricSize:IIsometricSize;
    tags?: TagsEnum[];
}