import Link from "next/link";
import AppCard from "../ui/AppCard";
import dataPromise from "@/utils/dataPromise";



const TrendingApps = async({page}) => {
    const apps = await dataPromise();
    return (
        <div className='container mx-auto my-15'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="grid grid-cols-3 gap-7">
                {apps.slice(0,page === "home" ? 9 : apps.length-1).map(app=> <AppCard key={app.id} app={app}></AppCard> )}
            </div>
            <div className="text-center mt-7">
                <Link href={"/apps"}><button className="btn bg-purple-500 text-white">Show All</button></Link>
            </div>
        </div>
    );
};

export default TrendingApps;