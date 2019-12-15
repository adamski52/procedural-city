import BaseItem from "../../BaseItem";
import img from "../../../../img/office-1-story.png";

export default class OfficeOneStory extends BaseItem {
    constructor() {
        super({
            width: 189,
            height: 138,
            xCorrection: 8,
            yCorrection: -15,
            img
        });
    }
}