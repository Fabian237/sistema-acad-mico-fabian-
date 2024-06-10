const { Monitoreo_bicicleta } = require("../models/monitoreo_bicicleta");

class Monitoreo_bicicletaService {
  static async getMonitoreo_bicicleta(params) {
    return await Monitoreo_bicicleta.findAll(params);
  }

  static async getMonitoreo_bicicleta(id) {
    return await Monitoreo_bicicleta.findByPk(id);
  }

  static async createMonitoreo_bicicleta(Monitoreo_bicicletaData) {
    return await Monitoreo_bicicleta.create(Monitoreo_bicicletaData);
  }

  static async updateMonitoreo_bicicleta(Monitoreo_bicicletaData) {
    const Monitoreo_bicicleta = await Monitoreo_bicicleta.findByPk(Monitoreo_bicicletaData.id);

    if (!Monitoreo_bicicleta) {
      throw new Error("bicicleta not found");
    }

    await Monitoreo_bicicleta.update(Monitoreo_bicicletaData);
    return Monitoreo_bicicleta;
  }

  static async deleteMonitoreo_bicicleta(id) {
    const Monitoreo_bicicleta = await Monitoreo_bicicleta.findByPk(id);

    if (!Monitoreo_bicicleta) {
      throw new Error("Bicicleta not found");
    }

    await Monitoreo_bicicleta.destroy();
  }
}

module.exports = Monitoreo_bicicletaService;
