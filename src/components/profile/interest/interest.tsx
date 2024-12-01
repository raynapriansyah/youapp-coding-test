import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import AddInterest from "./add-interest";
import { Button } from "~/components/ui/button";

export default function Interest() {
  return (
    <div>
      <div className="flex justify-between items-center py-10 px-2">
        <div className="flex flex-rows items-center text-[13px]">
          <Link
            href="/profile"
            className="flex flex-rows items-center text-[13px]"
          >
            <ChevronLeft size={30} />
            Back
          </Link>
        </div>
        <div className="text-[13px] text-blue-300">Save</div>
      </div>
      <div className="p-8">
        <div className="bg-gradient-radial font-bold text-[13px] from-amber-300 via-white to-amber-300 text-transparent decoration-amber-300 bg-clip-text">
          <h1>Tell everyone about yourself</h1>
        </div>
        <div className="text-lg font-bold">
          <h1>What interest you?</h1>
        </div>
        <div className="mt-10">
          <AddInterest />
        </div>
      </div>
    </div>
  );
}
