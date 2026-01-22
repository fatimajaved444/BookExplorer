const router = require("express").Router();
const {
  searchBooks,
  getBookDetails
} = require("../controllers/books.controller");

router.get("/search", searchBooks);
router.get("/:id", getBookDetails);

module.exports = router;
