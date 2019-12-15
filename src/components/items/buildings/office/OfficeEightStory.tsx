import BaseItem from "../../BaseItem";
import img from "../../../../img/office-8-story.png";

export default class OfficeEightStory extends BaseItem {
    constructor() {
        super({
            width: 111,
            height: 204,
            xCorrection: -4,
            yCorrection: -15,
            img
        });
    }
}