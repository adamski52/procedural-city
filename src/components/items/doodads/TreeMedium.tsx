import BaseItem from "../BaseItem";
import img from "../../../img/tree-medium.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TreeMedium extends BaseItem {
    constructor() {
        super({
            width: 35,
            height: 48,
            xCorrection: 0,
            yCorrection: -14,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TREE,
                TagsEnum.MEDIUM
            ]
        });
    }
}