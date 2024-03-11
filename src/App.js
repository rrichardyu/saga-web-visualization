import './App.css';
import { NeoGraph } from './components/Neo4jGraph';

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
          <div id="neovis-control" class="h-48 bg-gray-200 flex flex-col justify-between">
            <div>
              <h1 class="text-3xl font-bold">Saga Networks Visualizer</h1>
              <br />
              <form onSubmit={null}>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700">Neo4j Cypher Query</label>
                <input
                  type="text"
                  id="query"
                  name="query"
                  value={null}
                  onChange={null}
                  className="mt-1 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm rounded-md px-2 py-2"
                />
                <button
                  type="submit"
                  className="mt-4 w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-100 ease-in-out"
                >
                  Submit
                </button>
              </form>
              <br />
            </div>
            <div class="mt-auto">
              <p class="text-xs">Department of Scandinavian</p>
              <p class="text-xs">University of California, Berkeley</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
