import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-BL-TR.png";

export default class TrafficLightsBLTR extends BaseItem {
    constructor() {
        super({
            width: 49,
            height: 88,
            xCorrection: -21,
            yCorrection: -14,
            img
        });
    }
}