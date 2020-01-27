import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-fancy-tall.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class TowerFancyTall extends BaseItem {
    constructor() {
        super({
            width: 92,
            height: 224,
            xCorrection: 10,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 3,
                width: 2
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT,
                TagsEnum.MEDIUM
            ]
        });
    }
}