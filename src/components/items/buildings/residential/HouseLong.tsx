import BaseItem from "../../BaseItem";
import img from "../../../../img/house-long.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HouseLong extends BaseItem {
    constructor() {
        super({
            width: 84,
            height: 75,
            xCorrection: 10,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.HOUSE
            ]
        });
    }
}