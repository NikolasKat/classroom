import { SubmitHandler, useForm } from "react-hook-form";
import { ETypeOfTask, TaskData } from "../models/interfaces";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

export function TaskForm({ subjectName }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TaskData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit: SubmitHandler<TaskData> = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            alert("Проблемы при создании задачи!");
            reset();
            console.log(error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-100 mt-20 py-9 px-9 rounded-2xl lg:w-4/5 mx-auto"
        >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">
                        Create new task
                    </h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        Fill out the form to create a task. All fields are
                        <span className="text-red-500 uppercase">
                            {" "}
                            required
                        </span>
                        .
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <div className="mt-2">
                                <label
                                    htmlFor="taskName"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Task name
                                </label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                                    <input
                                        id="taskName"
                                        type="text"
                                        placeholder="task-name"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        {...register("title", {
                                            required: true,
                                        })}
                                    />
                                    {/* {errors.title?.type === "required" && (
                                        <p role="alert">
                                            Name for the task is required
                                        </p>
                                    )} */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    required
                                    id="about"
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    defaultValue={""}
                                    {...register("description", {
                                        required: true,
                                        maxLength: 300,
                                    })}
                                />
                                {/* {errors.description?.type === "required" && (
                                    <p role="alert">
                                        Description for the task is required
                                    </p>
                                )}
                                {errors.description?.type === "maxLength" && (
                                    <p role="alert">
                                        Description shouldn`t be more than 300
                                        symbols
                                    </p>
                                )} */}
                            </div>
                            <p className="mt-3 text-sm/6 text-gray-600">
                                Write a few sentences about the task.
                            </p>
                        </div>
                        <fieldset>
                            <legend className="text-sm/6 font-semibold text-gray-900">
                                Type of the task
                            </legend>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        required
                                        id="push-email"
                                        type="radio"
                                        value={ETypeOfTask.NOTES}
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        {...register("type", {
                                            required: true,
                                        })}
                                    />
                                    {/* {errors.type?.type === "required" && (
                                        <p role="alert">
                                            Choose the type for this task!
                                        </p>
                                    )} */}
                                    <label
                                        htmlFor="push-email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Lecture material
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        required
                                        id="push-nothing"
                                        type="radio"
                                        value={ETypeOfTask.LAB}
                                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        {...register("type", {
                                            required: true,
                                        })}
                                    />
                                    {/* {errors.type?.type === "required" && (
                                        <p role="alert">
                                            Choose the type for this task!
                                        </p>
                                    )} */}
                                    <label
                                        htmlFor="push-nothing"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Practical work
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Add educational material
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    {/* <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto size-12 text-gray-300"
                                    /> */}
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                        >
                                            <span className="p-1">
                                                Upload a file
                                            </span>
                                            <input
                                                required
                                                id="file-upload"
                                                type="file"
                                                className="sr-only"
                                                {...register("file", {
                                                    required: true,
                                                })}
                                            />
                                            {/* {errors.file?.type ===
                                                "required" && (
                                                <p role="alert">
                                                    Upload the educational file
                                                    for this task!
                                                </p>
                                            )} */}
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
