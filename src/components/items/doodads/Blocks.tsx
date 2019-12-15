import BaseItem from "../BaseItem";
import img from "../../../img/blocks.png";

export default class ACUnits extends BaseItem {
    constructor() {
        super({
            width: 25,
            height: 22,
            xCorrection: -1,
            yCorrection: -14,
            img
        });
    }
}