import BaseItem from "../../BaseItem";
import img from "../../../../img/house-monopoly.png";

export default class HouseMonopoly extends BaseItem {
    constructor() {
        super({
            width: 69,
            height: 64,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}