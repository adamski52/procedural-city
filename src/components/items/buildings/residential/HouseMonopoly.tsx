import BaseItem from "../../BaseItem";
import img from "../../../../img/house-monopoly.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseMonopoly extends BaseItem {
    constructor() {
        super({
            width: 69,
            height: 64,
            xCorrection: 0,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.HOUSE
            ]
        });
    }
}