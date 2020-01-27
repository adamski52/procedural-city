import BaseItem from "../BaseItem";
import img from "../../../img/bushes-short.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class BushesShort extends BaseItem {
    constructor() {
        super({
            width: 27,
            height: 21,
            xCorrection: -5,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BUSH
            ]
        });
    }
}