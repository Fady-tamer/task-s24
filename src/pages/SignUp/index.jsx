import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpValidation } from "./validation";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="signUp h-dvh flex justify-center items-center">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpValidation}
      >
        <Form className="min-w-120 p-8 flex flex-col gap-3 rounded-2xl bg-[#ccc]">
          <p className="mb-4 text-3xl text-center font-bold">Sign Up</p>
          <Field
            name="fullName"
            placeholder="Full Name ....."
            className="px-5 py-3 outline-0 rounded-lg bg-white"
          />
          <ErrorMessage
            name="fullName"
            component={`div`}
            className="text-red-600 font-bold"
          />
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
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password ....."
            className="px-5 py-3 outline-0 rounded-lg bg-white"
          />
          <ErrorMessage
            name="confirmPassword"
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
            I Alrady Have An Account |{" "}
            <Link to={"/login"} className="underline text-blue-600">
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
