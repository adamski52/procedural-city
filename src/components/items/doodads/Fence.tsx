import BaseItem from "../BaseItem";
import img from "../../../img/fence.png";

export default class Fence extends BaseItem {
    constructor() {
        super({
            width: 152,
            height: 102,
            xCorrection: -73,
            yCorrection: -14,
            img
        });
    }
}