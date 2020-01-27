import BaseItem from "../BaseItem";
import img from "../../../img/NE-SE.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class RoadNESE extends BaseItem {
    constructor() {
        super({
            width: 268,
            height: 248,
            xCorrection: 82,
            yCorrection: -8,
            isometricSize: {
                depth: 20,
                width: 20
            },
            img,
            tags: [
                TagsEnum.ROAD,
                TagsEnum.NE,
                TagsEnum.SE
            ]
        });
    }
}