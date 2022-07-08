import { Layout } from "antd";
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <Layout className="h-[100vh] justify-center items-center flex">
            <div class="p-4 w-[27%] h-[500px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-12" action="#">
                    <h5 class="text-xl font-medium text-center text-blue dark:text-white ">
                        Login
                    </h5>
                    <div class="relative z-0">
                        <input
                            type="text"
                            id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_standard"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Work E-Mail
                        </label>
                    </div>
                    <div class="relative z-0">
                        <input
                            type="text"
                            id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            for="floating_standard"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>
                    <div class="flex items-start">
                        <Link
                            to="#"
                            class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Lost Password?
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            class="w-2/6 bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
export default Login;
