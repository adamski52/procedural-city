import BaseItem from "../BaseItem";
import img from "../../../img/sidewalk.png";

export default class Sidewalk extends BaseItem {
    constructor() {
        super({
            width: 35,
            height: 20,
            xCorrection: 1,
            yCorrection: -15,
            img
        });
    }
}