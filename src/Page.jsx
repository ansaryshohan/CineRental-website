import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSection from "./components/headerSection/HeaderSection";
import MovieListSection from "./components/movieListSection/MovieListSection";
import SideBar from "./components/sideBarSection/SideBar";
import useDarkModeContext from "./hooks/useDarkModeContext";


const Page = () => {
  const { darkMode } = useDarkModeContext();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <HeaderSection />
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieListSection />
      </div>
    </main>
    <FooterSection />
  </div>
  );
};

export default Page;