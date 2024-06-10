const bicicleta = require("../models/bicicleta").bicicleta;

class bicicletaService {
  static async getBicicletas(params) {
    return await bicicleta.findAll(params);
  }

  static async getBicicletas(id) {
    return await bicicleta.findOne({ where: { id } });
  }

  static async createBicicleta(bicicleta) {
    return await bicicleta.create({
      id: bicicleta.id,
      codigo: bicicleta.codigo,
      estado: bicicleta.estado,
      latitud: bicicleta.latitud,
      longitud: bicicleta.longitud,
      informacion_tecnica: bicicleta.informacion_tecnica,
    });
  }

  static async updateBicicleta(bicicleta) {
    const instance = await this.getBicicletas(bicicleta.id);

    if (!instance) return null;

    return instance.update({
      id: bicicleta.id,
      codigo: bicicleta.codigo,
      estado: bicicleta.estado,
      latitud: bicicleta.latitud,
      longitud: bicicleta.longitud,
      informacion_tecnica: bicicleta.informacion_tecnica,
    });
  }

  static async deleteBicicleta(id) {
    const instance = await this.getBicicletas(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = bicicletaService;
