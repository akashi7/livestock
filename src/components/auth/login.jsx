import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authAdmin } from '../../state/slices/auth.slice';
import { InputText } from '../common/input';
import { Spinner } from '../common/spinner';
import { loginSchema } from './validations';
const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successFull = () => {
    navigate('/vt/');
  };
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values) => {
    dispatch(authAdmin({ data: values, success: successFull }));
  };
  return (
    <div className="h-[100vh] w-[100%] items-center justify-center flex flex-row">
      <div className="w-[27%] h-[500px] flex justify-center items-start flex-col bg-white shadow-md border border-gray-200 lg:p-8 bg-login">
        <h2 className="ml-7 mt-1 text-white">Welcome Back</h2>
        <h1 className="ml-6 text-white text-[2rem]">LiveStock bank</h1>
      </div>
      <div className="p-4 w-[27%] h-[500px] bg-white  border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-12" action="#">
            <h5 className="text-xl font-medium text-center text-blue dark:text-white">
              Login
            </h5>
            <InputText
              name="email"
              type="text"
              placeholder="example@gmail.com"
            />
            <InputText
              name="password"
              type="password"
              placeholder="..........."
            />
            <div className="flex items-start">
              <Link
                to="/forgot-password"
                className=" text-md text-blue hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            {loading && (
              <div className="flex items-center h-5 justify-center">
                <Spinner />
              </div>
            )}
            <div className="flex items-center justify-center">
              {!loading && (
                <button
                  type="submit"
                  className="w-full h-[50px] bg-blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LOG IN
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Login;
