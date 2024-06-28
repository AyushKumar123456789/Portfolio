import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

function MovieReview() {
  const [watchedReviews, setWatchedReviews] = useState([]);
  const [wishReviews, setWishReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => {
        const reviews = response.data;
        // Filter reviews into watched and wish to watch
        const watched = reviews.filter((review) => review.status === "watched");
        const wish = reviews.filter((review) => review.status === "wish");
        setWatchedReviews(watched);
        setWishReviews(wish);
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="mt-10">
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
      </div>
    </div>
  );
}

export default MovieReview;
