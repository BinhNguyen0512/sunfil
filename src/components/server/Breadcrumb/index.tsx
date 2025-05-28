import Link from "next/link";

import { BreadcrumbIcon } from "@/public/icons";

export interface BreadcrumbType {
  link?: string;
  name: string;
}

interface Props {
  listBreadCrumb: BreadcrumbType[];
}

export const BreadcrumbCustom = (props: Props) => {
  const { listBreadCrumb } = props;

  return (
    <div className="h-full w-full">
      <div className="flex h-full items-center gap-2 px-4 lg:gap-4 lg:px-0">
        {listBreadCrumb.map((breadCrumb: BreadcrumbType, index: number) => (
          <div key={index} className="flex gap-2 lg:gap-4">
            {breadCrumb.link ? (
              <Link
                className={`lg:text-md text-disabled font-base line-clamp-1 text-base lg:font-semibold ${
                  index === 0 ? "w-max" : ""
                } ${
                  index !== listBreadCrumb.length - 1 ? "cursor-pointer" : ""
                } `}
                href={breadCrumb.link}
              >
                {breadCrumb.name}
              </Link>
            ) : (
              <span
                className={`lg:text-md text-brand-500 font-base line-clamp-1 text-base lg:font-semibold`}
              >
                {breadCrumb.name}
              </span>
            )}
            <div className="flex items-center">
              {index !== listBreadCrumb.length - 1 && (
                <BreadcrumbIcon className={"h-3 w-2"} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
