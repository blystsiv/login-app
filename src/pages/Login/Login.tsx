/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Button } from '../../components';
import User from '../../models/User';
import { showToastError } from '../../utils/toastHelpers';

interface LoginFormValues {
  usernameOrEmail: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onFormSubmit = (data: LoginFormValues) => {
    try {
      const registeredUsersString = localStorage.getItem('registeredUsers');

      if (registeredUsersString?.length) {
        const registeredUsers: User[] = JSON.parse(registeredUsersString);

        const userMatch = registeredUsers.find(
          (user) =>
            user.username === data.usernameOrEmail || user.email === data.usernameOrEmail,
        );

        if (!userMatch) {
          showToastError('Username or email not found', {
            onClose: () => {
              navigate('/signup');
            },
          });
        } else if (userMatch.password !== data.password) {
          showToastError('Incorrect password');
        } else {
          localStorage.setItem('loginedUser', JSON.stringify(userMatch));

          navigate('/home');
        }
      } else {
        showToastError('Account not found', {
          onClose: () => {
            navigate('/signup');
          },
        });
      }
    } catch (error) {
      console.error('Error processing login:', error);
    }
  };

  return (
    <>
      <form
        className="bg-white border p-8 max-w-md shadow-md rounded-md"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="text-center">
          <img src="../../../src/assets/logo.png" alt="Logo" className="mx-auto w-40" />
          <h1 className="text-4xl my-4 font-semibold">Welcome!</h1>
          <p className="text-lg">Login to your account!</p>
        </div>

        <div className="my-4">
          <input
            type="text"
            placeholder="Username or email"
            {...register('usernameOrEmail', {
              required: 'Username or email is required',
              minLength: {
                value: 8,
                message: 'Username or email must be at least 5 \n chars',
              },
            })}
            className={`border border-gray-300 p-2 w-full rounded-md ${
              errors.usernameOrEmail ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.usernameOrEmail && (
            <span className="text-red-500 text-sm mt-1 flex text-left ml-2">
              {errors.usernameOrEmail.message}
            </span>
          )}
        </div>

        <div className="my-4">
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 chars',
              },
            })}
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

        <Button variant="primary" type="submit">
          Sign In
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

        <p className="mt-4 text-sm text-center ">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up here
          </Link>
        </p>
      </form>
      <ToastContainer />
    </>
  );
};
