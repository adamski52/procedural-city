import BaseItem from "../BaseItem";
import img from "../../../img/boxes.png";

export default class Boxes extends BaseItem {
    constructor() {
        super({
            width: 57,
            height: 49,
            xCorrection: -2,
            yCorrection: -15,
            img
        });
    }
}