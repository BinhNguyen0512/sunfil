import clsx from "clsx";

export const Overlay = () => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-[1023] h-full w-full bg-black opacity-40",
        "transition-all duration-500",
      )}
    />
  );
};
