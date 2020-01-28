import Item from "../BaseItem";
import { IPlotProps } from "../../../interfaces/PlotProps";

export default abstract class Plot extends Item {
    protected items:Item[] = [];
    
    protected slots:boolean[][] = [];

    constructor(props:IPlotProps) {
        super({
            width: 754,
            height: 449,
            isometricSize: {
                depth: 20,
                width: 20
            },
            xCorrection: 0,
            yCorrection: 0,
            img: props.img,
            tags: props.tags
        });

        for(let x = 0; x < this.getIsometricWidth(); x++) {
            this.slots[x] = this.slots[x] || [];

            for(let y = 0; y < this.getIsometricDepth(); y++) {
                this.slots[y] = this.slots[y] || [];
                this.slots[x][y] = false;
            }
        }
    }

    private itemFits(item:Item, x:number, y:number) {
        let endX = x + item.getIsometricWidth(),
            endY = y + item.getIsometricDepth();

        if(endX > this.getIsometricWidth() || endY > this.getIsometricDepth()) {
            return false;
        }

        for(let slotX = x; slotX < endX; slotX++) {
            for(let slotY = y; slotY < endY; slotY++) {
                if(this.slots[slotX][slotY]) {
                    return false;
                }
            }
        }

        return true;
    }

    private claimSpace(item:Item, x:number, y:number) {
        for(let slotX = x; slotX < x + item.getIsometricWidth(); slotX++) {
            for(let slotY = y; slotY < y + item.getIsometricDepth(); slotY++) {
                this.slots[slotX][slotY] = true;
            }
        }
    }

    public addItem(item:Item, x:number, y:number, isInverted:boolean = false) {
        if(isInverted) {
            item.flip();
        }

        if(!this.itemFits(item, x, y)) {
            // console.warn("Item does not fit", item, x, y, this.slots);
            return this.items.length;
        }

        this.claimSpace(item, x, y);

        console.log(this.slots);

        item.setIsometricPosition(x, y);
        this.items.push(item);
        this.addChild(item);

        return this.items.length;
    }
}