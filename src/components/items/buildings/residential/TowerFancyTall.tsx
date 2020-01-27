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
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT,
                TagsEnum.MEDIUM
            ]
        });
    }
}