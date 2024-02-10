// Box component
const Box = () => {
  const numBoxes = 24;

  return (
    <>
      {Array.from({ length: numBoxes }).map((_, index) => (
        <div
          key={index}
          className="border-2 border-beige-100 bg-white-beige-50 rounded-xl h-14 w-14"
        ></div>
      ))}
    </>
  );
};

// Boxes component
interface BoxesProps {
  title: string;
  className?: string;
}

export const Boxes = ({ title, className }: BoxesProps) => {
  return (
    <div>
      <div
        className={`text-beige-100 text-5xl pl-6 pt-2 tracking-wider ${className}`}
      >
        {" "}
        {title}{" "}
      </div>
      <div className="flex items-center">
        <div className="border-2 border-beige-100 bg-white-beige-50 rounded-xl mx-8 grid grid-cols-4 gap-2 p-4">
          <Box />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
