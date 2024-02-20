import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
//파플러무비불러올때 api호출을함
const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming`); //이미 uitl로 설정함
};
export const useUpcomingMovie = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data,
  });
};
