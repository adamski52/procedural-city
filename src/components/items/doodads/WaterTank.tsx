import BaseItem from "../BaseItem";
import img from "../../../img/water-tank.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class WaterTank extends BaseItem {
    constructor() {
        super({
            width: 50,
            height: 81,
            xCorrection: 0,
            yCorrection: -20,
            img,
            tags: [
                TagsEnum.JUNK,
                TagsEnum.WATER_TANK
            ]
        });
    }
}