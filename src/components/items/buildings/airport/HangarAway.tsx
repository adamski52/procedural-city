import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-away.png";

export default class HangarAway extends BaseItem {
    constructor() {
        super({
            width: 174,
            height: 136,
            xCorrection: -13,
            yCorrection: -15,
            img
        });
    }
}