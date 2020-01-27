import { TagsEnum } from "../interfaces/TagsEnum";

export interface IItemProps {
    width: number;
    height: number;
    xCorrection: number;
    yCorrection: number;
    img: string;
    tags?: TagsEnum[];
}