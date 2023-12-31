import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import cx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const MediaPreview = ({
  title,
  text,
  url,
  image,
  type = "post",
}: {
  title: string
  text: string
  url: string
  image?: string
  type?: "youtube" | "post"
}) => {
  const [width, height] = type === "post" ? [1920, 960] : [1280, 720]

  return (
    <div>
      <Link
        href={url}
        className={cx("text-gray-800 group block", FOCUS_VISIBLE_OUTLINE)}>

        {image ? (
          <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
            {type === "youtube" ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors ">
              </div>
            ) : null}

            <Image src={image} width={width} height={height} alt={""} />
          </div>
        ) : null}
        <h2 className="text-lg font-bold group-hover:text-sky-500">
          {title}
        </h2>
        <p className="text-gray-800 line-clamp-2">{text}</p>

      </Link>
    </div>
  );
}
