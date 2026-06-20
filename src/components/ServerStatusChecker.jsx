import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaServer,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";

export default function ServerStatusChecker({ id }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  // Hash Set containing active servers
  const activeServers = new Set([
    "navi mumbai",
    "kharghar",
    "cbd belapur",
    "seawoods",
    "nerul",
  ]);

  // Search server status
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();

    setQuery(value);

    if (value === "") {
      setResult(null);
    } else {
      setResult(activeServers.has(value));
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
          gap: "8px",
        }}
      >
        <FaMagnifyingGlass style={{ color: "var(--red)" }} />
        Server Status Checker
      </div>

      {/* Search Box */}
      <div
        style={{
          position: "relative",
          marginBottom: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Enter server name (e.g. kharghar)"
          value={query}
          onChange={handleSearch}
          style={{
            width: "100%",
            padding: "10px 12px 10px 35px",
            background: "var(--sidebar)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            color: "var(--text)",
            outline: "none",
          }}
        />

        <FaMagnifyingGlass
          style={{
            position: "absolute",
            left: "12px",
            top: "12px",
            color: "var(--text-secondary)",
          }}
        />
      </div>

      {/* Result Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "12px",
          padding: "15px",
        }}
      >
        {result === null ? (
          <span
            style={{
              color: "var(--text-secondary)",
              fontSize: "13px",
            }}
          >
            Awaiting Query...
          </span>
        ) : (
          <motion.div
            key={query}
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            <FaServer />

            <span>{query}</span>

            {result ? (
              <FaCircleCheck
                style={{
                  color: "var(--green)",
                }}
              />
            ) : (
              <FaCircleXmark
                style={{
                  color: "var(--red)",
                }}
              />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}