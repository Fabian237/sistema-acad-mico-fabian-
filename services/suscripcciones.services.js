const Suscripcciones = require("../models/suscripcciones").Suscripcciones;

class SuscripccionesService {
  static async getSuscripcciones(params) {
    return await Suscripcciones.findAll(params);
  }

  static async getSuscripcciones(id) {
    return await Suscripcciones.findOne({ where: { id } });
  }

  static async createSuscripcciones(Suscripccion) {
    return await Suscripccion.create({
      tipo_suscripccion: Suscripccion.tipo_suscripccion,
      fecha_inicio: Suscripccion.fecha_inicio,
      fecha_fin: Suscripccion.fecha_fin,
      beneficios: Suscripccion.beneficios,
    });
  }

  static async updateSuscripcciones(suscripccion) {
    const instance = await this.getSuscripcciones(suscripccion.id);

    if (!instance) return null;

    return instance.update({
      tipo_suscripccion: Suscripccion.tipo_suscripccion,
      fecha_inicio: Suscripccion.fecha_inicio,
      fecha_fin: Suscripccion.fecha_fin,
      beneficios: Suscripccion.beneficios,
    });
  }

  static async deleteSuscripcciones(id) {
    const instance = await this.getSuscripcciones(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = SuscripccionesService;