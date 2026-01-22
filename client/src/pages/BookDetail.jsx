import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookDetails } from "../api/book";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    getBookDetails(id)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (!book) {
    return <p style={{ textAlign: "center" }}>Book not found</p>;
  }

 
  const authorName =
    book.authors?.[0]?.name ||
    book.authors?.[0]?.author?.key?.replace("/authors/", "") ||
    "Unknown Author";


  const coverUrl =
    book.covers?.length > 0
      ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
      : "https://via.placeholder.com/160x230?text=No+Cover";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6fa",
        padding: "30px"
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>
     
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "15px"
          }}
        >
          ← Back
        </button>

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 8px 18px rgba(0,0,0,0.06)"
          }}
        >
         
          <div style={{ display: "flex", gap: "24px" }}>
            <img
              src={coverUrl}
              alt={book.title}
              style={{ borderRadius: "10px", width: "160px", height: "230px" }}
            />

            <div>
              <h1 style={{ marginTop: 0 }}>{book.title}</h1>
              <p style={{ opacity: 0.5 }}>
                First published: {book.first_publish_date || "N/A"}
              </p>

              <div style={{ color: "#f5a623", fontSize: "18px" }}>★★★★☆</div>

              <button
                onClick={() => setIsRead(true)}
                style={{
                  marginTop: "18px",
                  padding: "12px 18px",
                  background: isRead ? "#4CAF50" : "#1DB954",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                {isRead ? "✓ Marked as Read" : "Mark as Read"}
              </button>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3>Overview</h3>
            <p style={{ lineHeight: "1.7", opacity: 0.8 }}>
              {typeof book.description === "string"
                ? book.description
                : book.description?.value || "No description available for this book."}
            </p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3>About the Author</h3>
            <p style={{ opacity: 0.7 }}>
              Author details are not available via Open Library for this book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
