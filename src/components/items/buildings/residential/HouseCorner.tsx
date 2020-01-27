import BaseItem from "../../BaseItem";
import img from "../../../../img/house-corner.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseCorner extends BaseItem {
    constructor() {
        super({
            width: 106,
            height: 79,
            xCorrection: -7,
            yCorrection: -23,
            img,
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.HOUSE
            ]
        });
    }
}