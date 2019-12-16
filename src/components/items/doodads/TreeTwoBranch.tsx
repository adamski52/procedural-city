import BaseItem from "../BaseItem";
import img from "../../../img/tree-2-branch.png";

export default class TreeTwoBranch extends BaseItem {
    constructor() {
        super({
            width: 32,
            height: 44,
            xCorrection: 0,
            yCorrection: -14,
            img
        });
    }
}