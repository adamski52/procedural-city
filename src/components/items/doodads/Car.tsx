import BaseItem from "../BaseItem";
import img from "../../../img/car.png";
import { TagsEnum } from "../../../interfaces/TagsEnum";

export default class Car extends BaseItem {
    constructor() {
        super({
            width: 43,
            height: 36,
            xCorrection: 5,
            yCorrection: -16,
            img,
            isometricSize: {
                depth: 1,
                width: 1
            },
            tags: [
                TagsEnum.VEHICLE,
                TagsEnum.CAR,
                TagsEnum.FACING
            ]
        });
    }
}