import BaseItem from "../BaseItem";
import img from "../../../img/NW-SE-SW.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNWSESW extends BaseItem {
    constructor() {
        super({
            width: 432,
            height: 249,
            xCorrection: 0,
            yCorrection: -8,
            img,
            isometricSize: {
                depth: 20,
                width: 20
            },
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NW,
                TagsEnum.SE,
                TagsEnum.SW
            ]
        });
    }
}