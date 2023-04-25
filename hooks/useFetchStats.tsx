import { getStats } from "@/utils/stats";
import { GlobalStats } from "@/utils/types-validation";
import { useEffect, useState } from "react";

const useFetchStats = (refreshOnMount = false) => {
  const [stats, setStats] = useState<GlobalStats>();
  const [isLoading, setIsLoading] = useState(false);

  const refreshStats = async () => {
    setIsLoading(true);

    const apiStats: GlobalStats = await getStats();

    setStats(apiStats);
    setIsLoading(false);
  };

  useEffect(() => {
    refreshOnMount && refreshStats();
  }, []);

  return { stats, refreshStats, isLoading };
};

export default useFetchStats;
