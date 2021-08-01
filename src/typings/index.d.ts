import plugin from '../index';
export = plugin;

declare module 'erela.js' {
    export class Player {
        public filters: filters
        public setNightcore(status?: boolean): Player
        public setDaycore(status?: boolean): Player
        public setDaycore(status?: boolean): Player
        public setPop(status?: boolean): Player
        public setSoft(status?: boolean): Player
        public setTrebbleBass(status?: boolean): Player
        public setEightD(status?: boolean): Player
        public setKaraoke(status?: boolean): Player
        private async updateFilters(seek?: boolean): Player
        public clearFilters(seek?: boolean): Player
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