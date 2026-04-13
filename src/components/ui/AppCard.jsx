import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  return (
    <Link href={`/apps/${id}`}>
      <div className=" bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
        <div className="w-full py-10 flex justify-center items-center overflow-hidden rounded-lg mb-4 bg-gray-100">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-[#1a2e44] font-bold text-lg leading-tight">
            {title}
          </h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 bg-green-50 text-emerald-600 px-2 py-1 rounded-md text-sm font-semibold">
              <LuDownload className="w-3.5 h-3.5" />
              <span>{downloads}</span>
            </div>

            <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-sm font-semibold">
              <span>{ratingAvg}</span>
              <AiFillStar className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
