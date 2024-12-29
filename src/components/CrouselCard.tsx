import Link from "next/link";

interface CarouselProps {
  item: { icon: any; title: string; link: string;}; // Accepts an array  of items as a prop
  bgcolor: string; // Background color prop
}
const CarouselCard: React.FC<CarouselProps> = ({ item, bgcolor }) => {
  // console.log("------------------", item.link);
  return (
    <Link href={item.link}>
      <div
        className={`${bgcolor === "white"
          ? "bg-blue-background bg-cover bg-no-repeat bg-center"
          : "bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white"
          } rounded-lg px-2 py-4 h-full text-center`}
      >
        {/* Icon */}
        <div className="flex justify-center items-center  mx-auto mb-4 w-20 h-20 rounded-full bg-blue">
          {item.icon}
        </div>
        {/* Title */}
        <h3 className="text-white text-lg">{item.title}</h3>
      </div>
    </Link>
  );
};

export default CarouselCard;
