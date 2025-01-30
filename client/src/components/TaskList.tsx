import { ETypeOfTask, UserCardData } from "../models/interfaces";
import TaskCard from "./TaskCard";

function SubjectList(props: UserCardData[]) {
    return (
        <>
            <div className="flex items-center flex-col gap-5">
                {props.map((_item, i: number) => (
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
