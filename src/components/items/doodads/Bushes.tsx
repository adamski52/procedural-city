import BaseItem from "../BaseItem";
import img from "../../../img/bushes.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Bushes extends BaseItem {
    constructor() {
        super({
            width: 41,
            height: 32,
            xCorrection: 0,
            yCorrection: -15,
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