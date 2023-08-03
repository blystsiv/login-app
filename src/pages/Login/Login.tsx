/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        className="bg-white border p-8 max-w-md shadow-md rounded-md"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {/* Header Section */}
        <div className="text-center">
          <img src="../../../src/assets/logo.png" alt="Logo" className="mx-auto w-40" />
          <h1 className="text-4xl my-4 font-semibold">Welcome back!</h1>
          <p className="text-lg">Login to your account!</p>
        </div>

        {/* Username input */}
        <div className="my-4">
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            className={`border border-gray-300 p-2 w-full rounded-md ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* Password input */}
        <div className="my-4">
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            className={`border border-gray-300 p-2 w-full rounded-md ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Sign-in button */}
        <Button type="primary">Sign In</Button>

        {/* "Or Sign in with" section */}
        <div className="mt-4 text-center">
          <h2 className="text-lg mb-4">Or Sign up with</h2>
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

        <p className="mt-4 text-sm text-center ">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up here
          </Link>
        </p>
      </form>
    </>
  );
};
