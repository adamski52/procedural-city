import BaseItem from "../../BaseItem";
import img from "../../../../img/garage-small.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class GarageSmall extends BaseItem {
    constructor() {
        super({
            width: 89,
            height: 81,
            xCorrection: -2,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.GARAGE,
                TagsEnum.SMALL
            ]
        });
    }
}