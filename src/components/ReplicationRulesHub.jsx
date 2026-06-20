import { motion } from "framer-motion";
import {
  FaHubspot,
  FaDatabase,
} from "react-icons/fa6";

export default function ReplicationRulesHub({ id }) {
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
        <FaHubspot style={{ color: "#ec4899" }} />
        Replication Rules Hub
      </div>

      {/* Main Network Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {/* Central Hub */}
        <div
          style={{
            zIndex: 2,
            background: "var(--card)",
            padding: "15px",
            borderRadius: "50%",
            border: "2px solid #ec4899",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow:
              "0 0 15px rgba(236,72,153,0.3)",
          }}
        >
          <FaHubspot
            size={24}
            color="#ec4899"
          />

          <span
            style={{
              fontSize: "10px",
              marginTop: "4px",
              fontWeight: 600,
            }}
          >
            Navi Mumbai
          </span>
        </div>

        {/* Kharghar Node */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "var(--sidebar)",
              padding: "10px",
              borderRadius: "50%",
              border:
                "1px solid var(--border)",
            }}
          >
            <FaDatabase size={16} />
          </div>

          <span
            style={{
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            Kharghar
          </span>
        </div>

        {/* Seawoods Node */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "var(--sidebar)",
              padding: "10px",
              borderRadius: "50%",
              border:
                "1px solid var(--border)",
            }}
          >
            <FaDatabase size={16} />
          </div>

          <span
            style={{
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            Seawoods
          </span>
        </div>

        {/* CBD Belapur Node */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "var(--sidebar)",
              padding: "10px",
              borderRadius: "50%",
              border:
                "1px solid var(--border)",
            }}
          >
            <FaDatabase size={16} />
          </div>

          <span
            style={{
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            CBD Belapur
          </span>
        </div>

        {/* Animated Connections */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {/* Kharghar → Hub */}
          <motion.line
            x1="30%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="rgba(236,72,153,0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />

          {/* Seawoods → Hub */}
          <motion.line
            x1="70%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="rgba(236,72,153,0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />

          {/* CBD Belapur → Hub */}
          <motion.line
            x1="70%"
            y1="70%"
            x2="50%"
            y2="50%"
            stroke="rgba(236,72,153,0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, 20],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
        </svg>

        {/* Replication Strategy */}
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            fontSize: "10px",
            color: "var(--text-secondary)",
            background: "var(--card)",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Strategy: Active-Active
        </div>
      </div>
    </div>
  );
}