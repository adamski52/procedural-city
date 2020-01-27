import BaseItem from "../BaseItem";
import img from "../../../img/watch-tower.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class WatchTower extends BaseItem {
    constructor() {
        super({
            width: 36,
            height: 70,
            xCorrection: 0,
            yCorrection: -16,
            img,
            tags: [
                TagsEnum.JUNK,
                TagsEnum.WATCHTOWER
            ]
        });
    }
}