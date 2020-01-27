import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-large-away.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HangarLargeAway extends BaseItem {
    constructor() {
        super({
            width: 246,
            height: 162,
            xCorrection: -1,
            yCorrection: -17,
            img,
            isometricSize: {
                depth: 5,
                width: 4
            },
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.HANGAR,
                TagsEnum.LARGE,
                TagsEnum.AWAY
            ]
        });
    }
}