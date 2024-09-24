import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spin } from "hamburger-react";
import { routes } from "./landing-page";
import Link from "next/link";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="ml-auto md:hidden" ref={ref}>
      <Spin toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[4rem] p-5 pt-0 bg-white shadow-xl"
          >
            <ul className="grid gap-2">
              {routes.map((route, i) => {
                const { path, title } = route;

                return (
                  <motion.li
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + i / 10,
                    }}
                    whileHover={{
                      background:
                        "linear-gradient(to bottom left, #9f82ff, #3b24b5)",
                      transition: { duration: 0.15, ease: "easeIn" },
                    }}
                    className="w-full p-[0.5rem] rounded-xl bg-gradient-to-br from-[#ab9fff] to-[#513cd9] flex justify-center items-center"
                  >
                    <Link
                      key={i}
                      href={path}
                      className="text-md text-white font-bold"
                    >
                      {title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
