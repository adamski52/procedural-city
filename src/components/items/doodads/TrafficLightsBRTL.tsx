import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-BR-TL.png";

export default class TrafficLightsBRTL extends BaseItem {
    constructor() {
        super({
            width: 58,
            height: 67,
            xCorrection: -25,
            yCorrection: -14,
            img
        });
    }
}