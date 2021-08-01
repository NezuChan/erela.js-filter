import plugin from '../index';
export = plugin;

declare module 'erela.js' {
    export interface Player {
        filters: filters
        setNightcore(status?: boolean): Player
        setDaycore(status?: boolean): Player
        setDaycore(status?: boolean): Player
        setPop(status?: boolean): Player
        setSoft(status?: boolean): Player
        setTrebbleBass(status?: boolean): Player
        setEightD(status?: boolean): Player
        setKaraoke(status?: boolean): Player
        async updateFilters(seek?: boolean): Player
        clearFilters(seek?: boolean): Player
    }
    export interface filters {
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
