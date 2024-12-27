import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

enum UserStatus {
   STUDENT = "student",
   TEACHER = "teacher",
}

interface NewUserData {
   firstName: string;
   lastName: string;
   email: string;
   password: string | number;
   status: UserStatus;
}

const RegisterPage = () => {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<NewUserData>();

   const onSubmit: SubmitHandler<NewUserData> = (data) => console.log(data);

   return (
      <div className="pt-64">
         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
               <input
                  type="text"
                  placeholder=" "
                  id="floating_firstName"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("firstName", { required: true, maxLength: 20 })}
               />
               <label
                  htmlFor="floating_firstName"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  First name
               </label>
               {errors.firstName?.type === "required" && (
                  <p role="alert">First name is required</p>
               )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
               <input
                  type="text"
                  placeholder=" "
                  id="floating_lastName"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("lastName", { required: true, maxLength: 20 })}
               />
               <label
                  htmlFor="floating_lastName"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Last name
               </label>
               {errors.lastName?.type === "required" && (
                  <p role="alert">Surname is required</p>
               )}
            </div>
            <div className="relative z-0 w-full mb-5 group text-lg">
               <Controller
                  name="status"
                  control={control}
                  defaultValue={UserStatus.STUDENT}
                  render={({ field }) => (
                     <select
                        {...field}
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     >
                        {" "}
                        {Object.values(UserStatus).map((status) => (
                           <option
                              key={status}
                              value={status}
                              className="text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
                           >
                              {" "}
                              {status}{" "}
                           </option>
                        ))}{" "}
                     </select>
                  )}
               />
               {errors.status?.type === "required" && (
                  <p role="alert">First name is required</p>
               )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
               <input
                  type="email"
                  placeholder=" "
                  id="floating_email"
                  className="block py-2.5 px-0 w-full ttext-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("email", { required: true })}
               />
               <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Email address
               </label>
               {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
               )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
               <input
                  type="password"
                  placeholder=" "
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("password", { required: true })}
               />
               <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Password
               </label>
               {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
               )}
            </div>
            <button
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Register
            </button>
         </form>
         <h3 className="text-xl mt-5 text-center">
            or{" "}
            <Link to="/login" className="font-semibold ">
               Log in
            </Link>{" "}
            if you already have an account
         </h3>
      </div>
   );
};

export default RegisterPage;
