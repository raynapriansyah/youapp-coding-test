"use client";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-row items-center">
        <ChevronLeft size={35} />
        Back
      </div>
      <div>
        <div className="mt-8 text-3xl font-bold p-8">Login</div>
        <div className="mb-4">
          <Input
            className="text-sm px-8"
            id="email"
            type="email"
            placeholder="Enter Username/Email"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            className="text-sm px-8"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            required
          />
          <div
            role="button"
            onClick={(event) => {
              event.stopPropagation();
              setShowPassword(!showPassword);
            }}
            className="absolute right-10 top-[295px]"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </div>
        </div>
        <div className="grid gap-2">
          <Button
            type="submit"
            className="w-full h-14 text-md bg-gradient-to-r from-teal-400 to-blue-500 opacity-30"
          >
            Login
          </Button>
        </div>
        <div className="mt-12 text-center text-[13px]">
          No account?{" "}
          <Link href="/register">
            <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 text-transparent underline decoration-amber-300 bg-clip-text">
              Register here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
