import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-large.png";

export default class HangarLarge extends BaseItem {
    constructor() {
        super({
            width: 243,
            height: 185,
            xCorrection: 20,
            yCorrection: -16,
            img
        });
    }
}