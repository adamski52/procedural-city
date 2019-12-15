import BaseItem from "../../BaseItem";
import img from "../../../../img/office-complex.png";

export default class OfficeComplex extends BaseItem {
    constructor() {
        super({
            width: 204,
            height: 170,
            xCorrection: 30,
            yCorrection: -24,
            img
        });
    }
}