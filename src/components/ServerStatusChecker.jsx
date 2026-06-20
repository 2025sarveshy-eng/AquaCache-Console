import { useState } from "react";
import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaServer, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export default function ServerStatusChecker({ id }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  // Simulated Hash Map / Set
  const activeServers = new Set(["navi mumbai", "kharghar", "cbd belapur", "seawoods", "nerul"]);

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setQuery(val);
    if (val === "") {
      setResult(null);
    } else {
      setResult(activeServers.has(val));
    }
  };

  return (
    <div id={id} style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className="widget-title" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaMagnifyingGlass style={{ color: 'var(--red)' }} /> Server Status (Search)
      </div>
      
      <div style={{ position: 'relative', marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Enter server ID (e.g. kharghar)" 
          value={query}
          onChange={handleSearch}
          style={{ width: '100%', padding: '10px 12px 10px 35px', background: 'var(--sidebar)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', outline: 'none' }}
        />
        <FaMagnifyingGlass style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '15px' }}>
        {result === null ? (
          <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Awaiting Query...</span>
        ) : (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={query}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 500 }}
          >
            <FaServer />
            {query}
            {result ? 
              <FaCircleCheck style={{ color: 'var(--green)', marginLeft: '5px' }} /> : 
              <FaCircleXmark style={{ color: 'var(--red)', marginLeft: '5px' }} />
            }
          </motion.div>
        )}
      </div>
    </div>
  );
}
