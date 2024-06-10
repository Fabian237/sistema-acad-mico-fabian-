const Usuario = require('../models/usuarios'); // Ajusta la ruta según sea necesario

class UsuarioService {
  static async getUsuarios(params) {
    try {
      return await Usuario.getUsuarios(params);
    } catch (error) {
      console.error('Error en getUsuarios emitido:', error);
      throw new Error('Error al obtener usuarios');
    }
  }

  static async getUsuario(id) {
    try {
      return await Usuario.findByPk(id);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      throw new Error('Error al obtener usuario');
    }
  }

  static async createUsuario(usuarioData) {
    try {
      return await Usuario.createUsuario(usuarioData);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw new Error('Error al crear usuario en la base de datos');
    }
  }

  static async updateUsuario(usuarioData) {
    try {
      const usuario = await Usuario.findByPk(usuarioData.id);

      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }

      await usuario.update(usuarioData);
      return usuario;
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw new Error('Error al actualizar usuario');
    }
  }

  static async deleteUsuario(id) {
    try {
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }

      await usuario.destroy();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw new Error('Error al eliminar usuario');
    }
  }
}

module.exports = UsuarioService;
