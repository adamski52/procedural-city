import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-BR-TL.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TrafficLightsBRTL extends BaseItem {
    constructor() {
        super({
            width: 58,
            height: 67,
            xCorrection: -25,
            yCorrection: -14,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TRAFFIC_LIGHT,
                TagsEnum.SE
            ]
        });
    }
}