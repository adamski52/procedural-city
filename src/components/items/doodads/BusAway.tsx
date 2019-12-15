import BaseItem from "../BaseItem";
import img from "../../../img/bus-away.png";

export default class BusAway extends BaseItem {
    constructor() {
        super({
            width: 54,
            height: 50,
            xCorrection: -6,
            yCorrection: -16,
            img
        });
    }
}