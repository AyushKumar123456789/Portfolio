import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/LoadinAnimation.json";

function MovieReview() {
  const [watchedReviews, setWatchedReviews] = useState([]);
  const [wishReviews, setWishReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://potfolio-backend-p99z.onrender.com/reviews"
        );
        const reviews = response.data;
        // Filter reviews into watched and wish to watch
        const watched = reviews.filter((review) => review.status === "watched");
        const wish = reviews.filter((review) => review.status === "wish");
        setWatchedReviews(watched);
        setWishReviews(wish);
      } catch (error) {
        console.error("There was an error fetching the reviews!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
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

  return (
    <div className="min-h-screen bg-gray-900 text-white  px-4 flex flex-col justify-between">
      <header>
        <nav className="flex justify-around mb-8 border-b border-gray-700 py-4 ">
          <Link
            to="/"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700] rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700] rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Books
          </Link>
          <Link
            to="/blog"
            className="text-lg font-semibold text-blue-500 border border-[#ffd700]  rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-grow mt-10">
        <section>
          <h2 className="text-3xl font-bold mb-4">Watched</h2>
          {watchedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">{review.title}</h3>
              <ReactStars
                count={5}
                size={20}
                value={review.rating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="mt-4">{review.text}</p>
              <a
                href={review.imdbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                IMDb Link <FaExternalLinkAlt className="inline" />
              </a>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Wish to Watch</h2>
          {wishReviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">{review.title}</h3>
              <ReactStars
                count={5}
                size={20}
                value={review.rating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="mt-4">{review.text}</p>
              <a
                href={review.imdbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                IMDb Link <FaExternalLinkAlt className="inline" />
              </a>
            </div>
          ))}
        </section>
      </main>
      <footer className="text-center py-4 border-t border-gray-700">
        <p>© 2024 MovieReview. By Ayush Kumar.</p>
      </footer>
    </div>
  );
}

export default MovieReview;
