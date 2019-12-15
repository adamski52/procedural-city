import BaseItem from "../BaseItem";
import img from "../../../img/AC-units.png";

export default class ACUnits extends BaseItem {
    constructor() {
        super({
            width: 127,
            height: 78,
            xCorrection: -24,
            yCorrection: -13,
            img
        });
    }
}