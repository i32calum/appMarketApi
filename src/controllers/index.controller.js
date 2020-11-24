const ForexPrices = require('../model/ForexPrice');
const database = require('../database');

const getMaxTimeStampByType = async (req, res) => {
    const response = await ForexPrices.find({type: 'OANDA:EUR_USD'}).sort({date: -1}).limit(1);
    res.send(response);
};

module.exports = {
    getMaxTimeStampByType
}