import React, { useState } from "react";

const Review = ({ review }) => {
  const [expandedContentId, setExpandedContentId] = useState(null);

  const toggleContentExpansion = (reviewId) => {
    setExpandedContentId((prevId) => (prevId === reviewId ? null : reviewId));
  };

  const renderLimitedContent = (content) => {
    const maxLength = 200;

    if (content.length <= maxLength) {
      return content;
    }

    return expandedContentId === review.id
      ? content
      : `${content.slice(0, maxLength)}...`;
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <p className="author-name">작성자: {review.author}</p>
        <p className="rating">평점: {review.author_details.rating}</p>
      </div>
      <p className="review-content">{renderLimitedContent(review.content)}</p>
      {review.content.length > 200 && (
        <button
          className="expand-button"
          onClick={() => toggleContentExpansion(review.id)}
        >
          {expandedContentId === review.id ? "접기" : "더 보기"}
        </button>
      )}
      <p className="time-stamp">작성 시간: {review.created_at}</p>
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="button-style"
      >
        자세히 보기
      </a>
    </div>
  );
};

export default Review;
