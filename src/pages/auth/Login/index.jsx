import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidation } from "./validation";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="signUp h-dvh flex justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidation}
      >
        <Form className="max-w-100 w-[90%] p-8 flex flex-col gap-3 rounded-2xl bg-[#ccc]">
          <p className="mb-4 text-3xl text-center font-bold">Login</p>
          <Field
            name="email"
            placeholder="Email ....."
            className="px-5 py-3 outline-0 rounded-lg bg-white"
          />
          <ErrorMessage
            name="email"
            component={`div`}
            className="text-red-600 font-bold"
          />
          <Field
            type="password"
            name="password"
            placeholder="Password ....."
            className="px-5 py-3 outline-0 rounded-lg bg-white"
          />
          <ErrorMessage
            name="password"
            component={`div`}
            className="text-red-600 font-bold"
          />
          <button
            type="submit"
            className="px-5 py-3 font-bold rounded-lg bg-green-500 cursor-pointer"
          >
            submit
          </button>
          <p className="mx-0 my-3.5 text-center font-bold">
            I Don't Have An Account |{" "}
            <Link to={"/signUp"} className="underline text-blue-600">
              Sign Up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
