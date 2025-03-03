const Client = require("../models/client.model").model;

const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const getAllClients = async (req, res) => {
  try {
    // Récupérer tous les clients de la base de données
    const clients = await Client.find();
    // Vérifier si des clients ont été trouvés
    if (clients.length > 0) {
      return res.status(200).json(clients);
    } else {
      return res.status(404).json({
        message: "Aucun client trouvé",
      });
    }
  } catch (error) {
    // renvoi  une erreur
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const searchClient = async (req, res) => {
  try {
    const searchKey = req.query.searchkey;

    if (!searchKey || searchKey.trim() === "") {
      return res.status(200).json({ clients: [] });
    }
    const regex = new RegExp(`^${searchKey}`, "i");

    const searchedClient = await Client.find({
      $or: [
        { firstName: regex },
        { lastName: regex },
        { email: searchKey },
        { phone: searchKey },
      ],
    });
    res.status(200).json({ clients: searchedClient });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

module.exports.createClient = createClient;
module.exports.getAllClients = getAllClients;
module.exports.searchClient = searchClient;
