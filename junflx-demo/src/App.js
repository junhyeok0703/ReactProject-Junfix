import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Moives from "./pages/Moives/Moives";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFoundPage from "./pages/NotFoundpage/NotFoundPage";
// 홈페이지  -> url: /
// 영화전체페이지(서치) -> url: /movies
// 영화디테일페이지 -> url: /movies/:id
function App() {
  //layout - nav바인데도 라우터에 넣어서 관리한다.
  //다른 url을 가진 페이지는 저 layout이 바뀔수도 있기 떄문이다.
  return (
    <div className="bg-black text-light min-vh-100">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<Moives />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
