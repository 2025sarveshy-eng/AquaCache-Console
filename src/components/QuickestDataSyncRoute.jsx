import { useState } from "react";
import { motion } from "framer-motion";
import { FaRoute, FaLocationDot } from "react-icons/fa6";

export default function QuickestDataSyncRoute({ id }) {
  // Available network locations
  const locations = [
    "Navi Mumbai",
    "Kharghar",
    "CBD Belapur",
    "Seawoods",
    "Nerul",
  ];

  const [source, setSource] = useState(locations[0]);
  const [destination, setDestination] = useState(locations[4]);
  const [route, setRoute] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Simulate Dijkstra shortest path calculation
  const handleCalculate = () => {
    setIsCalculating(true);
    setRoute(null);

    setTimeout(() => {
      setIsCalculating(false);

      if (source === destination) {
        setRoute([source]);
      } else if (source === "Navi Mumbai") {
        setRoute([source, destination]);
      } else {
        const intermediateNode =
          locations.find(
            (loc) =>
              loc !== source &&
              loc !== destination
          ) || "Network Hub";

        setRoute([
          source,
          intermediateNode,
          destination,
        ]);
      }
    }, 1500);
  };

  return (
    <div
      id={id}
      className="col-span-2"
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
          gap: "8px",
        }}
      >
        <FaRoute style={{ color: "var(--yellow)" }} />
        Quickest Sync Route (Graph)
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <select
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
          style={{
            flex: 1,
            padding: "8px",
            background: "var(--sidebar)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
          }}
        >
          {locations.map((location) => (
            <option
              key={`src-${location}`}
              value={location}
            >
              Source: {location}
            </option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
          style={{
            flex: 1,
            padding: "8px",
            background: "var(--sidebar)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
          }}
        >
          {locations.map((location) => (
            <option
              key={`dst-${location}`}
              value={location}
            >
              Destination: {location}
            </option>
          ))}
        </select>

        <button
          onClick={handleCalculate}
          style={{
            background: "var(--blue)",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Find Path
        </button>
      </div>

      {/* Result Area */}
      <div
        style={{
          flex: 1,
          minHeight: "80px",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "12px",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isCalculating ? (
          // Loading Animation
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            style={{
              width: "20px",
              height: "20px",
              border: "3px solid var(--blue)",
              borderTopColor: "transparent",
              borderRadius: "50%",
            }}
          />
        ) : route ? (
          // Route Display
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              overflowX: "auto",
            }}
          >
            {route.map((node, index) => (
              <div
                key={`${node}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.3,
                  }}
                  style={{
                    background:
                      index === 0
                        ? "var(--blue)"
                        : index === route.length - 1
                          ? "var(--green)"
                          : "var(--card)",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaLocationDot />
                  {node}
                </motion.div>

                {index < route.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: index * 0.3 + 0.2,
                    }}
                    style={{
                      width: "30px",
                      height: "3px",
                      background:
                        "var(--text-secondary)",
                      transformOrigin: "left",
                      margin: "0 5px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          // Default Message
          <span
            style={{
              color: "var(--text-secondary)",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Select source and destination to find
            the fastest network path.
          </span>
        )}
      </div>
    </div>
  );
}