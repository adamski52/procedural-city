import BaseItem from "../BaseItem";
import img from "../../../img/sidewalk.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Sidewalk extends BaseItem {
    constructor() {
        super({
            width: 35,
            height: 20,
            xCorrection: 1,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.SIDEWALK
            ]
        });
    }
}