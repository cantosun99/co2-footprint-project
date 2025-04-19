/**
 * Alpine‑Komponente für Filter, Sortierung, Sprachwahl und mehrsprachige Länder
 */
function co2Table() {
    return {
        /* Sprache (de/en) */
        lang: 'de',

        /* Filterzustand */
        countryFilter: '',
        companyFilter: '',

        /* Sortierzustand */
        sortKey: 'emissions',
        sortAsc: false,

        /* Datensätze mit zweisprachigen Ländern */
        rows: [
            { id:  1, country: { de:'Deutschland', en:'Germany' },  company:'Energiewerke AG',     emissions:120 },
            { id:  2, country: { de:'Deutschland', en:'Germany' },  company:'Ruhr Kohle GmbH',     emissions:210 },
            { id:  3, country: { de:'Deutschland', en:'Germany' },  company:'Hanse Renewables',    emissions: 75 },

            { id:  4, country: { de:'USA',         en:'USA' },      company:'Global Oil Corp',     emissions:450 },
            { id:  5, country: { de:'USA',         en:'USA' },      company:'Liberty Coal Inc',    emissions:320 },
            { id:  6, country: { de:'USA',         en:'USA' },      company:'Pacific Renewables',  emissions:110 },

            { id:  7, country: { de:'China',       en:'China' },    company:'Dragon Steel Ltd',    emissions:800 },
            { id:  8, country: { de:'China',       en:'China' },    company:'Red Giant Power',     emissions:650 },
            { id:  9, country: { de:'China',       en:'China' },    company:'Eastern Petrochem',   emissions:540 },

            { id: 10, country: { de:'Frankreich',  en:'France' },   company:'Hexagon Chemicals',   emissions: 95 },
            { id: 11, country: { de:'Frankreich',  en:'France' },   company:'Bleu Energie',        emissions:130 },
            { id: 12, country: { de:'Frankreich',  en:'France' },   company:'Gallic Metals',       emissions: 85 },

            { id: 13, country: { de:'Indien',      en:'India' },    company:'Bharat Power',        emissions:300 },
            { id: 14, country: { de:'Indien',      en:'India' },    company:'Ganga Steel',         emissions:260 },
            { id: 15, country: { de:'Indien',      en:'India' },    company:'Lotus Energies',      emissions:140 },

            { id: 16, country: { de:'Brasilien',   en:'Brazil' },   company:'Amazon Biofuels',     emissions: 60 },
            { id: 17, country: { de:'Brasilien',   en:'Brazil' },   company:'Rio Mining Co',       emissions:180 },
            { id: 18, country: { de:'Brasilien',   en:'Brazil' },   company:'Verde Química',       emissions: 90 },

            { id: 19, country: { de:'Australien',  en:'Australia' },company:'Outback Mining',      emissions:150 },
            { id: 20, country: { de:'Australien',  en:'Australia' },company:'Southern Gas',        emissions:210 },
            { id: 21, country: { de:'Australien',  en:'Australia' },company:'Koala Renewables',    emissions: 70 },

            { id: 22, country: { de:'Kanada',      en:'Canada' },   company:'Maple Gas Inc',       emissions:110 },
            { id: 23, country: { de:'Kanada',      en:'Canada' },   company:'Northern Oil Sands',  emissions:240 },
            { id: 24, country: { de:'Kanada',      en:'Canada' },   company:'Polar Hydro',         emissions: 65 },

            { id: 25, country: { de:'Russland',    en:'Russia' },   company:'Siberia Energy',      emissions:500 },
            { id: 26, country: { de:'Russland',    en:'Russia' },   company:'Volga Oil Co',        emissions:370 },
            { id: 27, country: { de:'Russland',    en:'Russia' },   company:'Arctic Mining',       emissions:220 },

            { id: 28, country: { de:'Japan',       en:'Japan' },    company:'Sunrise Electronics', emissions: 70 },
            { id: 29, country: { de:'Japan',       en:'Japan' },    company:'Nippon Petro',        emissions:180 },
            { id: 30, country: { de:'Japan',       en:'Japan' },    company:'Sakura Power',        emissions: 95 },
        ],

        /* Sprachauswahl */
        setLang(l) { this.lang = l; },
        /* UI-Text-Helfer */
        l(de, en) { return this.lang === 'de' ? de : en; },

        /* Eingabereinigung */
        sanitize(field) {
            this[field] = this[field].replace(/[<>\/\\{}\[\];:'"`]/g, '');
        },

        /* Sortierfunktion */
        sort(key) {
            if (this.sortKey === key) {
                this.sortAsc = !this.sortAsc;
            } else {
                this.sortKey = key;
                this.sortAsc = true;
            }
        },

        /* Gefilterte und sortierte Zeilen */
        get filteredRows() {
            const cf = this.countryFilter.toLowerCase();
            const pf = this.companyFilter.toLowerCase();
            const locale = this.lang === 'de' ? 'de' : 'en';

            return this.rows
                .filter(r =>
                    r.country[this.lang].toLowerCase().includes(cf) &&
                    r.company.toLowerCase().includes(pf)
                )
                .sort((a, b) => {
                    let res;
                    if (this.sortKey === 'emissions') {
                        res = a.emissions - b.emissions;
                    } else if (this.sortKey === 'country') {
                        res = a.country[this.lang].localeCompare(b.country[this.lang], locale);
                    } else { // company
                        res = a.company.localeCompare(b.company, locale);
                    }
                    return this.sortAsc ? res : -res;
                });
        }
    };
}
