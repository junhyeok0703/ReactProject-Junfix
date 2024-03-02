import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchMovieReview = ({ id }) => {
  return api.get(`/movie/${id}/reviews`);
};
export const useMovieReviews = ({ id }) => {
  return useQuery({
    queryKey: ["movie-reviews"],
    queryFn: fetchMovieReview({ id }),
    select: (result) => result.data,
  });
};
