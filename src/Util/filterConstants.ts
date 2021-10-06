import { filtersData } from "../typings";

export class filterConstants {
    public volume = 1.0;
    public equalizer = this.filterOptions.equalizer ?? [];
    public karaoke = this.filterOptions.karaoke ?? {};
    public timescale = this.filterOptions.timescale ?? {};
    public tremolo = this.filterOptions.tremolo ?? {};
    public vibrato = this.filterOptions.vibrato ?? {};
    public rotation = this.filterOptions.rotation ?? {};
    public distortion = this.filterOptions.distortion ?? {};
    public lowpass = this.filterOptions.lowpass ?? {};
    public constructor(public filterOptions?: filtersData) { }
}
