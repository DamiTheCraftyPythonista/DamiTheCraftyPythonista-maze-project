import './index.css';
import Grid from "./components/Grid.js"
import Footer from "./components/Footer.js"
import Toolbar from "./components/Toolbar.js"


const GRID_WIDTH = 48;
const GRID_HEIGHT = 20;
// set the starting node (non-variable for now, do that later)
//set the target node

//apply Dijkstra's algorithm and visualize it
//then go and handle the situation when it hits the target
//and visualize the shortest path


//then cretae the wall functionality
//and find a way to generate mazes


//then just find new algorithms and iterate on this



function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <Toolbar />
        <Grid numRows={GRID_HEIGHT} numCols={GRID_WIDTH} />
        <Footer />
      </body>
    </div>
  );
}

export default App;
