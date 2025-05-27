import clsx from "clsx";

interface Props {
  className?: string;
}

const Divider = (props: Props) => {
  const { className } = props;
  return <div className={clsx("h-px w-full bg-gray-300", className)} />;
};

export default Divider;
