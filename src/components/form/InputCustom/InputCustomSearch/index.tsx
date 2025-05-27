"use client";

import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { CameraIcon, SearchIcon } from "@/public/icons";

import { ButtonCustom } from "../../ButtonCustom";
import { InputCustom } from "..";

interface SearchForm {
  search: string;
}

export const InputCustomSearch = () => {
  const { control, handleSubmit } = useForm<SearchForm>({
    defaultValues: {
      search: "",
    },
  });

  const [value, setValue] = useState<string>("");

  const onSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <form onSubmitCapture={handleSubmit(onSubmit)} className="flex flex-1">
      <div className="flex-1 px-4">
        <Combobox value={value}>
          <Controller
            name="search"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputCustom
                value={value}
                placeholder={"Tìm kiếm sản phẩm"}
                onChange={(event) => {
                  const value = event.target.value;
                  onChange(value);

                  setValue(value);
                }}
                className={"h-12 placeholder:relative placeholder:-z-10"}
                customText={
                  !value && (
                    <span className="animate-placeholder-slide pointer-events-none absolute top-1/2 left-2 -z-1 h-10 w-[154px] -translate-y-1/2 bg-white px-2" />
                  )
                }
                suffixIcon={
                  <div className="flex items-center gap-8">
                    <div className="cursor-pointer">
                      <CameraIcon />
                    </div>
                    <ButtonCustom
                      type="submit"
                      className="bg-brand-500 flex w-20 cursor-pointer items-center justify-center rounded-full p-6 py-3"
                    >
                      <div>
                        <SearchIcon />
                      </div>
                    </ButtonCustom>
                  </div>
                }
              />
            )}
          />
        </Combobox>
      </div>
    </form>
  );
};
