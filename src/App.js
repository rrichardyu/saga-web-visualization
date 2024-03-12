import './App.css';
import NeoGraph from './components/Neo4jGraph';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <div id="container">
                <NeoGraph
                    containerId={"neovis"}
                    neo4jUri={"bolt://localhost:7687"}
                    neo4jUser={"neo4j"}
                    neo4jPassword={"1234567890"}
                    backgroundColor={"#D3D3D3"}
                />
                <div id="overlay">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default App;
