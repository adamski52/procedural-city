import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class Hangar extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 136,
            xCorrection: -14,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 3,
                width: 4
            },
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.HANGAR,
                TagsEnum.FACING
            ]
        });
    }
}