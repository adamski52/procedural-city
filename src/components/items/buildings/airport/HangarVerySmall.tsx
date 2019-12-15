import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-very-small.png";

export default class HangarVerySmall extends BaseItem {
    constructor() {
        super({
            width: 77,
            height: 66,
            xCorrection: -3,
            yCorrection: -16,
            img
        });
    }
}