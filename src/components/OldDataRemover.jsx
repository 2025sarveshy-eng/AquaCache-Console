import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashCan, FaMemory } from "react-icons/fa6";

export default function OldDataRemover({ id }) {
  const [cache, setCache] = useState([
    { key: "k-102", age: 1 },
    { key: "k-405", age: 2 },
    { key: "k-099", age: 3 },
    { key: "k-332", age: 4 } // oldest
  ]);
  const MAX_SIZE = 4;

  const handleAccess = (key) => {
    setCache(prev => {
      const filtered = prev.filter(item => item.key !== key);
      return [{ key, age: 0 }, ...filtered.map(i => ({ ...i, age: i.age + 1 }))];
    });
  };

  const handleAdd = () => {
    const newKey = `k-${Math.floor(Math.random() * 900) + 100}`;
    setCache(prev => {
      let nextCache = [{ key: newKey, age: 0 }, ...prev.map(i => ({ ...i, age: i.age + 1 }))];
      if (nextCache.length > MAX_SIZE) {
        nextCache.pop(); // Evict LRU
      }
      return nextCache;
    });
  };

  return (
    <div id={id} className="col-span-2" style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className="widget-title" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTrashCan style={{ color: 'var(--red)' }} /> Old Data Remover (LRU)</span>
        <span style={{ fontSize: '12px', background: 'var(--card)', padding: '4px 8px', borderRadius: '12px' }}>Capacity: {cache.length}/{MAX_SIZE}</span>
      </div>
      
      <div style={{ flex: 1, display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0' }}>
        <AnimatePresence>
          {cache.map((item, i) => (
            <motion.div
              key={item.key}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.5, backgroundColor: 'rgba(239, 68, 68, 0.5)' }}
              onClick={() => handleAccess(item.key)}
              style={{
                flex: 1,
                height: '70px',
                background: i === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0,0,0,0.2)',
                border: i === 0 ? '1px solid var(--blue)' : i === cache.length - 1 ? '1px dashed var(--red)' : '1px solid transparent',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <FaMemory style={{ color: 'var(--text-secondary)', marginBottom: '4px' }} />
              <div style={{ fontWeight: 'bold' }}>{item.key}</div>
              {i === cache.length - 1 && <div style={{ fontSize: '9px', color: 'var(--red)', position: 'absolute', bottom: '5px' }}>Oldest</div>}
              {i === 0 && <div style={{ fontSize: '9px', color: 'var(--blue)', position: 'absolute', bottom: '5px' }}>Newest</div>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button onClick={handleAdd} style={{ marginTop: '10px', background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)', padding: '8px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', width: '100%', transition: '0.2s' }}>Write New Data (Triggers Eviction if full)</button>
    </div>
  );
}
