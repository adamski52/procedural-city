import GrassPlot from "./GrassPlot";
import Item from "../BaseItem";
import img from "../../../img/Hangar.png";

class SizeableItem extends Item {
    constructor(depth: number, width: number) {
        super({
            width: 100,
            height: 100,
            xCorrection: 0,
            yCorrection: 0,
            img,
            isometricSize: {
                depth: depth,
                width: width
            },
            tags: []
        });
    }
}

describe("BasePlot", () => {
    let plot:GrassPlot;

    beforeEach(() => {
        // baseplot is abstract so just pick on one of them.
        plot = new GrassPlot();
    });

    it("should fit an item at 0, 0, but only once", () => {
        let item = new SizeableItem(2, 2),
            item2 = new SizeableItem(2, 2),
            numItems = plot.addItem(item, 0, 0);

        expect(numItems).toEqual(1);

        numItems = plot.addItem(item2, 0, 0);
        expect(numItems).toEqual(1);
    });

    it("should fit a 1x1 item at 20, 20", () => {
        let item = new SizeableItem(1, 1),
            numItems = plot.addItem(item, 19, 19);

        expect(numItems).toEqual(1);
    });

    it("should not fit a 2x2 item at 20, 20", () => {
        let item = new SizeableItem(2, 2),
            numItems = plot.addItem(item, 19, 19);

        expect(numItems).toEqual(0);
    })
});
