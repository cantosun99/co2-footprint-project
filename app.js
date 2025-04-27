/**
 * Alpine component for filters, sorting, language switching,
 * secure form inputs, and CO₂ widget
 */
function co2Table() {
    return {
        // Language (German by default)
        lang: 'de',

        // Filter states
        countryFilter: '',
        companyFilter: '',

        // Sorting states
        sortKey: 'emissions',
        sortAsc: false,

        // CO₂ emissions (in grams)
        co2Emission: null,

        // Data rows with bilingual countries
        rows: [
            { id: 1,  country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Energiewerke AG',           emissions: 120 },
            { id: 2,  country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Ruhr Kohle GmbH',          emissions: 210 },
            { id: 3,  country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Hanse Renewables',         emissions: 75  },
            { id: 4,  country: { de: 'USA',               en: 'USA'            }, company: 'Global Oil Corp',          emissions: 450 },
            { id: 5,  country: { de: 'USA',               en: 'USA'            }, company: 'Liberty Coal Inc',         emissions: 320 },
            { id: 6,  country: { de: 'USA',               en: 'USA'            }, company: 'Pacific Renewables',       emissions: 110 },
            { id: 7,  country: { de: 'China',             en: 'China'          }, company: 'Dragon Steel Ltd',         emissions: 800 },
            { id: 8,  country: { de: 'China',             en: 'China'          }, company: 'Red Giant Power',          emissions: 650 },
            { id: 9,  country: { de: 'China',             en: 'China'          }, company: 'Eastern Petrochem',        emissions: 540 },
            { id: 10, country: { de: 'Frankreich',        en: 'France'         }, company: 'Hexagon Chemicals',        emissions: 95  },
            { id: 11, country: { de: 'Frankreich',        en: 'France'         }, company: 'Bleu Energie',             emissions: 130 },
            { id: 12, country: { de: 'Frankreich',        en: 'France'         }, company: 'Gallic Metals',            emissions: 85  },
            { id: 13, country: { de: 'Indien',            en: 'India'          }, company: 'Bharat Power',             emissions: 300 },
            { id: 14, country: { de: 'Indien',            en: 'India'          }, company: 'Ganga Steel',              emissions: 260 },
            { id: 15, country: { de: 'Indien',            en: 'India'          }, company: 'Lotus Energies',           emissions: 140 },
            { id: 16, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Amazon Biofuels',          emissions: 60  },
            { id: 17, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Rio Mining Co',            emissions: 180 },
            { id: 18, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Verde Química',            emissions: 90  },
            { id: 19, country: { de: 'Australien',        en: 'Australia'      }, company: 'Outback Mining',           emissions: 150 },
            { id: 20, country: { de: 'Australien',        en: 'Australia'      }, company: 'Southern Gas',             emissions: 210 },
            { id: 21, country: { de: 'Australien',        en: 'Australia'      }, company: 'Koala Renewables',         emissions: 70  },
            { id: 22, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Maple Gas Inc',            emissions: 110 },
            { id: 23, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Northern Oil Sands',       emissions: 240 },
            { id: 24, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Polar Hydro',              emissions: 65  },
            { id: 25, country: { de: 'Russland',          en: 'Russia'         }, company: 'Siberia Energy',           emissions: 500 },
            { id: 26, country: { de: 'Russland',          en: 'Russia'         }, company: 'Volga Oil Co',             emissions: 370 },
            { id: 27, country: { de: 'Russland',          en: 'Russia'         }, company: 'Arctic Mining',            emissions: 220 },
            { id: 28, country: { de: 'Japan',             en: 'Japan'          }, company: 'Sunrise Electronics',      emissions: 70  },
            { id: 29, country: { de: 'Japan',             en: 'Japan'          }, company: 'Nippon Petro',             emissions: 180 },
            { id: 30, country: { de: 'Japan',             en: 'Japan'          }, company: 'Sakura Power',             emissions: 95  },
            { id: 31, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Alpine Solar GmbH',        emissions: 60  },
            { id: 32, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Berlin BioEnergy',         emissions: 85  },
            { id: 33, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Bavarian Metals AG',       emissions: 130 },
            { id: 34, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Rhine Petrochem',          emissions: 200 },
            { id: 35, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Black Forest Biomass',     emissions: 50  },
            { id: 36, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Baltic Wind Works',        emissions: 40  },
            { id: 37, country: { de: 'Deutschland',       en: 'Germany'        }, company: 'Saxon Steelworks',         emissions: 220 },
            { id: 38, country: { de: 'USA',               en: 'USA'            }, company: 'Midwest Refining',         emissions: 390 },
            { id: 39, country: { de: 'USA',               en: 'USA'            }, company: 'Gulf Chemicals',           emissions: 280 },
            { id: 40, country: { de: 'USA',               en: 'USA'            }, company: 'Rocky Mountain Mining',    emissions: 150 },
            { id: 41, country: { de: 'USA',               en: 'USA'            }, company: 'Silicon Valley Power',     emissions: 90  },
            { id: 42, country: { de: 'USA',               en: 'USA'            }, company: 'New England Biofuels',     emissions: 70  },
            { id: 43, country: { de: 'USA',               en: 'USA'            }, company: 'Atlantic Offshore Drilling', emissions: 350 },
            { id: 44, country: { de: 'USA',               en: 'USA'            }, company: 'Desert Sun Solar',         emissions: 60  },
            { id: 45, country: { de: 'China',             en: 'China'          }, company: 'Jade River Coal',          emissions: 500 },
            { id: 46, country: { de: 'China',             en: 'China'          }, company: 'Great Wall Cement',        emissions: 420 },
            { id: 47, country: { de: 'China',             en: 'China'          }, company: 'Pearl Delta Electronics',  emissions: 110 },
            { id: 48, country: { de: 'China',             en: 'China'          }, company: 'Silk Road Gas',            emissions: 310 },
            { id: 49, country: { de: 'China',             en: 'China'          }, company: 'Golden Dragon Renewables', emissions: 90  },
            { id: 50, country: { de: 'Frankreich',        en: 'France'         }, company: 'Provence Petro',           emissions: 140 },
            { id: 51, country: { de: 'Frankreich',        en: 'France'         }, company: 'Loire Hydro',              emissions: 55  },
            { id: 52, country: { de: 'Frankreich',        en: 'France'         }, company: 'Parisian Plastics',        emissions: 120 },
            { id: 53, country: { de: 'Frankreich',        en: 'France'         }, company: 'Armor Steel',              emissions: 165 },
            { id: 54, country: { de: 'Indien',            en: 'India'          }, company: 'Deccan Minerals',          emissions: 240 },
            { id: 55, country: { de: 'Indien',            en: 'India'          }, company: 'Varanasi Chemicals',       emissions: 180 },
            { id: 56, country: { de: 'Indien',            en: 'India'          }, company: 'Tiger Renewable Power',    emissions: 95  },
            { id: 57, country: { de: 'Indien',            en: 'India'          }, company: 'Himalaya Hydro',           emissions: 70  },
            { id: 58, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Pantanal Gas',             emissions: 130 },
            { id: 59, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Samba Steel',              emissions: 210 },
            { id: 60, country: { de: 'Brasilien',         en: 'Brazil'         }, company: 'Cerrado Bioenergy',        emissions: 75  },
            { id: 61, country: { de: 'Australien',        en: 'Australia'      }, company: 'Tasmania Minerals',        emissions: 95  },
            { id: 62, country: { de: 'Australien',        en: 'Australia'      }, company: 'Coral Sea Oil',            emissions: 260 },
            { id: 63, country: { de: 'Australien',        en: 'Australia'      }, company: 'Dingo Solar Farms',        emissions: 50  },
            { id: 64, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Yukon Mining',             emissions: 140 },
            { id: 65, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Prairie Petro',            emissions: 190 },
            { id: 66, country: { de: 'Kanada',            en: 'Canada'         }, company: 'Atlantic Tidal Energy',    emissions: 60  },
            { id: 67, country: { de: 'Russland',          en: 'Russia'         }, company: 'Ural Metals',              emissions: 330 },
            { id: 68, country: { de: 'Russland',          en: 'Russia'         }, company: 'Caspian Gas Export',       emissions: 410 },
            { id: 69, country: { de: 'Russland',          en: 'Russia'         }, company: 'Tundra Renewables',        emissions: 90  },
            { id: 70, country: { de: 'Japan',             en: 'Japan'          }, company: 'Fuji Energy Systems',      emissions: 120 },
            { id: 71, country: { de: 'Japan',             en: 'Japan'          }, company: 'Shogun Steel',             emissions: 160 },
            { id: 72, country: { de: 'Großbritannien',    en: 'United Kingdom' }, company: 'Highland Oil Ltd',         emissions: 300 },
            { id: 73, country: { de: 'Großbritannien',    en: 'United Kingdom' }, company: 'Thames Renewables',        emissions: 80  },
            { id: 74, country: { de: 'Großbritannien',    en: 'United Kingdom' }, company: 'Britannia Steel',          emissions: 210 },
            { id: 75, country: { de: 'Großbritannien',    en: 'United Kingdom' }, company: 'Manchester Chemicals',     emissions: 140 },
            { id: 76, country: { de: 'Großbritannien',    en: 'United Kingdom' }, company: 'Celtic Wind Power',        emissions: 65  },
            { id: 77, country: { de: 'Italien',           en: 'Italy'          }, company: 'Alpine Gas Italia',        emissions: 180 },
            { id: 78, country: { de: 'Italien',           en: 'Italy'          }, company: 'Vesuvio Petrochem',        emissions: 220 },
            { id: 79, country: { de: 'Italien',           en: 'Italy'          }, company: 'Sicilian Solar',           emissions: 70  },
            { id: 80, country: { de: 'Italien',           en: 'Italy'          }, company: 'Roma Metallurgy',          emissions: 150 },
            { id: 81, country: { de: 'Italien',           en: 'Italy'          }, company: 'Adriatic Biofuels',        emissions: 90  },
            { id: 82, country: { de: 'Spanien',           en: 'Spain'          }, company: 'Iberia Mining',            emissions: 200 },
            { id: 83, country: { de: 'Spanien',           en: 'Spain'          }, company: 'Catalan Chemicals',        emissions: 130 },
            { id: 84, country: { de: 'Spanien',           en: 'Spain'          }, company: 'Andalusia Solar',          emissions: 60  },
            { id: 85, country: { de: 'Spanien',           en: 'Spain'          }, company: 'Basque Steelworks',        emissions: 170 },
            { id: 86, country: { de: 'Südkorea',          en: 'South Korea'    }, company: 'Han River Petro',          emissions: 190 },
            { id: 87, country: { de: 'Südkorea',          en: 'South Korea'    }, company: 'Seoul Electronics Power',  emissions: 80  },
            { id: 88, country: { de: 'Südkorea',          en: 'South Korea'    }, company: 'K-Power Renewables',       emissions: 55  },
            { id: 89, country: { de: 'Mexiko',            en: 'Mexico'         }, company: 'Aztec Oil Ltd',            emissions: 210 },
            { id: 90, country: { de: 'Mexiko',            en: 'Mexico'         }, company: 'Maya Green Energy',        emissions: 70  },
            { id: 91, country: { de: 'Südafrika',         en: 'South Africa'   }, company: 'Kalahari Minerals',        emissions: 250 },
            { id: 92, country: { de: 'Südafrika',         en: 'South Africa'   }, company: 'Cape Wind Farms',          emissions: 85  },
            { id: 93, country: { de: 'Saudi-Arabien',     en: 'Saudi Arabia'   }, company: 'Desert Oil Co',            emissions: 600 },
            { id: 94, country: { de: 'Saudi-Arabien',     en: 'Saudi Arabia'   }, company: 'Red Sea Renewables',       emissions: 90  },
            { id: 95, country: { de: 'Norwegen',          en: 'Norway'         }, company: 'Viking Hydro',             emissions: 40  },
            { id: 96, country: { de: 'Norwegen',          en: 'Norway'         }, company: 'Fjord Gas SA',             emissions: 180 },
            { id: 97, country: { de: 'Schweden',          en: 'Sweden'         }, company: 'Nordic Steel AB',          emissions: 120 },
            { id: 98, country: { de: 'Schweden',          en: 'Sweden'         }, company: 'Aurora Bioenergy',         emissions: 65  },
            { id: 99, country: { de: 'Niederlande',       en: 'Netherlands'    }, company: 'Delta Gas BV',             emissions: 200 },
            { id: 100,country: { de: 'Niederlande',       en: 'Netherlands'    }, company: 'Tulip Wind Energy',        emissions: 55  },
        ],

        // Alpine init hook
        init() {
            this.calculateCO2();
        },

        // Calculate CO₂ consumption based on transferred bytes
        calculateCO2() {
            let totalBytes = 0;
            const navEntry = performance.getEntriesByType('navigation')[0];
            if (navEntry) {
                totalBytes += navEntry.transferSize || navEntry.encodedBodySize || 0;
            }
            performance.getEntriesByType('resource').forEach(r => {
                totalBytes += r.transferSize || r.encodedBodySize || 0;
            });
            this.co2Emission = (totalBytes * 0.00000071).toFixed(2);
        },

        // Switch language
        setLang(l) { this.lang = l; },

        // Translation helper
        l(de, en) { return this.lang === 'de' ? de : en; },

        // Form input sanitization on submit
        sanitizeForm(event) {
            const fields = ['name', 'email', 'message'];
            const blacklist = /[<>{}();:\"'`]/g;
            let safe = true;
            fields.forEach(id => {
                const el = event.target.querySelector('#' + id);
                if (el && blacklist.test(el.value)) {
                    el.value = el.value.replace(blacklist, '');
                    safe = false;
                }
            });
            if (safe) {
                event.target.submit();
                alert('Vielen Dank für Ihre Nachricht!');
            } else {
                alert('Unerlaubte Zeichen wurden entfernt. Bitte überprüfen Sie Ihre Eingabe.');
            }
        },

        // Sorting logic
        sort(key) {
            if (this.sortKey === key) this.sortAsc = !this.sortAsc;
            else { this.sortKey = key; this.sortAsc = true; }
        },

        // Computed: filtered & sorted rows
        get filteredRows() {
            const cf = this.countryFilter.toLowerCase();
            const pf = this.companyFilter.toLowerCase();
            const locale = this.lang === 'de' ? 'de' : 'en';
            return this.rows
                .filter(r => r.country[this.lang].toLowerCase().includes(cf) && r.company.toLowerCase().includes(pf))
                .sort((a, b) => {
                    let res;
                    if (this.sortKey === 'emissions') res = a.emissions - b.emissions;
                    else if (this.sortKey === 'country') res = a.country[this.lang].localeCompare(b.country[this.lang], locale);
                    else res = a.company.localeCompare(b.company, locale);
                    return this.sortAsc ? res : -res;
                });
        }
    };
}

// Alpine initialization
document.addEventListener('alpine:init', () => {
    Alpine.data('co2Table', co2Table);
});
