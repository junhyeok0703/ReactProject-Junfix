import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
//파플러무비불러올때 api호출을함
const fetchPopularMovies = () => {
  return api.get(`/movie/popular`); //이미 uitl로 설정함
};
export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};
