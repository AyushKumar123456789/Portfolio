import React, { useState, useEffect } from "react";
import axios from "axios";

function BookReview() {
  const [completedBooks, setCompletedBooks] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://potfolio-backend-p99z.onrender.com/books")
      .then((response) => {
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
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, []);

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
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="mt-10">
        <section>
          <h2 className="text-3xl font-bold mb-4">Completed</h2>
          {completedBooks.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">{review.title}</h3>
              <p className="mt-4">{review.text}</p>
              <div className="relative pt-1 mt-4">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                      Progress:{" "}
                      {calculateCompletion(
                        bookProgress.current,
                        bookProgress.total
                      )}
                      %
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
                      {bookProgress.current} pages read
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{
                      width: `${calculateCompletion(bookProgress.current, bookProgress.total)}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                Book Link
              </a>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Reading</h2>
          {readingBooks.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">{review.title}</h3>
              <p className="mt-4">{review.text}</p>
              <div className="relative pt-1 mt-4">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                      Progress:{" "}
                      {calculateCompletion(
                        bookProgress.current,
                        bookProgress.total
                      )}
                      %
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
                      {bookProgress.current} pages read
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{
                      width: `${calculateCompletion(bookProgress.current, bookProgress.total)}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                Book Link
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default BookReview;
