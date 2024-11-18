"use client";

import { ChevronLeft, PencilLine } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

export default function Profile() {
  const [about, setAbout] = useState(false);

  return (
    <div>
      <div className="flex flex-rows mt-10 items-center">
        <div className="flex flex-rows items-center">
          <ChevronLeft size={35} />
          Back
        </div>
        <div className="ml-28">
          {" "}
          <h1>@johndoe123</h1>
        </div>
      </div>
      <div className="mt-8 p-2">
        <Card className="h-[200px] p-2 bg-[#1b2931] border-none text-white">
          <div className="py-40">
            <h1>@johndoe123,</h1>
          </div>
        </Card>
      </div>
      <div className="mt-8 p-2">
        <Card className="h-[150px] p-6 space-y-10 bg-[#0D1D23] border-none text-white">
          <div className="flex flex-rows justify-between">
            <h1>About</h1>
            <PencilLine onClick={() => setAbout(!about)} />
          </div>
          <div>
            {about ? (
              <div>form</div>
            ) : (
              <h1>Add in your to help others know you better</h1>
            )}
          </div>
        </Card>
      </div>
      <div className="mt-2 p-2">
        <Card className="h-[150px] p-6 space-y-10 bg-[#0D1D23] border-none text-white">
          <div className="flex flex-rows justify-between">
            <h1>Interest</h1>
            <PencilLine />
          </div>
          <div>
            <h1>Add in your interest to find a better match</h1>
          </div>
        </Card>
      </div>
    </div>
  );
}
