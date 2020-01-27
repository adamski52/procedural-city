import BaseItem from "../BaseItem";
import img from "../../../img/fence.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Fence extends BaseItem {
    constructor() {
        super({
            width: 152,
            height: 102,
            xCorrection: -73,
            yCorrection: -14,
            img,
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.FENCE
            ]
        });
    }
}