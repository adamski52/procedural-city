import BaseItem from "../../BaseItem";
import img from "../../../../img/construction-tower-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class ConstructionTowerLarge extends BaseItem {
    constructor() {
        super({
            width: 94,
            height: 226,
            xCorrection: -11,
            yCorrection: -15,
            img,
            isometricSize: {
                depth: 3,
                width: 4
            },
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.TOWER,
                TagsEnum.LARGE,
                TagsEnum.CONSTRUCTION
            ]
        });
    }
}