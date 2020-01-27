import BaseItem from "../BaseItem";
import img from "../../../img/NW-NE-SW.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNWNESW extends BaseItem {
    constructor() {
        super({
            width: 432,
            height: 249,
            xCorrection: 0,
            yCorrection: -8,
            img,
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NW,
                TagsEnum.NE,
                TagsEnum.SW
            ]
        });
    }
}