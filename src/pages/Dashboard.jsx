import DataLocationMap from "../components/DataLocationMap";
import PipeDataUndo from "../components/PipeDataUndo";
import SensorReadingQueue from "../components/SensorReadingQueue";
import ServerStatusChecker from "../components/ServerStatusChecker";
import CompressionSorter from "../components/CompressionSorter";
import ReplicationRulesHub from "../components/ReplicationRulesHub";
import QuickestDataSyncRoute from "../components/QuickestDataSyncRoute";
import OldDataRemover from "../components/OldDataRemover";

function Dashboard() {
  return (
    <>
      <div className="dashboard-header">
        <h1>AquaCache Console</h1>
        <p>Real-time Smart Water Network Monitoring System</p>
      </div>

      <div className="dashboard-grid">
        <DataLocationMap id="data-map" />
        <PipeDataUndo id="pipe-undo" />
        <SensorReadingQueue id="sensor-queue" />
        <ServerStatusChecker id="server-status" />
        <CompressionSorter id="compression" />
        <ReplicationRulesHub id="replication" />
        <QuickestDataSyncRoute id="sync-route" />
        <OldDataRemover id="old-data" />
      </div>
    </>
  );
}

export default Dashboard;