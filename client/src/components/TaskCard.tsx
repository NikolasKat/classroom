import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
// import { GoFileSubmodule } from "react-icons/go";
import { SlChemistry } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { FC, useState } from "react";
import InfoALert from "./InfoALert";

export enum ETypeOfTask {
    SCHEDULE = "schedule",
    LAB = "lab",
    NOTES = "notes",
}

interface ITaskData {
    id: number | string | undefined;
    title: string;
    subjectName: string;
    type: ETypeOfTask;
    files: string[];
}

const TaskCard: FC<ITaskData> = ({ id, title, subjectName, files, type }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    return (
        <div className="relative flex items-center w-11/12 justify-between text-5xl border border-solid-black px-5 py-4 rounded-2xl">
            <div className="flex items-center gap-6">
                <div className="bg-slate-100 p-4 rounded-full">
                    {/* <SlBookOpen /> */}
                    {type === ETypeOfTask.LAB ? (
                        <SlChemistry />
                    ) : type === ETypeOfTask.NOTES ? (
                        <SlBookOpen />
                    ) : (
                        <GrSchedule />
                    )}
                </div>
                <div>
                    <h3 className="text-4xl">{title}</h3>
                    <h4 className="text-2xl">{subjectName}</h4>
                </div>
            </div>
            <button
                className="transition duration-200 ease-in-out text-5xl hover:text-gray-500"
                onMouseEnter={() => {
                    setIsHover((isHover) => true);
                }}
                onMouseLeave={() => {
                    setIsHover((isHover) => false);
                }}
                onClick={() => {
                    setIsCompleted((isCompleted) => !isCompleted);
                }}
            >
                {isCompleted ? (
                    <BiTask className="text-green-600" />
                ) : (
                    <BiTaskX className="text-red-800" />
                )}
            </button>
            {isHover ? (
                <div className="absolute top-9 right-20 text-lg">
                    <InfoALert
                        text={isCompleted ? "Выполнено" : "Сдать работу"}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default TaskCard;
