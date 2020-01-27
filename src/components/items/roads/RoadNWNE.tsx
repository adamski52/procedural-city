import BaseItem from "../BaseItem";
import img from "../../../img/NW-NE.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNWNE extends BaseItem {
    constructor() {
        super({
            width: 430,
            height: 155,
            xCorrection: 0,
            yCorrection: -102,
            img,
            isometricSize: {
                depth: 20,
                width: 20
            },
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NW,
                TagsEnum.NE
            ]
        });
    }
}