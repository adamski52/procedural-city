import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-short.png";

export default class OfficeGlassShort extends BaseItem {
    constructor() {
        super({
            width: 113,
            height: 111,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}