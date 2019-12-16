import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-very-large.png";

export default class OfficeGlassVeryLarge extends BaseItem {
    constructor() {
        super({
            width: 145,
            height: 328,
            xCorrection: -4,
            yCorrection: -18,
            img
        });
    }
}