const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.APIKEY,
});
const openai = new OpenAIApi(configuration);

// @desc openAI TEXT
// @Route POST /text
// @Access Public
const openAIText = async (req, res) => {
  const { prompt, model } = req.body;
  try {
    // code-davinci-002
    // text-davinci-003
    const result = await openai.createCompletion({
      model,
      prompt,
      temperature: 0,
      max_tokens: 100,
    });
    return res.json({ result: result.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return res
        .status(error.response.status)
        .json({ error: error.response.data });
    } else {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  }
};
// @desc openAI IMAGE
// @Route POST /image
// @Access Public
const openAIImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });
    return res.json({ result: result.data.data[0].url });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return res
        .status(error.response.status)
        .json({ error: error.response.data });
    } else {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { openAIText, openAIImage };
