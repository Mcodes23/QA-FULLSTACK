import fs from "fs/promises";
import path from "path";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  publisher: string;
  description: string;
  image: string;
  price: number;
}

interface Library {
  library: Book[];
}

// Function to fetch and filter books
export async function getBooksByGenre(genre?: string): Promise<Book[]> {
  try {
    const filePath = path.join(__dirname, "eventsData.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data: Library = JSON.parse(jsonData);

    if (!genre || genre.toLowerCase() === "all") {
      return data.library || []; // Return all books if no filter is applied
    }

    return data.library.filter(
      (book) => book.genre.toLowerCase() === genre.toLowerCase()
    );
  } catch (error) {
    console.error("Error reading books data:", error);
    return [];
  }
}
