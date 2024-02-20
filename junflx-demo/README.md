# 넷플릭스 만들어보기

많은개념이 내재되어있다.
먼저 라우팅 설정부터 한다. url설정

기본적으로 홈페이지 , 영화를 전체보여주는 페이지 , 영화디테일 페이지 있다.
추가적으로 추천영화 / 리뷰 가 있는데
영화디테일관련이 있기때문에 url주소가 /movies/:id/recommandation, /movies/:id/review
연관이 있는 페이지는 라우터 구성을 바꿀수있다.
<Routes>
<Route path="/" element={<AppLayout />}>
<Route index element={<Homepage />} />
<Route path="movies">
<Route index element={<Moives />} />
<Route path="/:id" element={<MovieDetail />} />
</Route>
</Route>
</Routes>
이런식으로 영화관련페이지는 index로 디폴트로 만들수있음
이외에 notfoundpage
<Route path="\*" element={<NotFoundPage/>}/>
</Routes>이런식으로 가능함

이거 중요함
<Outlet />
네브바에다가 그밑에 원래 자손페이지떠야하는데 라우터설정을 해서 안됬음
근데 outlet을 쓰게 되면 자손페이지가 밑에 뜨게 됨.

2.스타일에 대해 알았다
3.axios세팅하기 (귀찮은url줄이기) - utils파일을 만들기 - axios.create을 통해 커스텀마이징
