import { ETypeOfTask } from "../models/interfaces";
import TaskCard from "./TaskCard";

function SubjectList({ data }) {
    return (
        <>
            <div className="flex items-center flex-col gap-5">
                {data.map((_item, i: number) => (
                    <TaskCard
                        key={i}
                        id={i.toString()}
                        title="Lecture notes"
                        subjectName="Math"
                        files={[]}
                        type={ETypeOfTask.LAB}
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
