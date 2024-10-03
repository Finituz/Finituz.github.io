import Table from "@/app/components/Table/Table";
import Image, { StaticImageData } from "next/image";

export default function Card({
  title,
  imagePath,
  imageAlt,
  isReleased = false,
}: {
  title: string;
  imagePath: string | StaticImageData;
  imageAlt: string;
  isReleased?: boolean;
}) {
  return (
    <Table
      className="relative text-center overflow-hidden hover:scale-110 transition-all hover:shadow-neon duration-500 w-fit"
      showTitle
      title={title}
    >
      {!isReleased ? (
        <div className="absolute flex items-center justify-center bottom-10 left-5 bg-black w-[150%] h-10 rotate-[-45deg]">
          Coming soon!
        </div>
      ) : null}

      <Image
        src={imagePath}
        alt={imageAlt}
        className="w-full h-full rounded-md"
      />
    </Table>
  );
}
