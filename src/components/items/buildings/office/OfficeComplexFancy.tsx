import BaseItem from "../../BaseItem";
import img from "../../../../img/office-complex-fancy.png";

export default class OfficeComplexFancy extends BaseItem {
    constructor() {
        super({
            width: 377,
            height: 243,
            xCorrection: -9,
            yCorrection: -90,
            img
        });
    }
}