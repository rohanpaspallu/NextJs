import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <h1>
      Review for product {params.productId} is {params.reviewId}
    </h1>
  );
};

export default ReviewDetails;
