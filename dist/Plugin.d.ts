/// <reference path="typings/index.d.ts" />
import { Plugin } from "erela.js";
import { filterConstants } from "./Util/filterConstants";
declare const Player_base: typeof import("erela.js").Player;
declare class Player extends Player_base {
    filtersData: filterConstants;
    filters: {
        nightcore: boolean;
        daycore: boolean;
        vaporwave: boolean;
        pop: boolean;
        soft: boolean;
        trebblebass: boolean;
        eightD: boolean;
        karaoke: boolean;
        vibrato: boolean;
        earrape: boolean;
        tremolo: boolean;
        distortion: boolean;
    };
    setNightcore(status?: boolean): this;
    setDaycore(status?: boolean): this;
    setVaporwave(status?: boolean): this;
    setPop(status?: boolean): this;
    setSoft(status?: boolean): this;
    setTrebbleBass(status?: boolean): this;
    setEightD(status?: boolean): this;
    setKaraoke(status?: boolean): this;
    setVibrato(status?: boolean): this;
    setTremolo(status?: boolean): this;
    setEarrape(status?: boolean): this;
    setDistortion(status?: boolean): this;
    updateFilters(seek?: boolean): this;
    clearFilters(seek?: boolean): this;
}
export declare class erelaFilters extends Plugin {
    load(): typeof Player;
}
export {};
