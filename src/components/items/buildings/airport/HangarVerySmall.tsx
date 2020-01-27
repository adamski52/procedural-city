import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-very-small.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HangarVerySmall extends BaseItem {
    constructor() {
        super({
            width: 77,
            height: 66,
            xCorrection: -3,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.HANGAR,
                TagsEnum.FACING,
                TagsEnum.SMALL
            ]
        });
    }
}