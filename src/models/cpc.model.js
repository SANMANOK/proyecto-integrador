const { Schema, model } = require('mongoose')
const cpcSchema = new Schema(
    {
        cpcNumber: { type: Number },
        cpcName: { type: String },
        coordinates: {
            lat: { type: Number },
            lon: { type: Number }
        },
        dependencies: {
            alumbrado: { type: Boolean },
            transito: { type: Boolean },
            salud: { type: Boolean },
            rentas: { type: Boolean }
        }
    });
const Cpc = new model('Cpc', cpcSchema);
module.exports = Cpc;