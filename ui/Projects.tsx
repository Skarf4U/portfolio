import { FOCUS_VISIBLE_OUTLINE, LIGHT_COLORS } from "@/lib/constants";
import { useHover } from "@react-aria/interactions";
import cx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";
import { PostMeta } from "types/post";

type Project = {
  name: string;
  description: string;
  image?: string;
  url?: string;
};

const Project = ({ project }: { project: Project }) => {
  let { hoverProps, isHovered } = useHover({});

  return (
    (<Link
      href={project.url ? project.url : "/"}
      className={cx("block", FOCUS_VISIBLE_OUTLINE)}>

      <div {...hoverProps}>
        {project.image ? (
          <Tilt
            transitionSpeed={10000}
            tiltMaxAngleY={8}
            tiltMaxAngleX={8}
            scale={1.01}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareBorderRadius="11px"
          >
            <div style={{ fontSize: 0 }}>
              <Image
                src={project.image}
                alt="Project Preview"
                width={500}
                height={300}
                priority={true}
              />
            </div>
          </Tilt>
        ) : null}
        <p className="mt-6 text-xl font-bold text-gray-800">{project.name}</p>
        <p className="mt-2 text-gray-800 line-clamp-2">
          {project.description}
        </p>
        {project.url ? (
          <div className="mt-3">
            <span className="font-medium text-gray-800 underline decoration-sky-300" style={{ textDecorationThickness: isHovered ? 2 : undefined }}>
              View Project
            </span>
          </div>
        ) : null}
      </div>

    </Link>)
  );
};

export const Projects = ({ projects }: { projects: PostMeta[] }) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
      <h4 className="mt-2 text-gray-500">
        Some of the side projects I'm currently working on.
      </h4>
      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
        {projects.map((project, index) => {
          return (
            <div key={index} className="mt-12 lg:w-1/2 lg:px-6">
              <Project
                project={{
                  name: project.title,
                  description: project.description,
                  image: `/${project.image}`,
                  url: `/blog/${project.slug}`,
                }}
              />
            </div>
          );
        })}
      </div>
      <section className="stack_stack__iZkUS stack customers_root__6St4m"></section>
    </div>
  );
};
