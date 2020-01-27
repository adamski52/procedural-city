import BaseItem from "../BaseItem";
import img from "../../../img/blocks.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Blocks extends BaseItem {
    constructor() {
        super({
            width: 25,
            height: 22,
            xCorrection: -1,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.JUNK,
                TagsEnum.BLOCKS
            ]
        });
    }
}