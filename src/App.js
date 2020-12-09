import SortingBody from "./Components/SortingBody";
import TopBar from "./Components/TopBar";
import ArrayContextProvider from "./contexts/ArrayContext";

function App() {
  return (
    <div className="app">
      <ArrayContextProvider>
        <TopBar />
        <SortingBody></SortingBody>
      </ArrayContextProvider>
    </div>
  );
}

export default App;
