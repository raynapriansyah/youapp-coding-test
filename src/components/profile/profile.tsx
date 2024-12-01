"use client";

import { ChevronLeft, Ellipsis, PencilLine } from "lucide-react";
import { Card } from "../ui/card";
import { useState } from "react";
import EditAbout, { FormData } from "./about/edit-about";
import Link from "next/link";

export default function Profile() {
  const [about, setAbout] = useState(false);
  const handleToggleAbout = () => {
    setAbout((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between mt-10 items-center px-2">
        <Link href="#" className="flex flex-rows items-center text-[13px]">
          <ChevronLeft size={30} />
          Back
        </Link>
        <div className="text-[13px]">
          <h1>@johndoe123</h1>
        </div>
        <div>
          <Ellipsis />
        </div>
      </div>
      <div className="mt-8 p-2">
        <Card className="flex justify-between h-[200px] p-2 bg-[#1b2931] border-none text-white">
          <div className="mt-40">
            <h1>@johndoe123,</h1>
          </div>
          <div className="p-2">
            <PencilLine size={17} />
          </div>
        </Card>
      </div>
      <div className="mt-4 p-2">
        <Card
          className={`p-5 space-y-8 bg-[#0D1D23] border-none text-white transition-all duration-200 ${
            about ? "h-[511px]" : "h-[150px]"
          }`}
        >
          <div className="flex flex-rows justify-between">
            <h1 className="text-sm">About</h1>
            {about ? (
              <button
                onClick={handleToggleAbout}
                className="flex items-center space-x-2"
              >
                <span className="bg-gradient-radial font-bold text-[12px] from-amber-300 via-white to-amber-300 text-transparent decoration-amber-300 bg-clip-text">
                  Save & Update
                </span>
              </button>
            ) : (
              <button
                onClick={handleToggleAbout}
                className="flex items-center space-x-2"
              >
                <PencilLine size={17} />
              </button>
            )}
          </div>
          <div>
            {about ? (
              <div>
                <EditAbout />
              </div>
            ) : (
              <h1 className="text-sm opacity-50">
                Add in your to help others know you better
              </h1>
            )}
          </div>
        </Card>
      </div>

      <div className="p-2">
        <Card className="p-5 space-y-8 bg-[#0D1D23] border-none text-white transition-all duration-200 h-[150px]">
          <div className="flex flex-rows justify-between">
            <h1 className="text-sm">Interest</h1>
            <Link
              href="/profile/interest"
              className="flex items-center space-x-2"
            >
              <PencilLine size={17} />
            </Link>
          </div>
          <div>
            <h1 className="text-sm opacity-50">
              Add in your interest to find a better match
            </h1>
          </div>
        </Card>
      </div>
    </div>
  );
}
