import BaseItem from "../../BaseItem";
import img from "../../../../img/hangar-large.png";
import { TagsEnum } from "../../../../interfaces/TagsEnum";

export default class HangarLarge extends BaseItem {
    constructor() {
        super({
            width: 243,
            height: 185,
            xCorrection: 20,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.AIRPORT,
                TagsEnum.HANGAR,
                TagsEnum.FACING,
                TagsEnum.LARGE
            ]
        });
    }
}