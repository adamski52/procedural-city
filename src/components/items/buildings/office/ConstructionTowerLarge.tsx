import BaseItem from "../../BaseItem";
import img from "../../../../img/construction-tower-large.png";

export default class ConstructionTowerLarge extends BaseItem {
    constructor() {
        super({
            width: 94,
            height: 226,
            xCorrection: -11,
            yCorrection: -15,
            img
        });
    }
}