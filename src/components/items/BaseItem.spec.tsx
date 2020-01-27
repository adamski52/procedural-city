import Item from "./BaseItem";
import AirTrafficControl from "./buildings/airport/AirTrafficeControl";
import { TagsEnum } from "../../interfaces/TagsEnum";

describe("BaseItem", () => {
    let item:Item;

    beforeEach(() => {
        // baseitem is abstract so just pick on one of them.
        item = new AirTrafficControl();
    });

    it("should give the height in pixels", () => {
        let actual = item.getHeight();
        expect(actual).toEqual(192);
    });

    it("should give the width in pixels", () => {
        let actual = item.getWidth();
        expect(actual).toEqual(99);
    });

    it("gshould give the tags", () => {
        let actual = item.getTags();
        expect(actual).toEqual([TagsEnum.AIRPORT]);
    });

    it("should invert the x axis and re-adjust the x-offset", () => {
        item.setPosition(0, 0);

        expect(item.x).toEqual(1.5);
        expect(item.scale.x).toEqual(1);

        item.flip();
        item.setPosition(0, 0);

        expect(item.x).toEqual(-1.5);
        expect(item.scale.x).toEqual(-1);
    });

    it("should get the number of blocks based on size", () => {
        expect(item.getIsometricDepth()).toEqual(12);
        expect(item.getIsometricWidth()).toEqual(6);
    });
});
