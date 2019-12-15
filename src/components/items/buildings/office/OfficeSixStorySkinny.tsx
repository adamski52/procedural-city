import BaseItem from "../../BaseItem";
import img from "../../../../img/office-6-story-skinny.png";

export default class OfficeSixStorySkinny extends BaseItem {
    constructor() {
        super({
            width: 88,
            height: 225,
            xCorrection: 0,
            yCorrection: -15,
            img
        });
    }
}