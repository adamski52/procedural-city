import BaseItem from "../../BaseItem";
import img from "../../../../img/office-4-story.png";

export default class OfficeFourStory extends BaseItem {
    constructor() {
        super({
            width: 116,
            height: 140,
            xCorrection: -6,
            yCorrection: -15,
            img
        });
    }
}