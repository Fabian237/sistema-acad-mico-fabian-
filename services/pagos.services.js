const { Pago } = require("../models");

class PagoService {
  static async getPagos(params) {
    return await Pago.findAll(params);
  }

  static async getPagos(id) {
    return await Pago.findByPk(id);
  }

  static async createPago(PagoData) {
    return await Pago.create(PagoData);
  }

  static async updateMateria(materiaData) {
    const Pago = await Pago.findByPk(PagoData.id);

    if (!Pago) {
      throw new Error("Pago not found");
    }

    await Pago.update(PagoData);
    return Pago;
  }

  static async deletePago(id) {
    const Pago = await Pago.findByPk(id);

    if (!Pago) {
      throw new Error("Pago not found");
    }

    await Pago.destroy();
  }
}

module.exports = PagoService;
