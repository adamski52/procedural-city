import BaseItem from "../../BaseItem";
import img from "../../../../img/office-glass-6-story.png";

export default class OfficeGlassSixStory extends BaseItem {
    constructor() {
        super({
            width: 135,
            height: 198,
            xCorrection: 0,
            yCorrection: -16,
            img
        });
    }
}