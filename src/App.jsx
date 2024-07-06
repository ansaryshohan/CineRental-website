import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSection from "./components/headerSection/HeaderSection";
import MovieListSection from "./components/movieListSection/MovieListSection";
import SideBar from "./components/sideBarSection/SideBar";

function App() {
  return (
    <>
      <HeaderSection />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieListSection/>
        </div>
      </main>
      <FooterSection/>
    </>
  );
}

export default App;
