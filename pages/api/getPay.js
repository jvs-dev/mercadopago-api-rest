const mercadopago = require('mercadopago');
const { MercadoPagoConfig, Payment } = mercadopago;

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-933353184123194-022913-573fb9b31b016d13f1d256518dc2c234-1694314657' });
const payment = new Payment(client);

const init = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
        return;
    }
    try {
        let result = await payment.get({
            id: `${req.body.payId}`,
        });
        res.json({ result });
    } catch (error) {
        res.json({ error });
    }
};

export default init;