import SubjectCard from "./SubjectCard";

// пока пусть будет так. Потом переделаем уже под бэк
function SubjectList({ data }) {
    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {data.map((item, i: number) => (
                    <SubjectCard
                        key={i}
                        color="#106464"
                        bgImg="#cfdf68"
                        subjectName="Math"
                        teacherName="Jhon Uezzers"
                        isConnected={true}
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
