const reviewCode = require('../services/ai.service');

async function aiResponse(req, res) {
    const prompt = req.body.code;
    if (!prompt) {
        return res.status(400).send("Prompt is not provided");
    }
    const result = await reviewCode(prompt);
    res.send(result);
}

module.exports = aiResponse