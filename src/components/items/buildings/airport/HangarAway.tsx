import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-away.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HangarAway extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 136,
            xCorrection: -13,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 4,
                width: 4
            },
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.HANGAR,
                TagsEnum.AWAY
            ]
        });
    }
}