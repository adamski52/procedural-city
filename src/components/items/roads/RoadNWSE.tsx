import BaseItem from "../BaseItem";
import img from "../../../img/NW-SE.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNWSE extends BaseItem {
    constructor() {
        super({
            width: 431,
            height: 249,
            xCorrection: 0,
            yCorrection: -8,
            img,
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NW,
                TagsEnum.SE
            ]
        });
    }
}