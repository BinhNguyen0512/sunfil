import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  isTrigger: boolean;
  children: ReactNode;
}

export const AnimationScrollDown = (props: Props) => {
  const { isTrigger, children } = props;
  return (
    <motion.ul
      className={clsx("h-0 w-full overflow-hidden")}
      animate={
        isTrigger
          ? {
              height: "fit-content",
            }
          : {
              height: 0,
            }
      }
    >
      {children}
    </motion.ul>
  );
};
