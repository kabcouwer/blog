import Image, { StaticImageData } from "next/image";
import BadgeArray from "../../components/badgeArray";
import Link from "next/link";

type ProjectCardProps = {
  details: {
    id: string;
    title: string;
    subtitle: string;
    dates: string;
    image: StaticImageData;
    demo: string;
    source: string;
    imageCredit?: string;
    skills: {
      color: string;
      text: string;
      bgColor: string;
    }[];
    description: JSX.Element;
  };
};

export default function ProjectCardLayout(props: ProjectCardProps) {
  const {
    title,
    subtitle,
    dates,
    image,
    demo,
    source,
    imageCredit,
    skills,
    description,
    id,
  } = props.details;

  return (
    <div id={id} className="">
      <div className="container mx-auto px-5 py-24 cursor-auto">
        <div className="md:w-4/5 mx-auto flex flex-wrap">
          <div className="md:w-1/2 w-full md:h-auto md:py-8 object-center cursor-auto">
            <Image alt="Book Image" className="rounded" src={image} priority />
            {imageCredit && (
              <figcaption
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: imageCredit }}
              />
            )}
          </div>
          <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0 cursor-auto">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 cursor-auto">
              {title}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1 cursor-auto">
              {dates}
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1 cursor-auto">
              {subtitle}
            </h2>
            <div className="md:flex mb-4">
              <BadgeArray skills={skills} />
            </div>
            <p className="leading-relaxed max-w-[460px]">{description}</p>
            <div className="flex mt-6 items-center pb-5 mb-5">
              <div className="flex">
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="transform mouse-pointer bg-gray-900 text-sm text-white mr-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link href={source} target="_blank" rel="noopener noreferrer">
                  <button className="transform mouse-pointer bg-gray-900 text-sm text-white mr-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
