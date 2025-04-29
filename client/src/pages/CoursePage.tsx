import { useParams } from "react-router-dom";
import TaskList from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { ERoles } from "../models/interfaces";

export default function CoursePage() {
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const roleStatus = useSelector(
        (state: RootState) => state.user.user.userRole,
    );

    const data = [1, 2, 3, 4, 5];

    return (
        <section className="px-9">
            <h3 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold mb-8 text-center">
                {id} course Page
            </h3>
            <TaskList data={data} idCourse={id} />
            {roleStatus === ERoles.TEACHER ? (
                <TaskForm subjectName={id} />
            ) : null}
        </section>
    );
}
