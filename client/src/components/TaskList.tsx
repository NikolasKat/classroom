import TaskCard from "./TaskCard";
import { ETypeOfTask } from "./TaskCard";
import { UserData } from "./UserCard";

// пока пусть будет так. Потом переделаем уже под бэк
function SubjectList(props: UserData[]) {
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
