import Banner from "@/components/Banner/Banner";

import Stats from "@/components/Stats/Stats";
import TrendingApps from "@/components/TrendingApps/TrendingApps";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps page="home"></TrendingApps>
    </div>
  );
}
