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
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.SIDEWALK
            ]
        });
    }
}