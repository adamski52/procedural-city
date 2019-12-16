import BaseItem from "../BaseItem";
import img from "../../../img/tree-1-branch.png";

export default class TreeOneBranch extends BaseItem {
    constructor() {
        super({
            width: 51,
            height: 67,
            xCorrection: -4,
            yCorrection: -14,
            img
        });
    }
}