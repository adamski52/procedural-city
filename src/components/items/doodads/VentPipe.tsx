import BaseItem from "../BaseItem";
import img from "../../../img/vent-pipe.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class VentPipe extends BaseItem {
    constructor() {
        super({
            width: 24,
            height: 32,
            xCorrection: 0,
            yCorrection: -19,
            img,
            tags: [
                TagsEnum.JUNK,
                TagsEnum.VENT_PIPE
            ]
        });
    }
}