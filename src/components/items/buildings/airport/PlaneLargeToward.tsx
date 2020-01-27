import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-large-toward.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class PlaneLargeToward extends BaseItem {
    constructor() {
        super({
            width: 138,
            height: 83,
            xCorrection: -12,
            yCorrection: -50,
            img,
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.AIRPORT,
                TagsEnum.AIRPLANE,
                TagsEnum.LARGE,
                TagsEnum.FACING
            ]
        });
    }
}