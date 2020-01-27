import BaseItem from "../../BaseItem";
import img from "../../../../img/construction-tower-very-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class ConstructionTowerVeryLarge extends BaseItem {
    constructor() {
        super({
            width: 130,
            height: 399,
            xCorrection: 0,
            yCorrection: -17,
            img,
            tags: [
                TagsEnum.COMMERCIAL,
                TagsEnum.TOWER,
                TagsEnum.XLARGE,
                TagsEnum.CONSTRUCTION
            ]
        });
    }
}