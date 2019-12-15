import BaseItem from "../../BaseItem";
import img from "../../../../img/atc.png";

export default class AirTrafficControl extends BaseItem {
    constructor() {
        super({
            width: 99,
            height: 192,
            xCorrection: 1.5,
            yCorrection: -14,
            img
        });
    }
}