import clsx from "clsx";
import { Fragment } from "react";

import { ImageCustom } from "../../ImageCustom";
import { WrapperPage } from "../../WrapperPage";
import {
  ContentType,
  footerInformationList,
  FooterInformationType,
} from "./constants";
import { Industry } from "./Industry";

export const FooterInformation = () => {
  const renderFooterInformationElement = (content: ContentType) => {
    return (
      <>
        {content.name ? (
          <li>
            <a
              href={content.link}
              className={clsx(
                "text-secondary lg:text-md text-base font-semibold",
                "group relative",
              )}
            >
              <span
                className={clsx(
                  "absolute bottom-1",
                  "opacity-0 group-hover:opacity-100",
                  "-translate-x-2 bg-black transition-transform duration-300 group-hover:translate-x-0",
                  "inline-block h-0.5 w-4",
                )}
              />

              <span className="inline-block transition-all duration-300 group-hover:translate-x-6 hover:text-black">
                {content.name}
              </span>
            </a>
          </li>
        ) : (
          <ImageCustom
            className="cursor-pointer"
            src={content.src || ""}
            height={64}
            width={230}
            alt={content.src || ""}
          />
        )}
      </>
    );
  };

  const renderFooterInformationList = (
    footerInformation: FooterInformationType,
  ) => {
    return (
      <div
        className={clsx(
          `flex flex-col gap-4 lg:gap-6`,
          footerInformation.id === "viet-hung"
            ? "col-span-2 lg:col-span-3"
            : "",
        )}
      >
        <p className="text-brand-800 min-h-8 text-lg font-semibold lg:min-h-12 lg:text-2xl">
          {footerInformation.title}
        </p>
        <ul className="flex flex-col gap-4">
          {footerInformation.contents.map(
            (content: ContentType, index: number) => {
              return (
                <Fragment key={index}>
                  {renderFooterInformationElement(content)}
                </Fragment>
              );
            },
          )}
        </ul>
      </div>
    );
  };

  return (
    <WrapperPage
      classnameWrapper={`bg-[url(/images/footer-background.jpg)] bg-no-repeat lg:bg-size-[100%] bg-center lg:py-24 py-12`}
    >
      <div className="grid grid-cols-2 gap-12 lg:grid-cols-6 lg:gap-24">
        {footerInformationList.map(
          (footerInformation: FooterInformationType) => (
            <Fragment key={footerInformation.id}>
              {renderFooterInformationList(footerInformation)}
            </Fragment>
          ),
        )}

        <Industry
          classNameWrapper="block lg:hidden"
          classNameElement="flex flex-col justify-between items-start h-full"
        />
      </div>

      <Industry
        classNameWrapper="hidden lg:block"
        classNameElement="flex items-center justify-between py-4"
      />
    </WrapperPage>
  );
};
