import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-TL-BR.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TrafficLightsTLBR extends BaseItem {
    constructor() {
        super({
            width: 47,
            height: 84,
            xCorrection: 24,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TRAFFIC_LIGHT,
                TagsEnum.NW
            ]
        });
    }
}