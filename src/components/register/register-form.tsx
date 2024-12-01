"use client";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function RegisterForm() {
  const [createPassword, setCreatePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-row items-center">
        <Link href="#" className="flex flex-rows items-center text-[13px]">
          <ChevronLeft size={30} />
          Back
        </Link>
      </div>
      <div>
        <div className="mt-8 text-3xl font-bold p-8">Register</div>
        <div className="mb-4">
          <Input
            className="p-6 text-[13px] focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="email"
            type="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            className="p-6 text-[13px] focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="username"
            type="text"
            placeholder="Create Username"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            className="p-6 text-[13px] focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="password"
            type={createPassword ? "text" : "password"}
            placeholder="Create Password"
            required
          />
          <div
            role="button"
            onClick={(event) => {
              event.stopPropagation();
              setCreatePassword(!createPassword);
            }}
            className="absolute right-10 top-[375px]"
          >
            {createPassword ? (
              <Eye className="text-yellow-100" />
            ) : (
              <EyeOff className="text-yellow-100" />
            )}
          </div>
        </div>
        <div className="mb-8">
          <Input
            className="p-6 text-[13px] focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="password"
            type={confirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <div
            role="button"
            onClick={(event) => {
              event.stopPropagation();
              setConfirmPassword(!confirmPassword);
            }}
            className="absolute right-10 top-[447px]"
          >
            {confirmPassword ? (
              <Eye className="text-yellow-100" />
            ) : (
              <EyeOff className="text-yellow-100" />
            )}
          </div>
        </div>
        <div className="grid gap-2">
          <Button
            type="submit"
            className="w-full h-14 text-md bg-gradient-to-r from-teal-300 to-blue-500 opacity-30"
          >
            Register
          </Button>
        </div>
        <div className="mt-12 text-center text-[13px]">
          Have an account?{" "}
          <Link href="/login">
            <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 text-transparent underline decoration-amber-300 bg-clip-text">
              Login here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
