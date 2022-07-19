import "./App.css";
import Navbar from "./components/Navbar";
import Homeage from "./pages/Homepage";
import { NoteProvider } from "./Context/NoteContext";

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <Navbar />
        <Homeage />
      </NoteProvider>
    </div>
  );
}

export default App;
