import { motion } from "framer-motion";

interface Props {
  title: string;
  year: string;
  text: string;
}

export default function SklisItems({ title, year, text }: Props) {
  return (
    <motion.div
      className="mb-10 md:mb-16 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="inline-block border-2 border-emerald-400 text-emerald-400 px-5 py-1.5 font-semibold text-sm rounded-sm">
        {year}
      </div>

      <h3 className="mt-5 text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
        {title}
      </h3>

      <p className="mt-3 text-gray-400 text-base leading-relaxed opacity-90">
        {text}
      </p>
    </motion.div>
  );
}
