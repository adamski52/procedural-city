import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-large-away.png";

export default class HangarLargeAway extends BaseItem {
    constructor() {
        super({
            width: 246,
            height: 162,
            xCorrection: -1,
            yCorrection: -17,
            img
        });
    }
}