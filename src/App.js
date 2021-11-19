import Map3D from "./components/Map3D/Map3D";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Map3D/>
            </BrowserRouter>,
        </div>
    );
}

export default App;
