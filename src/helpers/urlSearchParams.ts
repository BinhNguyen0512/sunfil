import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

import { handleFilter } from "./filter";

//Search params
export const toggleMultiValueQueryParam = (
  searchParams: ReadonlyURLSearchParams,
  key: string,
  value: string,
  router: AppRouterInstance,
  pathname: string,
) => {
  const params = new URLSearchParams(searchParams.toString());
  const currentValues = params.getAll(key);

  const updatedValues = currentValues.includes(value)
    ? handleFilter(currentValues, value)
    : [...currentValues, value];

  params.delete(key);

  updatedValues.forEach((v) => params.append(key, v));

  router.push(pathname + "?" + params.toString(), { scroll: false });
};

//Search params receive multiple
export const toggleMultiParams = (
  updates: Record<string, string>,
  router: AppRouterInstance,
  pathname: string,
) => {
  const params = new URLSearchParams(window.location.search);

  Object.entries(updates).forEach(([key, value]) => {
    params.set(key, value);
  });

  router.push(pathname + "?" + params.toString(), { scroll: false });
};
