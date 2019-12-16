import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-TR-BL.png";

export default class TrafficLightsTRBL extends BaseItem {
    constructor() {
        super({
            width: 50,
            height: 60,
            xCorrection: 25,
            yCorrection: -14,
            img
        });
    }
}