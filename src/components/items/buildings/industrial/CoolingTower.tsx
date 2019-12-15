import BaseItem from "../../BaseItem";
import img from "../../../../img/cooling-tower.png";

export default class CoolingTower extends BaseItem {
    constructor() {
        super({
            width: 76,
            height: 120,
            xCorrection: 0,
            yCorrection: -26,
            img
        });
    }
}