import { useParams } from "react-router-dom";
import TaskList from "../components/TaskList";

export default function CoursePage() {
    const { id } = useParams();

    const data = [1, 2, 3, 4, 5];

    return (
        <section className="px-9">
            <h3 className="text-5xl text-center font-bold mb-8">
                {id} course Page
            </h3>
            <TaskList data={data} />
        </section>
    );
}
