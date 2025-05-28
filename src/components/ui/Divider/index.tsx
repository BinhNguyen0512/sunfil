import clsx from "clsx";

interface Props {
  className?: string;
}

const Divider = (props: Props) => {
  const { className } = props;
  return <div className={clsx("bg-gray-divider h-px w-full", className)} />;
};

export default Divider;
