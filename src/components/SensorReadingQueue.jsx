import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaListUl, FaDroplet } from "react-icons/fa6";

export default function SensorReadingQueue({ id }) {
  // Queue of sensor readings
  const [queue, setQueue] = useState([
    { id: 101, val: 42 },
    { id: 102, val: 38 },
    { id: 103, val: 45 },
  ]);

  // Automatically add new sensor readings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQueue((prev) => {
        if (prev.length > 5) return prev;

        const newItem = {
          id: Math.floor(Math.random() * 1000),
          val: Math.floor(Math.random() * 50) + 20,
        };

        return [...prev, newItem];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Process the first sensor reading (Dequeue)
  const handleProcess = () => {
    if (queue.length > 0) {
      const processedItem = queue[0];

      setQueue((prev) => prev.slice(1));

      window.dispatchEvent(
        new CustomEvent("sensorProcessed", {
          detail: processedItem,
        })
      );
    }
  };

  return (
    <div
      id={id}
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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaListUl style={{ color: "var(--green)" }} />
          Sensor Queue
        </span>

        <span
          style={{
            fontSize: "12px",
            background: "var(--card)",
            padding: "4px 8px",
            borderRadius: "12px",
          }}
        >
          {queue.length} Pending
        </span>
      </div>

      {/* Queue Display */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          overflowX: "auto",
          padding: "10px 0",
        }}
      >
        <AnimatePresence>
          {queue.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -50,
                scale: 0.5,
              }}
              style={{
                minWidth: "60px",
                height: "60px",
                background:
                  index === 0
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(0,0,0,0.2)",
                border:
                  index === 0
                    ? "1px solid var(--green)"
                    : "1px solid transparent",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              <FaDroplet
                style={{
                  color: "var(--blue)",
                  marginBottom: "4px",
                }}
              />

              {item.val}
            </motion.div>
          ))}
        </AnimatePresence>

        {queue.length === 0 && (
          <div
            style={{
              margin: "auto",
              color: "var(--text-secondary)",
              fontSize: "13px",
            }}
          >
            Queue Empty
          </div>
        )}
      </div>

      {/* Process Button */}
      <button
        onClick={handleProcess}
        disabled={queue.length === 0}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          background: "var(--card)",
          color: "var(--text)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Process Next (Dequeue)
      </button>
    </div>
  );
}