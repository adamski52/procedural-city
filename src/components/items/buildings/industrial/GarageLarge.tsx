import BaseItem from "../../BaseItem";
import img from "../../../../img/garage-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class GarageLarge extends BaseItem {
    constructor() {
        super({
            width: 152,
            height: 154,
            xCorrection: 28,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 5,
                width: 2
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.GARAGE,
                TagsEnum.LARGE
            ]
        });
    }
}