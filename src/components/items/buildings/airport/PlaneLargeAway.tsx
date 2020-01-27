import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-large-away.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class PlaneLargeAway extends BaseItem {
    constructor() {
        super({
            width: 136,
            height: 73,
            xCorrection: 12,
            yCorrection: -32,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.AIRPORT,
                TagsEnum.AIRPLANE,
                TagsEnum.LARGE,
                TagsEnum.AWAY
            ]
        });
    }
}