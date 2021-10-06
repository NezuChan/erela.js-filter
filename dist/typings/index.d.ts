export interface filtersData {
    volume: number;
    equalizer?: equalizerOptions[];
    karaoke?: karaoke;
    timescale?: timescale;
    tremolo?: tremolo;
    vibrato?: vibrato;
    rotation?: rotation;
    distortion?: distortion;
    lowpass?: lowPass;
}
export interface distortion {
    sinOffset?: number;
    sinScale?: number;
    cosOffset?: number;
    cosScale?: number;
    tanOffset?: number;
    tanScale?: number;
    offset?: number;
    scale?: number;
}
export interface equalizerOptions {
    band?: number;
    gain?: number;
}
export interface karaoke {
    level?: number;
    monoLevel?: number;
    filterBand?: number;
    filterWidth?: number;
}
export interface lowPass {
    smoothing?: number;
}
export interface rotation {
    rotationHz?: number;
}
export interface tremolo {
    depth?: number;
    frequency?: number;
}
export interface timescale {
    speed?: number;
    pitch?: number;
    rate?: number;
}
export interface vibrato {
    frequency?: number;
    depth?: number;
}
declare module "erela.js/structures/Player" {
    interface Player {
        filtersData: filtersData;
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
}
