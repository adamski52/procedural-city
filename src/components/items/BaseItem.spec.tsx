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

    it("should give the tags", () => {
        let actual = item.getTags();
        expect(actual).toEqual([TagsEnum.AIRPORT]);
    });

    it("should set x/y based on isometric ratio", () => {
        item.setIsometricPosition(0, 0);
        expect(item.x).toEqual(1.5);
        expect(item.y).toEqual(-14);

        item.setIsometricPosition(10, 10);
        expect(item.x).toEqual(1.5);
        expect(item.y).toEqual(-211.67441860465118);

        item.setIsometricPosition(20, 20);
        expect(item.x).toEqual(1.5);
        expect(item.y).toEqual(-409.34883720930236);

        item.setIsometricPosition(0, 20);
        expect(item.x).toEqual(-338.5);
        expect(item.y).toEqual(-211.67441860465118);

        item.setIsometricPosition(20, 0);
        expect(item.x).toEqual(341.5);
        expect(item.y).toEqual(-211.67441860465118);
    });

    it("should invert the x axis and re-adjust the x-offset", () => {
        item.setIsometricPosition(0, 0);

        expect(item.x).toEqual(1.5);
        expect(item.scale.x).toEqual(1);

        item.flip();
        item.setIsometricPosition(0, 0);

        expect(item.x).toEqual(-1.5);
        expect(item.scale.x).toEqual(-1);
    });

    it("should get the number of blocks based on size", () => {
        expect(item.getIsometricDepth()).toEqual(2);
        expect(item.getIsometricWidth()).toEqual(2);
    });
});
