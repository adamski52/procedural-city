import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-fancy-short.png";

export default class TowerFancyShort extends BaseItem {
    constructor() {
        super({
            width: 94,
            height: 144,
            xCorrection: 8,
            yCorrection: -16,
            img
        });
    }
}