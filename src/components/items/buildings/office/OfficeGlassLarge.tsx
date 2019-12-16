import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-large.png";

export default class OfficeGlassLarge extends BaseItem {
    constructor() {
        super({
            width: 120,
            height: 308,
            xCorrection: 15,
            yCorrection: -14,
            img
        });
    }
}