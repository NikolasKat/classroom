import { useSelector } from "react-redux";
import SubjectList from "../components/SubjectList";
import { RootState } from "../store/store";

export default function MyCoursesPage() {
    const data = useSelector((state: RootState) => state.subjects.subjects);

    return (
        <div className="px-9">
            {data.length ? (
                <SubjectList />
            ) : (
                <div className="flex flex-col items-center gap-7">
                    <h1 className="font-medium">У Вас нет активных курсов!</h1>

                    <button
                        type="button"
                        className="px-6 w-auto py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Присоединиться к курсу
                    </button>
                </div>
            )}
        </div>
    );
}
