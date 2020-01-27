import BaseItem from "../BaseItem";
import img from "../../../img/bench-with-back.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class BenchWithBack extends BaseItem {
    constructor() {
        super({
            width: 19,
            height: 19,
            xCorrection: 6,
            yCorrection: -14,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.DECORATION,
                TagsEnum.BENCH,
                TagsEnum.ALTERNATE
            ]
        });
    }
}