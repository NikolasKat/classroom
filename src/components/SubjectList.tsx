import SubjectCard from "./SubjectCard";

function SubjectList({ data }) {
    return (
        <>
            <div className="flex justify-center gap-16 flex-wrap">
                {data.map((item, i: number) => (
                    <SubjectCard
                        key={i}
                        color="cyan"
                        bgImg="red"
                        subjectName="Math"
                        teacherName="Jhon Uezzers"
                    />
                ))}
            </div>
        </>
    );
}

export default SubjectList;
