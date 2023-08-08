import { useForm } from 'react-hook-form';

import { Button } from '../../components';

export const Signup = () => {
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
        <div className="mb-6 text-center">
          <img
            src="../../../src/assets/logo.png"
            alt="Your Logo"
            className="mx-auto w-40"
          />
          <h1 className="text-4xl my-4 font-semibold">Welcome!</h1>
          <p className="text-lg">Create your account!</p>
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
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* Email input */}
        <div className="mb-4">
          <input
            type="email" // Changed to type="email" for proper email validation
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.email.message}
            </span>
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
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Sign-up button */}
        <Button variant="primary" type="submit">
          Sign up
        </Button>

        {/* "Or Sign up with" section */}
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
      </form>
    </>
  );
};
