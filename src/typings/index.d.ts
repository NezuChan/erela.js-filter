import { erelaFilters } from '../index';
export = erelaFilters;

declare module 'erela.js/structures/Player' {
    export interface Player {
        filtersData: filtersData
        filters: {
            nightcore: boolean,
            daycore: boolean,
            vaporwave: boolean,
            pop: boolean,
            soft: boolean,
            trebblebass: boolean,
            eightD: boolean,
            karaoke: boolean,
            vibrato: boolean,
            earrape: boolean,
            tremolo: boolean,
            distortion: boolean
        }
        
        setNightcore(status?: boolean): Player
        setDaycore(status?: boolean): Player
        setVaporwave(status?: boolean): Player
        setPop(status?: boolean): Player
        setSoft(status?: boolean): Player
        setTrebbleBass(status?: boolean): Player
        setEightD(status?: boolean): Player
        setKaraoke(status?: boolean): Player
        setVibrato(status?: boolean): Player
        setTremolo(status?: boolean): Player
        setEarrape(status?: boolean): Player
        setDistortion(status?: boolean): Player
        updateFilters(seek?: boolean): Promise<Player>
        clearFilters(seek?: boolean): Player
    }
    export interface filtersData {
        volume: number;
        equalizer: [] | null;
        karaoke: unknown | null;
        timescale: unknown | null;
        tremolo: unknown | null;
        vibrato: unknown | null;
        rotation: unknown | null;
        distortion: unknown | null;
        lowpass: unknown | null;
    }
}
