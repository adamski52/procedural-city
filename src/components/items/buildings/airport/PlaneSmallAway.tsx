import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-small-away.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class PlaneSmallAway extends BaseItem {
    constructor() {
        super({
            width: 103,
            height: 55,
            xCorrection: -9,
            yCorrection: -30,
            img,
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.AIRPORT,
                TagsEnum.AIRPLANE,
                TagsEnum.SMALL,
                TagsEnum.AWAY
            ]
        });
    }
}