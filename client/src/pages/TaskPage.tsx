import { useParams } from "react-router-dom";
import { FaFileArrowDown } from "react-icons/fa6";

export default function TaskPage() {
    const { id } = useParams();
    const data = useParams();

    console.log(data);

    return (
        <section className="px-9">
            <h3 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold mb-8 text-center">
                {id} course Page
            </h3>

            <button className="flex items-center border border-solid rounded-2xl px-2 py-2 md:p-3 gap-3 font-bold text-md  md:text-lg bg-slate-100 md:w-2/6">
                <div className="relative text-xl md:text-4xl bg-[#0f9d58] rounded-full p-3  border-solid border-4 border-[#f4b400]">
                    <FaFileArrowDown className="z-50 text-[#f4b400]" />
                    <div className="absolute top-[2px] md:top-2 z-0 bg-[#b6dfcb] w-2 h-2 rounded-full"></div>
                    <div className="absolute top-5 right-[1.3px] bg-[#b6dfcb]  w-3 h-3 rounded-full"></div>
                    <div className="absolute top-5 left-1 bg-[#57bb8a] w-2 h-2 rounded-full"></div>
                    <div className="absolute bottom-[3px] md:bottom-1 left-[13.3px] bg-[#57bb8a] w-2 h-2 rounded-full"></div>
                    <div className="absolute left-2 md:top-5 md:left-[12.3px] bg-[#57bb8a] w-1 h-1 rounded-full"></div>
                </div>
                <a href="#" download="../../public/avatar-img.jpg">
                    Download the file
                </a>
            </button>
        </section>
    );
}
