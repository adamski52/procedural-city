import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-large-plain.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class TowerLargePlain extends BaseItem {
    constructor() {
        super({
            width: 140,
            height: 299,
            xCorrection: -1,
            yCorrection: -18,
            img,
            isometricSize: {
                depth: 3,
                width: 3
            },
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT,
                TagsEnum.LARGE
            ]
        });
    }
}