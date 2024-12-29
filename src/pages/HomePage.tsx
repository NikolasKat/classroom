import SubjectCard from "../components/SubjectCard";

export default function HomePage() {
    return (
        <section className="p-9 flex justify-between flex-wrap">
            {/* <h2>Home page</h2> */}
            <SubjectCard
                teacherName="Мария Семёновна"
                subjectName="Математика"
                bgImg="pink"
                color="red"
            />
            <SubjectCard
                teacherName="Зинаида Борисовна"
                subjectName="История Украины"
                bgImg="cyan"
                color="purple"
            />
        </section>
    );
}
