import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCompress, FaShuffle } from "react-icons/fa6";

export default function CompressionSorter({ id }) {
  const [dataSections, setDataSections] = useState([
    { id: "Navi Mumbai", ratio: 65 },
    { id: "Kharghar", ratio: 82 },
    { id: "CBD Belapur", ratio: 45 },
    { id: "Seawoods", ratio: 91 },
    { id: "Nerul", ratio: 54 },
  ]);

  useEffect(() => {
    // Sort array by compression ratio (descending) simulating a Priority Queue
    setDataSections(prev => [...prev].sort((a, b) => b.ratio - a.ratio));
  }, []);

  const handleRandomize = () => {
    setDataSections(prev => {
      const newArr = prev.map(item => ({ ...item, ratio: Math.floor(Math.random() * 60) + 30 }));
      return newArr.sort((a, b) => b.ratio - a.ratio);
    });
  };

  return (
    <div id={id} style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className="widget-title" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaCompress style={{ color: 'var(--blue)' }} /> Compression Sorter</span>
        <FaShuffle style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={handleRandomize} />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', paddingRight: '5px' }}>
        <AnimatePresence>
          {dataSections.map((section, index) => (
            <motion.div
              key={section.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '8px 12px', borderRadius: '8px' }}
            >
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: index === 0 ? 'rgba(59, 130, 246, 0.2)' : 'var(--card)', color: index === 0 ? 'var(--blue)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', marginRight: '10px' }}>
                {index + 1}
              </div>
              <div style={{ flex: 1, fontSize: '13px', fontWeight: 500 }}>{section.id}</div>
              <div style={{ width: '80px', height: '6px', background: 'var(--card)', borderRadius: '3px', overflow: 'hidden', marginRight: '10px' }}>
                <div style={{ height: '100%', width: `${section.ratio}%`, background: 'var(--blue)' }} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600, width: '35px', textAlign: 'right' }}>{section.ratio}%</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
