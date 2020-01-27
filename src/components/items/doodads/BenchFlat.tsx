import BaseItem from "../BaseItem";
import img from "../../../img/bench-flat.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class BenchFlat extends BaseItem {
    constructor() {
        super({
            width: 23,
            height: 18,
            xCorrection: -3,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BENCH
            ]
        });
    }
}