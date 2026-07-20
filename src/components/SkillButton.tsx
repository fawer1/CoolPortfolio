import { motion } from "framer-motion";

type SkillButtonProps = {
    text: string;
    color?: string;
    className?: string;
};

export default function SkillButton({
    text,
    color = "#91080f",
    className = "",
}: SkillButtonProps) {
    return (
        <motion.span
            initial={false}
            whileHover={{ backgroundColor: "rgba(145, 8, 15, 0.12)", scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className={
                `inline-flex items-center justify-center rounded-xl border mr-3 mt-3 px-4 py-2 text-sm font-bold tracking-wide lora ` +
                `transition-colors duration-200 ${className}`
            }
            style={{
                borderColor: color,
                color,
                boxShadow: `inset 0 0 0 1px ${color}1f`,
            }}
        >
            {text}
        </motion.span>
    );
}
