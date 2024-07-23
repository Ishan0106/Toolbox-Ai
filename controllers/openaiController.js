/*
const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};
*/
const dotenv = require('dotenv');
const OpenAI = require('openai');
const { Configuration } = require('openai');

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Update the model name as per the new API
            messages: [{ role: "user", content: `Summarize this: ${text}` }],
            max_tokens: 500,
            temperature: 0.5,
        });

        const { choices } = response;
        if (choices && choices[0].message) {
            return res.status(200).json(choices[0].message.content);
        }

        return res.status(200).json('No summary available.');
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};
