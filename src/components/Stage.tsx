import React from 'react';
import * as PIXI from "pixi.js";
import CementPlot from './items/plots/CementPlot';
import CraneYellowShort from './items/buildings/industrial/CraneYellowShort';

export default class Stage extends React.Component<any, any> {
    private app:PIXI.Application;

    constructor(props:any) {
        super(props);
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x000000,
            // resolution: window.devicePixelRatio || 1
            resolution: 1
        });

        let grass = new CementPlot();
        grass.x = grass.getWidth() / 2;
        grass.y = grass.getHeight();

        let item = new CraneYellowShort();
        grass.addItem(item);
        item.flip();
        grass.setItemSlotPosition(1, 0, 0);

        this.app.stage.addChild(grass);
    }

    public render() {
        return (
            <div id="stage" />
        );
    }

    public componentDidMount() {
        document.getElementById("stage")?.appendChild(this.app.view);
    }
}