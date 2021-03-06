import BaseItem from "../../BaseItem";
import img from "../../../../img/cooling-tower.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class CoolingTower extends BaseItem {
    constructor() {
        super({
            width: 76,
            height: 120,
            xCorrection: 0,
            yCorrection: -26,
            img,
            isometricSize: {
                depth: 2,
                width: 2
            },
            tags: [
                TagsEnum.INDUSTRIAL,
                TagsEnum.TOWER
            ]
        });
    }
}