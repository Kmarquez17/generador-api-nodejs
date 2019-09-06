const data = {
  nombre: "Lorem Input",
  email: "loreminput@gmail.com"
};

export default {
  prueba: async (req, res) => {
    res.status(200).json(data);
  }
};
