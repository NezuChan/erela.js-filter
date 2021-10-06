import { filtersData } from "../typings";
export declare class filterConstants {
    filterOptions?: filtersData;
    volume: number;
    equalizer: import("../typings").equalizerOptions[];
    karaoke: import("../typings").karaoke;
    timescale: import("../typings").timescale;
    tremolo: import("../typings").tremolo;
    vibrato: import("../typings").vibrato;
    rotation: import("../typings").rotation;
    distortion: import("../typings").distortion;
    lowpass: import("../typings").lowPass;
    constructor(filterOptions?: filtersData);
}
