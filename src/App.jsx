import Page from "./Page";
import DarkModeContextProvider from "./contexts/DarkModeContextProvider";
import MovieContextProvider from "./contexts/MovieContextProvider";

function App() {
  return (
    <DarkModeContextProvider>
      <MovieContextProvider>
        <Page />
      </MovieContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
