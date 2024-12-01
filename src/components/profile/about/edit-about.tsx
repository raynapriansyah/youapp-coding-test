"use client";

import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Plus } from "lucide-react";

export type FormData = {
  image: string | null;
  displayName: string;
  gender: string;
  birthday: string;
  horoscope: string;
  zodiac: string;
  height: string;
  weight: string;
};

export default function UserInfoForm({
  defaultValue,
}: {
  defaultValue?: FormData;
}) {
  const [formData, setFormData] = useState<FormData>(
    defaultValue ?? {
      image: null,
      displayName: "",
      gender: "",
      birthday: "",
      horoscope: "",
      zodiac: "",
      height: "",
      weight: "",
    }
  );

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="flex flex-rows items-center">
        <button
          type="button"
          className="h-[57px] w-[57px] opacity-50 mr-4 flex justify-center items-center border border-gray-600 bg-gray-800 text-white rounded-[17px]"
        >
          <Plus size={30} />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </button>
        <span className="text-[12px]">Add image</span>
      </div>

      <div className="space-y-2 max-w-lg mx-auto">
        <div className="flex flex-rows items-center justify-between">
          <Label htmlFor="displayName">
            <span className="text-[13px] opacity-50">Display Name:</span>
          </Label>
          <Input
            className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="displayName"
            placeholder="Enter name"
            value={formData.displayName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("displayName", e.target.value)
            }
          />
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="gender">
            Gender:
          </Label>
          <div className="h-[36px] w-[202px]">
            <Select
              onValueChange={(value) => handleChange("gender", value)}
              value={formData.gender}
            >
              <SelectTrigger className="justify-end border-muted-foreground text-[13px] data-[placeholder]:justify-end gap-x-3 ">
                <SelectValue className="" placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="text-[13px]">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="birthday">
            Birthday:
          </Label>
          <div className="h-[36px] w-[202px]">
            <Input
              className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
              id="birthday"
              type="text"
              inputMode="numeric"
              placeholder="DD MM YYYY"
              value={formData.birthday}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, "");
                let formatted = input.slice(0, 2);
                if (input.length > 2) formatted += " " + input.slice(2, 4);
                if (input.length > 4) formatted += " " + input.slice(4, 8);
                handleChange("birthday", formatted);
              }}
            />
          </div>
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="horoscope">
            Horoscope:
          </Label>
          <Input
            className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="horoscope"
            placeholder="--"
            value={formData.horoscope}
            onChange={(e) => handleChange("horoscope", e.target.value)}
          />
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="zodiac">
            Zodiac:
          </Label>
          <Input
            className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
            id="zodiac"
            placeholder="--"
            value={formData.zodiac}
            onChange={(e) => handleChange("zodiac", e.target.value)}
          />
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="height">
            Height:
          </Label>
          <div className="relative flex items-center group">
            <Input
              id="height"
              className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
              placeholder="Add height"
              inputMode="numeric"
              value={formData.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-rows items-center justify-between">
          <Label className="text-[13px] opacity-50" htmlFor="weight">
            Weight:
          </Label>
          <div className="relative flex items-center group">
            <Input
              className="h-[36px] w-[202px] text-[13px] text-right border-solid border-gray-600 focus:outline-none focus:ring-1 focus:placeholder-transparent"
              id="weight"
              placeholder="Add weight"
              inputMode="numeric"
              value={formData.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
