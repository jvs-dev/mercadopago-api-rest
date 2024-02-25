const mercadopago = require('mercadopago')
const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-5990066382783014-022306-c894d2cfa86047cac4dbd4b4efdcb2ef-1694314657' });
const payment = new mercadopago.Payment(client);

function tempo(req, res) {
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
    createpay()
        .then(result => {
            res.json({
                result
            })
        })
}

export default tempo;