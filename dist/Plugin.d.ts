/// <reference path="typings/index.d.ts" />
import { Plugin } from "erela.js";
import { filterConstants } from "./Util/filterConstants";
declare const Player_base: typeof import("erela.js").Player;
/**
 * Represents a extended Player class.
 */
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
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setNightcore(status?: boolean): this;
    /**
     * Set filter to daycore
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setDaycore(status?: boolean): this;
    /**
     * Set filter to vaporwave
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setVaporwave(status?: boolean): this;
    /**
     * Set filter to pop
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setPop(status?: boolean): this;
    /**
     * Set filter to soft
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setSoft(status?: boolean): this;
    /**
     * Set filter to trebblebass
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setTrebbleBass(status?: boolean): this;
    /**
     * Set filter to 8D
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setEightD(status?: boolean): this;
    /**
     * Set filter to karaoke
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setKaraoke(status?: boolean): this;
    /**
     * Set filter to vibrato
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setVibrato(status?: boolean): this;
    /**
     * Set filter to tremolo
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setTremolo(status?: boolean): this;
    /**
     * Set filter to earrape
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setEarrape(status?: boolean): this;
    /**
     * Set filter to distortion
     * @param {boolean} [status = true] The status is enabled or disabled
     * @returns {Player}
     */
    setDistortion(status?: boolean): this;
    /**
     * Update current applied filters
     * @param {boolean} [seek = true] Should the music seeked or no
     * @returns {Player}
     */
    updateFilters(seek?: boolean): this;
    /**
    * Clear applied filter(s)
     * @param {boolean} [seek = true] Should the music seeked or no
     * @returns {Player}
     */
    clearFilters(seek?: boolean): this;
}
export declare class erelaFilters extends Plugin {
    load(): typeof Player;
}
export {};
