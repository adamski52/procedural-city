import BaseItem from "../BaseItem";
import img from "../../../img/cobblestone.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Cobblestone extends BaseItem {
    constructor() {
        super({
            width: 70,
            height: 41,
            xCorrection: -1,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.COBBLESTONE
            ]
        });
    }
}