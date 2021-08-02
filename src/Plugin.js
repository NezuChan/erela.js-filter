const { Plugin, Structure } = require('erela.js');
const filterConstants = require('./Util/filterConstants');
module.exports = class erelaFilters extends Plugin {
    load() {
        Structure.extend('Player', (Player) => {
            class extends Player {
                filtersData = new filterConstants();
                filters = {
                    nightore: false,
                    daycore: false,
                    vaporwave: false,
                    pop: false,
                    soft: false,
                    trebblebass: false,
                    eightD: false,
                    karaoke: false
                }

                setNightcore(status = true) {
                    if(!status) {
                        this.filters.nightore = false
                        this.filtersData.timescale = null
                        return this.updateFilters();
                    }
                    this.filters.nightore = true
                    this.filtersData.timescale = {
                        speed: 1.0,
                        pitch: 1.0,
                        rate: 1.0
                    };
                    return this.updateFilters()
                }

                setDaycore(status = true) {
                    if(!status) {
                        this.filters.daycore = false
                        this.filtersData.timescale = null
                        return this.updateFilters();
                    }
                    this.filters.daycore = true
                    this.filtersData.timescale = { speed: 1, rate: 1, pitch: .9 }
                    return this.updateFilters()
                }

                setVaporwave(status = true) {
                    if(!status) {
                        this.filters.vaporwave = false
                        this.filtersData.equalizer = [];
                        this.filtersData.tremolo = null;
                        this.filtersData.timescale = null;
                        return this.updateFilters();
                    }
                    this.filters.vaporwave = true
                    this.filtersData.equalizer = [ { band: 1, gain: 0.3 }, {band: 0, gain: 0.3} ];
                    this.filtersData.timescale = { pitch: 0.5 }
                    this.filtersData.tremolo = { depth: 0.3, frequency: 14 }
                    return this.updateFilters()
                }

                setPop(status = true) {
                    if(!status) {
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
                    if(!status) {
                        this.filters.soft = false
                        this.filtersData.lowpass = [];
                        return this.updateFilters();
                    }
                    this.filters.soft = true
                    this.filtersData.lowpass ={ smoothing: 20.0 };
                    this.updateFilters();
                }

                setTrebbleBass(status = true) {
                    if(!status) {
                        this.filters.trebblebass = false
                        this.filtersData.equalizer = [];
                        this.updateFilters();
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
                    this.updateFilters();
                }
                
                setEightD(status = true) {
                    if(!status) {
                        this.filters.eightD = false
                        this.filtersData.rotation = null;
                        this.updateFilters();
                    }
                    this.filters.eightD = true
                    this.filtersData.rotation = { rotationHz };
                    this.updateFilters();
                }

                setKaraoke(status = true) {
                    if(!status) {
                        this.filters.karaoke = false
                        this.filtersData.karaoke = null;
                        this.updateFilters();
                    }
                    this.filters.karaoke = true
                    this.filtersData.karaoke = {
                        level: 1.0,
                        monoLevel: 1.0,
                        filterBand: 220.0,
                        filterWidth: 100.0
                    }
                    this.updateFilters();
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
                    if(!seek) return;
                    return this.seek(this.position)
                }
                async clearFilters(seek = true) {
                    await this.node.send({
                        op: 'filters',
                        guildId: this.guild,
                    });
                    if(!seek) return;
                    return this.seek(this.position)
                } 
            }
        })
    }
}