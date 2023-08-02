import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    // Add your logic for handling form submission here
  };

  return (
    <>
      <form
        className="bg-white border p-8 max-w-md shadow-md rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Header Section */}
        <img src="../src/assets/logo.png" alt="Your Logo" className="mx-auto w-40" />
        <div className="mb-6">
          <h1 className="text-4xl my-4 font-semibold text-center">Welcome back!</h1>
          <p className="text-lg text-center">Login to your account!</p>
        </div>

        {/* Username input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}
        </div>

        {/* Password input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        {/* Sign-in button */}
        <Button type="primary">Sign In</Button>

        {/* "Or Sign in with" section */}
        <div className="mt-6 text-center">
          <h2 className="text-lg mb-2">Or Sign in with</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Google</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Twitter
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-center">
          Dont have an account? <Link to="/register">Sign up here</Link>
        </p>
      </form>
    </>
  );
};
