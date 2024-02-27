const mercadopago = require('mercadopago');
const { MercadoPagoConfig, Payment } = mercadopago;

const client = new MercadoPagoConfig({ accessToken: 'TEST-5990066382783014-022306-c894d2cfa86047cac4dbd4b4efdcb2ef-1694314657' });
const payment = new Payment(client);

async function createpay() {
    try {
        const result = await payment.create({
            body: {
                transaction_amount: 12.34,
                description: '<DESCRIPTION>',
                payment_method_id: 'pix',
                payer: {
                    email: '<EMAIL>'
                },
            }
        });
        return result;
    } catch (error) {
        return error;
    }
}

const init = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitações de qualquer origem

    if (req.method === 'OPTIONS') {
        // Permitir métodos e cabeçalhos personalizados
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
        return;
    }

    const result = await createpay();
    res.json({ result });
};

export default init;