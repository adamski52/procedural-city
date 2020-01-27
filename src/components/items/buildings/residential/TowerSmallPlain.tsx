import BaseItem from "../../BaseItem";
import img from "../../../../img/tower-small-plain.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class TowerSmallPlain extends BaseItem {
    constructor() {
        super({
            width: 140,
            height: 151,
            xCorrection: 0,
            yCorrection: -17,
            img,
            tags: [
                TagsEnum.RESIDENTIAL,
                TagsEnum.APARTMENT,
                TagsEnum.SMALL
            ]
        });
    }
}