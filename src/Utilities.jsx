export const getCategoryIcon = (catId) => {
  const map = {
    "boring-mills": "⊕",
    "heavy-lathes": "◎",
    "vertical-lathes": "⊞",
    "band-saws": "◈",
    "milling": "⊗",
    "hbm-accessories": "⊕",
    "deburring": "◉",
    "saw-accessories": "◈",
  };

  return map[catId] || "◆";
};

export const formatPrice = (p) => {
  if (!p) return null;
  return "$" + p.toLocaleString("en-CA");
};
