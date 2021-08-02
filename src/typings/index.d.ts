import plugin from '../index';
export = plugin;

declare module 'erela.js' {
    export interface Player {
        private filtersData: filtersData
        public filters: {
            nightcore: boolean,
            daycore: boolean,
            vaporwave: boolean,
            pop: boolean,
            soft: boolean,
            trebblebass: boolean,
            eightD: boolean,
            karaoke: boolean
        }
        public setNightcore(status?: boolean): Player
        public setDaycore(status?: boolean): Player
        public setVaporwave(status?: boolean): Player
        public setPop(status?: boolean): Player
        public setSoft(status?: boolean): Player
        public setTrebbleBass(status?: boolean): Player
        public setEightD(status?: boolean): Player
        public setKaraoke(status?: boolean): Player
        private async updateFilters(seek?: boolean): Player
        public  clearFilters(seek?: boolean): Player
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
