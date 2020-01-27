import BaseItem from "../BaseItem";
import img from "../../../img/pickup-empty.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class PickupEmpty extends BaseItem {
    constructor() {
        super({
            width: 43,
            height: 39,
            xCorrection: 9,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.TRUCK,
                TagsEnum.ALTERNATE
            ]
        });
    }
}