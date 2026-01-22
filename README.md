# Book Explorer App

A full-stack MERN Book Explorer Web Application built to search for books, view book details, and display user ratings and reviews.  
The application uses a React frontend with a Node.js and Express backend, connected to public book APIs for fetching data.

---

## Overview

Book Explorer allows users to:
- Search for books and authors
- View detailed information for each book
- See user ratings and reviews (from integrated APIs)

The application is designed with clean architecture and scalability in mind.  
The frontend dynamically renders search results and book details, while the backend handles API requests and data processing.

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Axios
- React Router 

### Backend
- Node.js
- Express.js
- Axios
- dotenv
- Nodemon

### Database
- No database is required as book data is fetched from external public APIs
- Backend manages API requests and responses dynamically

---

## Environment Variables

Create a `.env` file inside the `server` folder with your API keys if required:
```bash
PORT=5000
NYTIMES_API_KEY=your_nytimes_api_key
```


## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/fatimajaved444/BookExplorer.git
cd BOOKEXPLORER
```

### 2. Run Backend
```bash
cd server
npm install
npm run dev
```
### 3. Run Frontend
```bash
cd clientt
npm install
npm run dev
```
