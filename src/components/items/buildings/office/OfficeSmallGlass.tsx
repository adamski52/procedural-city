import BaseItem from "../../BaseItem";
import img from "../../../../img/office-small-glass.png";

export default class OfficeSmallGlass extends BaseItem {
    constructor() {
        super({
            width: 107,
            height: 100,
            xCorrection: 7,
            yCorrection: -18,
            img
        });
    }
}