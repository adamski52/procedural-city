import BaseItem from "../BaseItem";
import img from "../../../img/bushes-tall.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class BushesTall extends BaseItem {
    constructor() {
        super({
            width: 77,
            height: 59,
            xCorrection: 0,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BUSH
            ]
        });
    }
}