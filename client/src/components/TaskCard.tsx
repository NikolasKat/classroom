import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { SlChemistry } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { FC, useState } from "react";
import InfoALert from "./InfoALert";
import { ETypeOfTask, TaskData } from "../models/interfaces";

const TaskCard: FC<TaskData> = ({ title, subjectName, type }) => {
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
                    setIsHover((_isHover) => true);
                }}
                onMouseLeave={() => {
                    setIsHover((_isHover) => false);
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
