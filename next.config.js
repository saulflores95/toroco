module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/quienes-somos": { page: "/quienes-somos", query: { title: "Quienes Somos" } },
      "/servicios": { page: "/servicios", query: { title: "Nuestro Servicio" } },
      "/contacto": { page: "/contacto" }
    }
  },
}
