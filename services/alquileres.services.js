const alquiler = require("../models/alquileres").Alquileres;

class alquilerService {
  static async getAlquileres(params) {
    return await alquiler.findAll(params);
  }

  static async getAlquileres(id) {
    return await alquiler.findOne({ where: { id } });
  }

  static async createAlquiler(alquiler) {
    return await alquiler.create({
      id: alquiler.id,
      nombre: alquiler.nombre,
    });
  }

  static async updateAlquiler(alquiler) {
    const instance = await this.getAlquileres(alquiler.id);

    if (!instance) return null;

    return instance.update({
      id: alquiler.id,
      nombre: alquiler.nombre,
    });
  }

  static async deleteAlquiler(id) {
    const instance = await this.getAlquileres(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = alquilerService;
