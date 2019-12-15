import BaseItem from "../../BaseItem";
import img from "../../../../img/office-12-story.png";

export default class OfficeTwelveStory extends BaseItem {
    constructor() {
        super({
            width: 111,
            height: 233,
            xCorrection: -4,
            yCorrection: -15,
            img
        });
    }
}