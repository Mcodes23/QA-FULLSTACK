import express from "express";
import { getBooksByGenre } from "../db/events"; // Assuming this fetches books from the database

const router = express.Router();

// Route to get books, with optional genre & search filter
router.get("/books", async (req, res) => {
  const genre = (req.query.genre as string) || "all";
  const searchQuery = (req.query.search as string) || "";

  try {
    let books = await getBooksByGenre(genre);

    if (searchQuery) {
      const cleanedSearch = searchQuery.toLowerCase().trim().replace(/[^0-9a-z]/gi, "");
      books = books.filter((book) =>
        book.title.toLowerCase().replace(/[^0-9a-z]/gi, "").includes(cleanedSearch)
      );
    }

    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

export default router;
