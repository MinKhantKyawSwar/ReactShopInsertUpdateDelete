import ItemContextProvider from "./Components/Store/ItemContext";
import Main from "./Main";

function App() {
  return (
    <ItemContextProvider>
      <Main />
    </ItemContextProvider>
  );
}

export default App;
