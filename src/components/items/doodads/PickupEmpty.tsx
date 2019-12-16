import BaseItem from "../BaseItem";
import img from "../../../img/pickup-empty.png";

export default class PickupEmpty extends BaseItem {
    constructor() {
        super({
            width: 43,
            height: 39,
            xCorrection: 9,
            yCorrection: -16,
            img
        });
    }
}