const Potion = require("../models/potion.model");

/**
 * It's an asynchronous function that uses the await keyword to wait for the result of the find()
 * method on the Product model.
 *
 * The find() method returns a promise, which is why we can use the await keyword.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getPotions = async (req, res) => {
  try {
    const potions = await Potion.find();
    res.status(200).json(potions);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It's an asynchronous function that uses the Potion model to find a potion by its id, and then
 * sends a response with the product's data.
 * @param req - The request object.
 * @param res - The response object.
 */
const getPotion = async (req, res) => {
  try {
    const potion = await Potion.findById(req.params.id);
    console.log(potion)
    if(!potion) return res.status(404).send([]);
    res.status(200).json(potion);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It creates a new potion using the data from the request body and returns the created potion in the
 * response.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const createPotion = async (req, res) => {
  try {
    const potion = await Potion.create(req.body);
    res.status(201).json(potion);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

/**
 * It takes the id of the potion to be updated from the request params, and the updated potion data
 * from the request body, and then updates the potion in the database with the new data, and returns
 * the updated potion to the client.
 * @param req - The request object.
 * @param res - The response object.
 */
const updatePotion = async (req, res) => {
  try {
    const potion = await Potion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(potion);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It finds a potion by its id and deletes it.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const deletePotion = async (req, res) => {
  try {
    const potion = await Potion.findByIdAndDelete(req.params.id);
    res.status(200).json({msg: `Potion ${potion.name} deleted`,potion});
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getPotions,
  getPotion,
  createPotion,
  updatePotion,
  deletePotion,
};