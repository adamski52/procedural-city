import BaseItem from "../BaseItem";
import img from "../../../img/topiary.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Topiary extends BaseItem {
    constructor() {
        super({
            width: 26,
            height: 49,
            xCorrection: 1,
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