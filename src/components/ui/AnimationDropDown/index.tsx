import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

interface Props {
  isHover: boolean;
  children: ReactNode;
}

export const AnimationDropDown = (props: Props) => {
  const { isHover, children } = props;
  return (
    <motion.div
      className={clsx("absolute top-[100%] bottom-0 left-0 z-1 cursor-default")}
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      {children}
    </motion.div>
  );
};
