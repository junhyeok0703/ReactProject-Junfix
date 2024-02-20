import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
//파플러무비불러올때 api호출을함
const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated`); //이미 uitl로 설정함
};
export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-TopRated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};
