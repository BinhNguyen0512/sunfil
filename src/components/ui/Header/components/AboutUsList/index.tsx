import {
  aboutUsList,
  AboutUsType,
} from "../../constants/navigationBarConstant";

interface Props {
  classNameWrapper?: string;
}

export const AboutUsList = (props: Props) => {
  const { classNameWrapper } = props;
  return (
    <div className={classNameWrapper}>
      <div className={"flex w-full items-center gap-4"}>
        {aboutUsList.map((aboutUs: AboutUsType) => {
          return (
            <a
              key={aboutUs.id}
              href={aboutUs.link}
              className="text-md hover:text-brand-500 font-medium text-black transition-all duration-300"
            >
              {aboutUs.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
