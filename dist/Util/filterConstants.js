"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterConstants = void 0;
class filterConstants {
    constructor(filterOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.filterOptions = filterOptions;
        this.volume = 1.0;
        this.equalizer = (_a = this.filterOptions.equalizer) !== null && _a !== void 0 ? _a : [];
        this.karaoke = (_b = this.filterOptions.karaoke) !== null && _b !== void 0 ? _b : {};
        this.timescale = (_c = this.filterOptions.timescale) !== null && _c !== void 0 ? _c : {};
        this.tremolo = (_d = this.filterOptions.tremolo) !== null && _d !== void 0 ? _d : {};
        this.vibrato = (_e = this.filterOptions.vibrato) !== null && _e !== void 0 ? _e : {};
        this.rotation = (_f = this.filterOptions.rotation) !== null && _f !== void 0 ? _f : {};
        this.distortion = (_g = this.filterOptions.distortion) !== null && _g !== void 0 ? _g : {};
        this.lowpass = (_h = this.filterOptions.lowpass) !== null && _h !== void 0 ? _h : {};
    }
}
exports.filterConstants = filterConstants;
