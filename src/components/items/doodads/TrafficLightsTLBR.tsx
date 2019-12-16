import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-TL-BR.png";

export default class TrafficLightsTLBR extends BaseItem {
    constructor() {
        super({
            width: 47,
            height: 84,
            xCorrection: 24,
            yCorrection: -14,
            img
        });
    }
}