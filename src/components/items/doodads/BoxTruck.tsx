import BaseItem from "../BaseItem";
import img from "../../../img/box-truck.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class BoxTruck extends BaseItem {
    constructor() {
        super({
            width: 127,
            height: 78,
            xCorrection: 9,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.TRUCK,
                TagsEnum.FACING
            ]
        });
    }
}