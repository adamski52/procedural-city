import BaseItem from "../BaseItem";
import img from "../../../img/tree-short.png";

export default class TreeShort extends BaseItem {
    constructor() {
        super({
            width: 29,
            height: 39,
            xCorrection: 0,
            yCorrection: -14,
            img
        });
    }
}