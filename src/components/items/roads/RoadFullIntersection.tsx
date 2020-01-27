import BaseItem from "../BaseItem";
import img from "../../../img/x.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadFullIntersection extends BaseItem {
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
                TagsEnum.SE,
                TagsEnum.SW
            ]
        });
    }
}