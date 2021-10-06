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
    /**
     * Set filter to nightcore
     * @param status Boolean
     * @returns Player
     */
    setNightcore(status?: boolean): this;
    /**
     * Set filter to daycore
     * @param status Boolean
     * @returns Player
     */
    setDaycore(status?: boolean): this;
    /**
     * Set filter to vaporwave
     * @param status Boolean
     * @returns Player
     */
    setVaporwave(status?: boolean): this;
    /**
     * Set filter to pop
     * @param status Boolean
     * @returns Player
     */
    setPop(status?: boolean): this;
    /**
     * Set filter to soft
     * @param status Boolean
     * @returns Player
     */
    setSoft(status?: boolean): this;
    /**
     * Set filter to trebblebass
     * @param status Boolean
     * @returns Player
     */
    setTrebbleBass(status?: boolean): this;
    /**
     * Set filter to 8D
     * @param status Boolean
     * @returns Player
     */
    setEightD(status?: boolean): this;
    /**
     * Set filter to karaoke
     * @param status Boolean
     * @returns Player
     */
    setKaraoke(status?: boolean): this;
    /**
     * Set filter to vibrato
     * @param status Boolean
     * @returns Player
     */
    setVibrato(status?: boolean): this;
    /**
     * Set filter to tremolo
     * @param status Boolean
     * @returns Player
     */
    setTremolo(status?: boolean): this;
    /**
     * Set filter to earrape
     * @param status Boolean
     * @returns Player
     */
    setEarrape(status?: boolean): this;
    /**
     * Set filter to distortion
     * @param status Boolean
     * @returns Player
     */
    setDistortion(status?: boolean): this;
    /**
     * Update current applied filters
     * @param seek Boolean
     * @returns Player
     */
    updateFilters(seek?: boolean): this;
    /**
     * Clear applied filter(s)
     * @param seek Boolean
     * @returns Player
     */
    clearFilters(seek?: boolean): this;
}
export declare class erelaFilters extends Plugin {
    load(): typeof Player;
}
export {};
