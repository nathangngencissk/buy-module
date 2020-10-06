const axios = require('axios')
const Document = require('../models/Document')
const Order = require('../models/Order')

module.exports = () => {
    const controller = {};

    const urlStockSystem = 'http://stock-server:9000'

    controller.buy = async (req, res) => {
        let response = await axios.get(`${urlStockSystem}/api/supplier/`)

        let suppliers = response.data;

        let suppliersWithProduct = suppliers.filter(supplier => {
            return supplier.products.includes(req.body.product);
        });

        const today = new Date();

        let suppliersPayload = suppliersWithProduct.map(supplier => {
            let deliveredBy = new Date(today);
            deliveredBy.setDate(deliveredBy.getDate() + Math.floor(Math.random() * 10));

            let paymentBy = new Date(today);
            paymentBy.setDate(paymentBy.getDate() + Math.floor(Math.random() * 10));

            return {
                supplier: supplier._id,
                value: Math.floor(Math.random() * 100),
                unitaryValue: Math.floor(Math.random() * 15),
                deliveredBy: deliveredBy,
                paymentBy: paymentBy,
            }
        });

        let payload = {
            shop: req.params.id,
            product: req.body.product,
            warehouse: req.body.warehouse,
            suppliers: suppliersPayload
        }

        req.session.pricingPayload = payload;
        res.redirect(307, `/api/shop/${req.params.id}/pricing`);
    }

    controller.pricing = async (req, res) => {
        const bestOffer = req.session.pricingPayload.suppliers.reduce(function (prev, current) {
            return (prev.value > current.value) ? prev : current
        });

        let offer = {
            "shop": "5f750f9d6b26310012eaea14",
            "product": "5f77aae8b7c512002e0f1cf6",
            "warehouse": "5f77ac24b7c512002e0f1cf9",
            "supplier": bestOffer.supplier,
            "value": bestOffer.value,
            "unitaryValue": bestOffer.unitaryValue,
            "deliveredBy": bestOffer.deliveredBy,
            "paymentBy": bestOffer.paymentBy
        }

        // create doc
        const newDocument = {
            type: 'ORDEM_DE_FORNECIMENTO',
            description: `To be delivered by ${offer.deliveredBy}, payment by ${offer.paymentBy}`,
            value: offer.value,
            quantity: offer.value / offer.unitaryValue
        };

        let savedDocument = await axios.post(`${urlStockSystem}/api/document/add`, newDocument);

        let document = savedDocument.data;

        // create order
        const newOrder = {
            product: offer.product,
            supplier: offer.supplier,
            shop: offer.shop,
            warehouse: offer.warehouse,
            document: document._id
        };

        let saveOrder = await axios.post(`${urlStockSystem}/api/order/add`, newOrder);

        let order = saveOrder.data;

        res.json(order);
    }

    controller.receivement = async (req, res) => {
        let supplyOrder = await axios.get(`${urlStockSystem}/api/order/get/${req.body.supplyOrder}`);
        let supplyOrderDocument = await axios.get(`${urlStockSystem}/api/document/get/${supplyOrder.data.document}`);

        let payload = {
            "type": "NOTA_FISCAL_ENTRADA",
            "shop": supplyOrder.data.shop,
            "warehouse": supplyOrder.data.warehouse,
            "product": supplyOrder.data.product,
            "supplier": supplyOrder.data.supplier,
            "value": supplyOrderDocument.data.value,
            "quantity": supplyOrderDocument.data.quantity
        }

        let createdMovement = await axios.post(`${urlStockSystem}/api/warehouse/create_movement`, payload);
        let receivement = createdMovement.data;

        res.json(receivement)
    }

    return controller;
}