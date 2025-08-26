"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LOTTIE_URL =
  "https://lottie.host/c25c9b9c-a125-4ae8-8a69-29899de44e8a/lzMYyxaP4U.lottie";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }} // slide completely off the top
      transition={{ duration: 0.8 }}
    >
      <div className="w-[30vw] h-[30vw]">
        <DotLottieReact src={LOTTIE_URL} loop autoplay />
      </div>
    </motion.div>
  );
}
