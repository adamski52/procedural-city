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
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BUSH
            ]
        });
    }
}