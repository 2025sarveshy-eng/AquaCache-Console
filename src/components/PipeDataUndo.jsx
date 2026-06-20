import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClockRotateLeft, FaDatabase } from "react-icons/fa6";

export default function PipeDataUndo({ id }) {
  // Stack of recent write operations
  const [log, setLog] = useState([
    {
      id: 3,
      action: "Write: Sensor 14 -> 45 PSI",
      time: "10:32:05",
    },
    {
      id: 2,
      action: "Write: Valve 2 -> Closed",
      time: "10:31:12",
    },
    {
      id: 1,
      action: "Write: Navi Mumbai -> Sync",
      time: "10:30:00",
    },
  ]);

  // Listen for sensor updates
  useEffect(() => {
    const handleSensor = (event) => {
      const item = event.detail;

      setLog((prev) => [
        {
          id: Date.now(),
          action: `Write: Sensor ${item.id} -> ${item.val}`,
          time: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
    };

    window.addEventListener("sensorProcessed", handleSensor);

    return () => {
      window.removeEventListener("sensorProcessed", handleSensor);
    };
  }, []);

  // Undo last operation (Stack Pop)
  const handleUndo = () => {
    if (log.length > 0) {
      setLog((prev) => prev.slice(1));
    }
  };

  // Add a new write operation (Stack Push)
  const handleSimulateWrite = () => {
    const newId = (log[0]?.id || 0) + 1;

    setLog([
      {
        id: newId,
        action: `Write: Sensor ${Math.floor(Math.random() * 100)
          } -> Data`,
        time: new Date().toLocaleTimeString(),
      },
      ...log,
    ]);
  };

  return (
    <div
      id={id}
      className="row-span-2"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        className="widget-title"
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "var(--text)",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaClockRotateLeft style={{ color: "var(--yellow)" }} />
          Pipe Data Undo (Stack)
        </span>

        <button
          onClick={handleUndo}
          disabled={log.length === 0}
          style={{
            background: "var(--card)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            padding: "4px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Undo Last
        </button>
      </div>

      {/* Stack Items */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflowY: "auto",
          paddingRight: "5px",
        }}
      >
        <AnimatePresence>
          {log.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: index === 0 ? 1 : 0.6,
                y: 0,
              }}
              exit={{
                opacity: 0,
                x: 50,
              }}
              style={{
                background: "rgba(0,0,0,0.2)",
                padding: "10px 12px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "13px",
              }}
            >
              <FaDatabase
                style={{
                  color:
                    index === 0
                      ? "var(--blue)"
                      : "var(--text-secondary)",
                }}
              />

              <div style={{ flex: 1 }}>
                {item.action}
              </div>

              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "11px",
                }}
              >
                {item.time}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {log.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              padding: "20px 0",
            }}
          >
            Stack Empty
          </div>
        )}
      </div>

      {/* Simulate Write Button */}
      <button
        onClick={handleSimulateWrite}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "none",
          background: "var(--blue)",
          color: "white",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Simulate Write
      </button>
    </div>
  );
}