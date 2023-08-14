/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { Button } from '../../components';
import User from '../../models/User';
import { showToastWarning } from '../../utils/toastHelpers';

export const Signup = () => {
  const navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem('registeredUsers');

      if (storedUsers) {
        setRegisteredUsers(JSON.parse(storedUsers));
      }
    } catch (error) {
      console.error('Error retrieving users from local storage:', error);
    }
  }, []);

  const handleFormSubmit = (data: User) => {
    try {
      let isEmailAlreadyUsed = false;
      let isUsernameAlreadyUsed = false;

      registeredUsers.forEach((user) => {
        if (user.email === data.email) {
          isEmailAlreadyUsed = true;
        }
        if (user.username === data.username) {
          isUsernameAlreadyUsed = true;
        }
      });

      if (isUsernameAlreadyUsed || isEmailAlreadyUsed) {
        showToastWarning('You already have an account, Sign In here!', {
          onClose: () => {
            navigate('/login');
          },
        });
        return;
      }

      const updatedUsers = [...registeredUsers, data];

      setRegisteredUsers(updatedUsers);
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

      navigate('/login');
    } catch (error) {
      console.error('Error processing user data:', error);
    }
  };

  return (
    <>
      <form
        className="bg-white border p-8 max-w-md shadow-md rounded-md"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-6 text-center">
          <img
            src="../../../src/assets/logo.png"
            alt="Your Logo"
            className="mx-auto w-40"
          />
          <h1 className="text-4xl my-4 font-semibold">Welcome!</h1>
          <p className="text-lg">Create your account!</p>
        </div>

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

        <div className="mb-4">
          <input
            type="email"
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

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 w-full rounded-md"
            {...register('password', {
              required: 'Password required',
              minLength: {
                value: 8,
                message: 'Min 8 chars',
              },
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Passwords do not match';
                }
                if (!/[A-Z]/.test(val)) {
                  return 'Need an uppercase letter';
                }
                if (!/[a-z]/.test(val)) {
                  return 'Need a lowercase letter';
                }
                if (!/[0-9]/.test(val)) {
                  return 'Need a digit';
                }
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button variant="primary" type="submit">
          Sign up
        </Button>

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
      <ToastContainer />
    </>
  );
};
