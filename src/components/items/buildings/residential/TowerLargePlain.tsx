import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-large-plain.png";

export default class TowerLargePlain extends BaseItem {
    constructor() {
        super({
            width: 140,
            height: 299,
            xCorrection: -1,
            yCorrection: -18,
            img
        });
    }
}