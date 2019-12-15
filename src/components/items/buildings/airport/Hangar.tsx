import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar.png";

export default class Hangar extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 136,
            xCorrection: -14,
            yCorrection: -16,
            img
        });
    }
}