import TaskCard from "./TaskCard";

// пока пусть будет так. Потом переделаем уже под бэк
function SubjectList({ data }) {
    return (
        <>
            <div className="flex items-center flex-col gap-5">
                {data.map((item, i: number) => (
                    <TaskCard
                        key={i}
                        id={i}
                        title="Lecture notes"
                        subjectName="Math"
                        files={[]}
                        isCompleted={false}
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
