import BaseItem from "../BaseItem";
import img from "../../../img/bushes-short.png";

export default class BushesShort extends BaseItem {
    constructor() {
        super({
            width: 27,
            height: 21,
            xCorrection: -5,
            yCorrection: -16,
            img
        });
    }
}