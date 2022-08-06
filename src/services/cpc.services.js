const Cpc = require('../models/cpc.model');


async function saveCpc(data){
    const cpc = new Cpc(data);
    return cpc.save();
}

async function deleteCpc(id){
    const result = await Cpc.deleteOne({_id: id});
    return result;
}


module.exports = { saveCpc, deleteCpc };
