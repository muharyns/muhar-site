import {
  CheckIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function CardItem({ listitem }) {
  return (
    <div className="bg-invert grid grid-cols-1 rounded-3xl shadow-lg p-2">
      <div key={listitem.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            alt={listitem.imageAlt}
            src={listitem.imageSrc}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </div>
      <div className="p-3">
        <div class="md:flex md:flex-row sm:flex-col text-left  items-start">
          <div class="sm:basis-full md:basis-2/3">
            {listitem.tech.map((item, key) => (
              <a
                href="#"
                className="text-xs bg-main-20 text-main-50 rounded p-1 mr-1.5 inline-block my-1.5"
                key={key}
              >
                {item}
              </a>
            ))}
          </div>

          <div class="sm:basis-full md:basis-1/3 flex flex-col sm:items-start md:items-end">
            <p className="text-xs">Company</p>
            <p className="text-xs font-bold ">{listitem.company}</p>
          </div>
        </div>

        <div className=" text-left mt-10 ">
          {/* <div className="flex md:flex-col lg:flex-row justify-between gap-3"> */}
          <div className="grid grid-cols-2">
            <a
              href={listitem.href}
              className="text-lg font-bold mb-1 flex items-center gap-3"
            >
              {listitem.title}
            </a>
            <div className="flex flex-row gap-2 justify-end">
              {listitem.href && (
                <Link
                  href={listitem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="size-5 text-slate-400 hover:bg-slate-200 hover:rounded p-0.5 focus-visible:outline hover:cursor-pointer" />
                </Link>
              )}

              {/* <CodeBracketIcon className="size-5 text-slate-400 hover:bg-slate-200 hover:rounded p-0.5 focus-visible:outline hover:cursor-pointer" /> */}
            </div>
          </div>

          <p className="text-sm text-slate-500">{listitem.description}</p>
        </div>
      </div>
    </div>
  );
}
