import { motion } from "framer-motion";
import { FaMapLocationDot, FaServer } from "react-icons/fa6";

export default function DataLocationMap({ id }) {
  const servers = [
    {
      id: 1,
      name: "Navi Mumbai",
      active: true,
      load: 45,
    },
    {
      id: 2,
      name: "Kharghar",
      active: true,
      load: 82,
    },
    {
      id: 3,
      name: "CBD Belapur",
      active: false,
      load: 20,
    },
    {
      id: 4,
      name: "Seawoods",
      active: true,
      load: 24,
    },
    {
      id: 5,
      name: "Nerul",
      active: true,
      load: 60,
    },
  ];

  return (
    <div
      id={id}
      className="col-span-2 row-span-2"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Widget Title */}
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
        <FaMapLocationDot style={{ color: "var(--blue)" }} />
        Data Location Map
      </div>

      {/* Server Cards */}
      <div
        className="widget-content"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        {servers.map((server) => (
          <div
            key={server.id}
            style={{
              background: "rgba(0,0,0,0.2)",
              padding: "15px",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            {/* Server Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <FaServer
                color={
                  server.active
                    ? "var(--green)"
                    : "var(--text-secondary)"
                }
              />

              <span style={{ fontWeight: 500 }}>
                {server.name}
              </span>
            </div>

            {/* Storage Load Text */}
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              Storage Load: {server.load}%
            </div>

            {/* Progress Bar */}
            <div
              style={{
                height: "4px",
                background: "var(--card)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${server.load}%` }}
                transition={{
                  duration: 1,
                  type: "spring",
                }}
                style={{
                  height: "100%",
                  background:
                    server.load > 75
                      ? "var(--red)"
                      : "var(--blue)",
                }}
              />
            </div>

            {/* Active Server Pulse Indicator */}
            {server.active && (
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: server.id * 0.2,
                }}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--blue)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}