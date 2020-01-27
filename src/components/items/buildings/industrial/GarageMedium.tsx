import BaseItem from "../../BaseItem";
import img from "../../../../img/garage-medium.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class GarageMedium extends BaseItem {
    constructor() {
        super({
            width: 103,
            height: 119,
            xCorrection: 4,
            yCorrection: -15,
            img,
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.GARAGE,
                TagsEnum.MEDIUM
            ]
        });
    }
}