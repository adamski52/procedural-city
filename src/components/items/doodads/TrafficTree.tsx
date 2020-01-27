import BaseItem from "../BaseItem";
import img from "../../../img/traffic-tree.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class TrafficTree extends BaseItem {
    constructor() {
        super({
            width: 17,
            height: 55,
            xCorrection: 1,
            yCorrection: -14,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TRAFFIC_LIGHT
            ]
        });
    }
}