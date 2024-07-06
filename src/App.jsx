import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSection from "./components/headerSection/HeaderSection";
import MovieListSection from "./components/movieListSection/MovieListSection";
import SideBar from "./components/sideBarSection/SideBar";
import MovieContextProvider from "./contexts/MovieContextProvider";

function App() {
  return (
    <MovieContextProvider>
      <HeaderSection />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieListSection />
        </div>
      </main>
      <FooterSection />
    </MovieContextProvider>
  );
}

export default App;
