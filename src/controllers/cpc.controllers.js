const config = require('config');
const axios = require('axios').default;
const Cpc = require('../models/cpc.model');
const cpc = require('../models/cpc.model');
const { saveCpc, deleteCpc } = require('../services/cpc.services');




async function getAllCpcs(req, res) {
    const cpcs = await Cpc.find({})
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })

};

async function getCpcById(req, res) {
    const { id } = req.params;
    const cpc = await Cpc.findById(id)
    .then(data => {
        res.json(data);
    }).catch((err) => {
        res.status(400);
        console.error(err);
        res.json(err);
    })
};

/*id ej. getCpcById 62ed75781960fbcbb9697964 */


async function addCpc(req, res) {
    try {
        const data = req.body;
        await saveCpc(data);
        res.json({
            msj: `Hemos guardado con exito los datos del CPC`,
            data: data
        });
    } catch (err) {
        res.status(400);
        console.error(err);
        res.json(err);
    }
};
/* JSON ej para funcion addCpc
{
    "cpcNumber": 5,
    "cpcName": "Rancangua",
    "coordinates": {
        "lat": -31.4214,
        "lon": -64.239314
    },
    "dependencies": {
       "alumbrado": true,
        "transito": false,
        "salud": true,
        "rentas": true
    }
}
*/

async function deleteCpcById(req, res) {
   try{
    const{id} = req.params;
    const result = await deleteCpc(id);
    res.json({ msj:'Hemos eliminado el CPC del registro'})
   } catch (err) {
        res.status(400);
        res.json(err);
   }
};


async function updateCpcById(req, res) {
    const { id } = req.params;
    const data = req.body;
    await Cpc.findById(id)
        .then(data => {
            Cpc.cpcNumber = data.cpcNumber;
            Cpc.cpcName = data.cpcName;
            Cpc.coordinates = data.coordinates;
            Cpc.dependencies = data.dependencies;
            Cpc.save();
            res.json({
                opetation: 'Edit info CPC',
                msj: 'Ok',
                data: cpc,
            })
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        });
};

module.exports = { getAllCpcs, getCpcById, addCpc, deleteCpcById, updateCpcById };
