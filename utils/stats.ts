export const getStats = async () => {
    const res = await fetch("/api/stats");
  
    if (!res.ok) throw new Error("Failed to get stats");
  
    return res.json();
  };
  