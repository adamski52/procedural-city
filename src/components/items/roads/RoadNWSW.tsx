import BaseItem from "../BaseItem";
import img from "../../../img/NW-SW.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNWSW extends BaseItem {
    constructor() {
        super({
            width: 269,
            height: 248,
            xCorrection: -82,
            yCorrection: -8,
            img,
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NW,
                TagsEnum.SW
            ]
        });
    }
}