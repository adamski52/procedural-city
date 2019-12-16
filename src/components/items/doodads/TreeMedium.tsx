import BaseItem from "../BaseItem";
import img from "../../../img/tree-medium.png";

export default class TreeMedium extends BaseItem {
    constructor() {
        super({
            width: 35,
            height: 48,
            xCorrection: 0,
            yCorrection: -14,
            img
        });
    }
}