import BaseItem from "../BaseItem";
import img from "../../../img/tree-2-branch.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TreeTwoBranch extends BaseItem {
    constructor() {
        super({
            width: 32,
            height: 44,
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
                TagsEnum.LARGE
            ]
        });
    }
}