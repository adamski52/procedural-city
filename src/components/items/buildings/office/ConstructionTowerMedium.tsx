import BaseItem from "../../BaseItem";
import img from "../../../../img/construction-tower-medium.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class ConstructionTowerMedium extends BaseItem {
    constructor() {
        super({
            width: 105,
            height: 138,
            xCorrection: -11,
            yCorrection: -18,
            img,
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.TOWER,
                TagsEnum.MEDIUM,
                TagsEnum.CONSTRUCTION
            ]
        });
    }
}