import BaseItem from "../../BaseItem";
import img from "../../../../img/plane-small-toward.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class PlaneSmallToward extends BaseItem {
    constructor() {
        super({
            width: 95,
            height: 58,
            xCorrection: -10,
            yCorrection: -40,
            img,
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.AIRPORT,
                TagsEnum.AIRPLANE,
                TagsEnum.SMALL,
                TagsEnum.FACING
            ]
        });
    }
}