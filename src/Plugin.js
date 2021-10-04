const { Plugin, Structure } = require('erela.js');
const filterConstants = require('./Util/filterConstants');
class Player extends Structure.get('Player') {
    filtersData = new filterConstants();
    filters = {
        nightcore: false,
        daycore: false,
        vaporwave: false,
        pop: false,
        soft: false,
        trebblebass: false,
        eightD: false,
        karaoke: false,
        karaoke: false,
        vibrato: false,
        earrape: false,
        tremolo: false,
        distortion: false
    }
    setNightcore(status = true) {
        if (!status) {
            this.filters.nightcore = false
            this.filtersData.timescale = null
            return this.updateFilters();
        }
        this.filters.nightcore = true
        this.filtersData.timescale = {
            speed: 1.0,
            pitch: 1.2,
            rate: 1.0
        };
        return this.updateFilters()
    }

    setDaycore(status = true) {
        if (!status) {
            this.filters.daycore = false
            this.filtersData.timescale = null
            return this.updateFilters();
        }
        this.filters.daycore = true
        this.filtersData.timescale = { speed: 1, rate: 1, pitch: .9 }
        return this.updateFilters()
    }

    setVaporwave(status = true) {
        if (!status) {
            this.filters.vaporwave = false
            this.filtersData.equalizer = [];
            this.filtersData.tremolo = null;
            this.filtersData.timescale = null;
            return this.updateFilters();
        }
        this.filters.vaporwave = true
        this.filtersData.equalizer = [{ band: 1, gain: 0.3 }, { band: 0, gain: 0.3 }];
        this.filtersData.timescale = { pitch: 0.5 }
        this.filtersData.tremolo = { depth: 0.3, frequency: 14 }
        return this.updateFilters()
    }

    setPop(status = true) {
        if (!status) {
            this.filters.pop = false
            this.filtersData.equalizer = [];
            return this.updateFilters();
        }
        this.filters.pop = true
        this.filtersData.equalizer = [
            { band: 0, gain: 0.65 },
            { band: 1, gain: 0.45 },
            { band: 2, gain: -0.45 },
            { band: 3, gain: -0.65 },
            { band: 4, gain: -0.35 },
            { band: 5, gain: 0.45 },
            { band: 6, gain: 0.55 },
            { band: 7, gain: 0.6 },
            { band: 8, gain: 0.6 },
            { band: 9, gain: 0.6 },
            { band: 10, gain: 0 },
            { band: 11, gain: 0 },
            { band: 12, gain: 0 },
            { band: 13, gain: 0 },
        ]
        return this.updateFilters();
    }
    setSoft(status = true) {
        if (!status) {
            this.filters.soft = false
            this.filtersData.lowpass = [];
            return this.updateFilters();
        }
        this.filters.soft = true
        this.filtersData.lowpass = { smoothing: 20.0 };
        return this.updateFilters();
    }

    setTrebbleBass(status = true) {
        if (!status) {
            this.filters.trebblebass = false
            this.filtersData.equalizer = [];
            return this.updateFilters();
        }
        this.filters.trebblebass = true
        this.filtersData.equalizer = [
            { band: 0, gain: 0.6 },
            { band: 1, gain: 0.67 },
            { band: 2, gain: 0.67 },
            { band: 3, gain: 0 },
            { band: 4, gain: -0.5 },
            { band: 5, gain: 0.15 },
            { band: 6, gain: -0.45 },
            { band: 7, gain: 0.23 },
            { band: 8, gain: 0.35 },
            { band: 9, gain: 0.45 },
            { band: 10, gain: 0.55 },
            { band: 11, gain: 0.6 },
            { band: 12, gain: 0.55 },
            { band: 13, gain: 0 },
        ]
        return this.updateFilters();
    }

    setEightD(status = true) {
        if (!status) {
            this.filters.eightD = false
            this.filtersData.rotation = null;
            return this.updateFilters();
        }
        this.filters.eightD = true
        this.filtersData.rotation = { rotationHz: 0.2 };
        return this.updateFilters();
    }

    setKaraoke(status = true) {
        if (!status) {
            this.filters.karaoke = false
            this.filtersData.karaoke = null;
            return this.updateFilters();
        }
        this.filters.karaoke = true
        this.filtersData.karaoke = {
            level: 1.0,
            monoLevel: 1.0,
            filterBand: 220.0,
            filterWidth: 100.0
        }
        return this.updateFilters();
    }

    setVibrato(status = true) {
        if (!status) {
            this.filters.vibrato = false
            this.filtersData.vibrato = null;
            return this.updateFilters();
        }
        this.filters.vibrato = true
        this.filtersData.vibrato = { depth: 1, frequency: 14 };
        return this.updateFilters();
    }

    setTremolo(status = true) {
        if (!status) {
            this.filters.tremolo = false
            this.filtersData.tremolo = { frequency: 2.0, depth: 0.5 };
            return this.updateFilters();
        }
        this.filters.tremolo = true
        this.filtersData.tremolo = { frequency: 2.0, depth: 0.5 };
        return this.updateFilters();
    }

    setEarrape(status = true) {
        if (!status) {
            this.filters.earrape = false
            this.filtersData.equalizer = [];
            this.filtersData.volume = 1.0;
            return this.updateFilters();
        }
        this.filters.earrape = true
        this.filtersData.equalizer = [...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.5 }))];
        this.filtersData.volume = 5.0;
        return this.updateFilters();
    }

    setDistortion(status = true) {
        if (!status) {
            this.filters.distortion = false
            this.filtersData.distortion = null
            return this.updateFilters();
        }
        this.filters.distortion = true
        this.filtersData.distortion = {
            sinOffset: 0, sinScale: 1, cosOffset: 0, cosScale: 1, tanOffset: 0, tanScale: 1, offset: 0, scale: 1,
        };
        return this.updateFilters();
    }

    async updateFilters(seek = true) {
        const { volume, equalizer, karaoke, timescale, tremolo, vibrato, rotation, distortion } = this.filtersData;
        await this.node.send({
            op: 'filters',
            guildId: this.guild,
            volume,
            equalizer,
            karaoke,
            timescale,
            tremolo,
            vibrato,
            rotation,
            distortion
        });
        if (!seek) return;
        return this.seek(this.position)
    }
    async clearFilters(seek = true) {
        await this.node.send({
            op: 'filters',
            guildId: this.guild,
        });
        this.filtersData = new filterConstants();
        this.filters = {
            nightcore: false,
            daycore: false,
            vaporwave: false,
            pop: false,
            soft: false,
            trebblebass: false,
            eightD: false,
            karaoke: false,
            vibrato: false,
            earrape: false,
            tremolo: false,
            distortion: false
        }
        if (!seek) return this;
        return this.seek(this.position)
    }
}

class erelaFilters extends Plugin {
    constructor(options) {
        super(options);
        this.options = options || {}
    }
    load() {
        return Structure.extend("Player", () => Player);
    }
}


module.exports = { erelaFilters }
