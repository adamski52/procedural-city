import BaseItem from "../BaseItem";
import img from "../../../img/cobblestone.png";

export default class Cobblestone extends BaseItem {
    constructor() {
        super({
            width: 70,
            height: 41,
            xCorrection: -1,
            yCorrection: -15,
            img
        });
    }
}