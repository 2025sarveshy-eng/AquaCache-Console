import Dashboard from "./pages/Dashboard";
import { 
  FaMapLocationDot, FaClockRotateLeft, FaListOl, 
  FaServer, FaCompress, FaNetworkWired, FaRoute, FaTrash 
} from "react-icons/fa6";
import "./App.css";

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h2>AquaCache</h2>
        <ul>
          <li onClick={() => scrollTo("data-map")}><FaMapLocationDot /> Data Map</li>
          <li onClick={() => scrollTo("pipe-undo")}><FaClockRotateLeft /> Undo Stack</li>
          <li onClick={() => scrollTo("sensor-queue")}><FaListOl /> Sensor Queue</li>
          <li onClick={() => scrollTo("server-status")}><FaServer /> Server Status</li>
          <li onClick={() => scrollTo("compression")}><FaCompress /> Compression</li>
          <li onClick={() => scrollTo("replication")}><FaNetworkWired /> Replication</li>
          <li onClick={() => scrollTo("sync-route")}><FaRoute /> Sync Route</li>
          <li onClick={() => scrollTo("old-data")}><FaTrash /> LRU Cache</li>
        </ul>
      </div>
      <div className="main" style={{ height: '100vh', overflowY: 'auto' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;