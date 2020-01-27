import BaseItem from "../BaseItem";
import img from "../../../img/tree-short.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TreeShort extends BaseItem {
    constructor() {
        super({
            width: 29,
            height: 39,
            xCorrection: 0,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TREE,
                TagsEnum.SMALL
            ]
        });
    }
}