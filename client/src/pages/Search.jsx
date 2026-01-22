import { useEffect, useState } from "react";
import { searchBooks } from "../api/book";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length > 2) {
      searchBooks(query)
        .then((res) => {
          setBooks(res.data);
          setError("");
        })
        .catch(() => setError("Failed to load books"));
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6fa",
        padding: "30px"
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto"
        }}
      >
     
        <h1 style={{ textAlign: "center", marginBottom: "5px" }}>
           Book Explorer
        </h1>
        <p style={{ textAlign: "center", opacity: 0.6 }}>
          Find your next favorite book
        </p>

        <input
          placeholder="Search book or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px"
          }}
        />

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}

        <div style={{ marginTop: "25px" }}>
          {books.map((book) => (
            <Link
              key={book.key}
              to={`/book/${book.key.replace("/works/", "")}`}
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  cursor: "pointer"
                }}
              >
             
                <img
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "https://via.placeholder.com/80x120?text=No+Cover"
                  }
                  alt={book.title}
                  width="80"
                  height="120"
                  style={{ borderRadius: "6px" }}
                />

                <div>
                  <h3 style={{ margin: "0 0 5px 0" }}>
                    {book.title}
                  </h3>
                  <p style={{ margin: 0, opacity: 0.7 }}>
                    {book.author_name?.[0] || "Unknown Author"}
                  </p>
                  <small style={{ opacity: 0.5 }}>
                    {book.first_publish_year}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
