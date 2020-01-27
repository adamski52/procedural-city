import BaseItem from "../BaseItem";
import img from "../../../img/traffic-lights-TR-BL.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TrafficLightsTRBL extends BaseItem {
    constructor() {
        super({
            width: 50,
            height: 60,
            xCorrection: 25,
            yCorrection: -14,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TRAFFIC_LIGHT,
                TagsEnum.NE
            ]
        });
    }
}