import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-large.png";

export default class TowerLarge extends BaseItem {
    constructor() {
        super({
            width: 119,
            height: 252,
            xCorrection: 14,
            yCorrection: -16,
            img
        });
    }
}