import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/LoadinAnimation.json";

function BookReview() {
  const [completedBooks, setCompletedBooks] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookReviews = async () => {
      try {
        const response = await axios.get(
          "https://potfolio-backend-p99z.onrender.com/books"
        );
        const reviews = response.data;
        // Filter reviews to include only books
        const completed = reviews.filter(
          (review) => review.type === "book" && review.status === "completed"
        );
        const reading = reviews.filter(
          (review) => review.type === "book" && review.status === "reading"
        );
        setCompletedBooks(completed);
        setReadingBooks(reading);
      } catch (error) {
        console.error("There was an error fetching the Book reviews!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookReviews();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#212121]">
        <div className="text-center">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ width: 200, height: 200 }}
          />
          <div className="mt-2 text-lg text-white">Processing...</div>
        </div>
      </div>
    );
  }

  // Function to calculate completion percentage (for demonstration)
  const calculateCompletion = (progress, total) => {
    return ((progress / total) * 100).toFixed(2);
  };

  // Sample progress (for demonstration)
  const bookProgress = {
    current: 250, // Example: 250 pages read
    total: 400, // Example: Total pages in the book
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 flex flex-col justify-between">
      <header>
        <nav className="flex justify-around mb-8 border-b border-gray-700 py-4">
          <Link
            to="/"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700] rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700] rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Movies
          </Link>
          <Link
            to="/blogs"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700] rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Blogs
          </Link>
        </nav>
      </header>
      <main className="flex-grow mt-10 mb-4">
        <section>
          <h2 className="text-3xl font-bold mb-4">Completed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedBooks.map((review, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                <p className="text-sm">{review.text}</p>
                <div className="relative pt-1 mt-2">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        Progress:{" "}
                        {calculateCompletion(review.completion, review.Pages)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
                        {review.completion} Pages read
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{
                        width: `${calculateCompletion(
                          review.completion,
                          review.Pages
                        )}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm inline-block"
                >
                  Book Link
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readingBooks.map((review, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                <p className="text-sm">{review.text}</p>
                <div className="relative pt-1 mt-2">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        Progress:{" "}
                        {calculateCompletion(review.completion, review.Pages)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
                        {review.completion} Pages read
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{
                        width: `${calculateCompletion(
                          review.completion,
                          review.Pages
                        )}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm inline-block"
                >
                  Book Link
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-4 border-t border-gray-700">
        <p>© 2024 BookReview. By Ayush Kumar.</p>
      </footer>
    </div>
  );
}

export default BookReview;
