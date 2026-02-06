import { useState } from "react";
import { motion } from "framer-motion";

const BRANDS = ["Brand 01", "Brand 02", "Brand 03", "Brand 04"];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "black", cls: "bg-black" },
  { name: "yellow", cls: "bg-yellow-400" },
  { name: "red", cls: "bg-red-500" },
  { name: "blue", cls: "bg-blue-600" },
];

const Filterpanel = ({ isOpen, onClose, onApply }) => {
  const [price, setPrice] = useState(12000);
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[380px] rounded-[32px] p-6"
      >
        <h2 className="text-2xl font-bold mb-6">FILTER</h2>

        <p className="font-semibold mb-3">Price Range</p>

        <div className="relative mb-8">
          <span className="absolute -top-8 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
            {price / 1000}k
          </span>

          <input
            type="range"
            min="0"
            max="12000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-yellow-400"
          />

          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0</span>
            <span>12k</span>
          </div>
        </div>

        <p className="font-semibold mb-3">Brand</p>
        <div className="flex gap-2 flex-wrap">
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className={`px-4 py-2 rounded-full text-sm font-semibold
                ${brand === b ? "bg-yellow-400 text-white" : "bg-yellow-100"}`}
            >
              {b.toUpperCase()}
            </button>
          ))}
        </div>

        <p className="font-semibold mt-6 mb-3">Size</p>
        <div className="flex gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`w-10 h-10 rounded-full font-bold
                ${size === s ? "bg-yellow-400 text-white" : "bg-yellow-100"}`}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="font-semibold mt-6 mb-3">Color</p>
        <div className="flex gap-4">
          {COLORS.map((c) => (
            <div
              key={c.name}
              onClick={() => setColor(c.name)}
              className={`w-8 h-8 rounded-full cursor-pointer ${c.cls}
                ${color === c.name ? "ring-2 ring-yellow-400" : ""}`}
            />
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="w-1/2 py-3 border rounded-full font-semibold"
          >
            CANCEL
          </button>

          <button
            onClick={() => onApply({ price, brand, size, color })}
            className="w-1/2 py-3 bg-yellow-400 text-white rounded-full font-semibold"
          >
            SEARCH FILTER
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Filterpanel;
