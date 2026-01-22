const axios = require("axios");

exports.searchBooks = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Query is required" });
    }

    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${q}`
    );

    res.status(200).json(response.data.docs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch books"
    });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(
      `https://openlibrary.org/works/${id}.json`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch book details"
    });
  }
};
