import BaseItem from "../BaseItem";
import img from "../../../img/pickup-full.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class PickupFull extends BaseItem {
    constructor() {
        super({
            width: 46,
            height: 38,
            xCorrection: 6,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.TRUCK
            ]
        });
    }
}