import BaseItem from "../BaseItem";
import img from "../../../img/van.png";

export default class Van extends BaseItem {
    constructor() {
        super({
            width: 54,
            height: 48,
            xCorrection: 8,
            yCorrection: -17,
            img
        });
    }
}