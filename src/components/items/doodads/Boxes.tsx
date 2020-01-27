import BaseItem from "../BaseItem";
import img from "../../../img/boxes.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Boxes extends BaseItem {
    constructor() {
        super({
            width: 57,
            height: 49,
            xCorrection: -2,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.JUNK,
                TagsEnum.BOXES
            ]
        });
    }
}