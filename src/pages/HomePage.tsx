import SubjectList from "../components/SubjectList";

const data: number[] = [1, 2, 3, 4, 5, 9]; // я так понимаю, что сюда будем с бэка отправлять данные.

export default function HomePage() {
    return (
        <section className="p-9 flex justify-center items-center">
            {/* <h2>Home page</h2> */}
            {data.length ? (
                <SubjectList data={data} />
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
        </section>
    );
}
