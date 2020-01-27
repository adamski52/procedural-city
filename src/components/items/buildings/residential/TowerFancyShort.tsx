import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-fancy-short.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class TowerFancyShort extends BaseItem {
    constructor() {
        super({
            width: 94,
            height: 144,
            xCorrection: 8,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 3,
                width: 2
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT,
                TagsEnum.SMALL
            ]
        });
    }
}