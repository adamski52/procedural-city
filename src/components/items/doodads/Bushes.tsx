import BaseItem from "../BaseItem";
import img from "../../../img/bushes.png";

export default class Bushes extends BaseItem {
    constructor() {
        super({
            width: 41,
            height: 32,
            xCorrection: 0,
            yCorrection: -15,
            img
        });
    }
}