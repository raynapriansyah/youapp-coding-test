"use client";

import React, { useState } from "react";
import { Input } from "~/components/ui/input";

export default function AddInterest() {
  const [interests, setInterests] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addInterest = () => {
    if (input.trim() && !interests.includes(input.trim())) {
      setInterests([...interests, input.trim()]);
      setInput("");
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setInterests(interests.filter((i) => i !== interestToRemove));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addInterest();
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-2 mb-2">
          {interests.map((interest) => (
            <div
              key={interest}
              className="flex items-center bg-gray-500 text-[12px] text-white px-2 py-1 rounded-sm"
            >
              {interest}
              <button
                onClick={() => removeInterest(interest)}
                className="text-[12px] ml-2 bg-transparent hover:bg-transparent text-white"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="text-[13px] border-solid border-gray-600 focus:outline-none focus:ring-1"
          placeholder=""
        />
      </div>
    </div>
  );
}
