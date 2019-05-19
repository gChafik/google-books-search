//import http from "../services/httpService";

// export default {
//   // Gets books from the Google API
//   getBooks: function(q) {
//     return http.get("/api/google", {
//       params: { q: "title:" + q }
//     });
//   },
//   // Gets all saved books
//   getSavedBooks: function() {
//     return http.get("/api/books");
//   },
//   // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return http.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return http.post("/api/books", bookData);
//   }
// };
import axios from "axios";
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getSavedBooks: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
