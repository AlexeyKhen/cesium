import { Viewer, Entity } from "resium";
import Files3D from "./components/Files3D";
function App() {
  return (
    <div className="App">
      <Viewer>
        <Files3D />
      </Viewer>
    </div>
  );
}

export default App;
