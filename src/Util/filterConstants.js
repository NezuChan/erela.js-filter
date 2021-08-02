module.exports = class filterConstants {
    constructor(filterOptions) {
        this.volume = 1.0
        this.equalizer = filterOptions?.equalizer ?? [];
        this.karaoke = filterOptions?.karaoke ?? null;
        this.timescale = filterOptions?.timescale ?? null;
        this.tremolo = filterOptions?.tremolo ?? null;
        this.vibrato = filterOptions?.vibrato ?? null;
        this.rotation = filterOptions?.rotation ?? null;
        this.distortion = filterOptions?.distortion ?? null;
        this.lowpass = filterOptions?.lowpass ?? null;
    }
}
