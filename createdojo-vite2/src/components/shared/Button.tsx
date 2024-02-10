import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  const ButtonHoverAnimation = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  };

  const buttonClass = `cursor-pointer ${className}`;

  return (
    <motion.div
      whileHover={ButtonHoverAnimation}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </motion.div>
  );
};
export default Button;
