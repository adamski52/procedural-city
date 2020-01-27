import BaseItem from "../BaseItem";
import img from "../../../img/NE-SW.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNESW extends BaseItem {
    constructor() {
        super({
            width: 429,
            height: 248,
            xCorrection: 0,
            yCorrection: -8,
            img,
            isometricSize: {
                depth: 20,
                width: 20
            },
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NE,
                TagsEnum.SW
            ]
        });
    }
}