import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-medium.png";

export default class OfficeGlassMedium extends BaseItem {
    constructor() {
        super({
            width: 129,
            height: 252,
            xCorrection: -10,
            yCorrection: -16,
            img
        });
    }
}