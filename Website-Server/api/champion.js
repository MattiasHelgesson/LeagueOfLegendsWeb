/* const express = require("express");
const Champion = require('../models/Champion')

const championRouter = express.Router();

championRouter.delete("/:id", (req, res) => {
    Champion.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200).json({ Message: "Removed champion", Id: req.params.id });
    });
});

championRouter.post("/", (req, res) => {
    console.log(req.body);
    champion = new Champion({
        role: req.body.role,
        name: req.body.name,
        picture: req.body.picture,
    });

    champion.save().then((result) => {
        res.status(201).json(result);
    });
});

championRouter.get("/", async (req, res) => {
    try {
        const champions = await Champion.find();
        res.status(200).json(champions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = championRouter; */

const express = require("express");
const Champion = require('../models/Champion');
const Image = require('../models/Image');

const championRouter = express.Router();

championRouter.delete("/:id", async (req, res) => {
    try {
        await Champion.deleteOne({ _id: req.params.id });
        res.status(200).json({ Message: "Removed champion", Id: req.params.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

championRouter.post("/", async (req, res) => {
    try {
        const champion = new Champion({
            role: req.body.role,
            name: req.body.name,
            picture: req.body.picture,
        });

        const savedChampion = await champion.save();

        // Assuming req.body.picture contains the fileId of the associated image
        const image = await Image.findOne({ _id: req.body.picture });

        res.status(201).json({ champion: savedChampion, image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

championRouter.get("/", async (req, res) => {
    try {
        const champions = await Champion.find(); 
        res.status(200).json(champions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = championRouter;
