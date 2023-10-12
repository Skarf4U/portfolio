import { LIGHT_COLORS } from "@/lib/constants";
import { shuffleArray } from "@/lib/shuffleArray";
import { useIsFontReady } from "@/lib/useIsFontReady";
import delbaImg from "@/public/delba.jpg";
import { RainbowHighlight } from "@/ui/RainbowHighlight";
import Image from "next/image";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import { Button } from "./Button";

export const About = () => {
  // Before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady();

  const [colors, setColors] = React.useState<string[]>([]);

  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <div className="container px-4 mx-auto">
      <div className={cx("px-4 mx-auto")}>
        <RoughNotationGroup show={isFontReady}>
          <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
            Hello! I'm Adi, a{" "}
            <RainbowHighlight color={colors[0]}>
              full-stack developer
            </RainbowHighlight>{" "}
            based in{" "}
            <RainbowHighlight color={colors[2]}>Israel</RainbowHighlight>.
          </h1>

          <div className="mt-4 text-gray-700">
            <p>
              I am recent high school graduate at the age of 17. Over the past
              five years, I've been dedicated to{" "}
              <RainbowHighlight color={colors[1]}>
                self-learning
              </RainbowHighlight>{" "}
              in the field of programming - mainly focused on{" "}
              <RainbowHighlight color={colors[2]}>
                full-stack development
              </RainbowHighlight>
              /web development.
            </p>
            <p className="mt-2">
              I am now{" "}
              <RainbowHighlight color={colors[0]}>
                actively seeking employment opportunities
              </RainbowHighlight>{" "}
              that will allow me to conduct research and development while
              effectively applying my current expertise, furthering my
              knowledge, acquiring new skills, and finding fulfillment in the
              process.{" "}
              <RoughNotation
                type="circle"
                multiline={true}
                animationDuration={1500}
                animationDelay={1700}
                strokeWidth={2}
                iterations={3}
                padding={5}
                color={colors[1]}
              >
                <a className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                  Hire me?
                </a>
              </RoughNotation>
            </p>
          </div>
        </RoughNotationGroup>

        <div className="mt-6 space-y-3 md:space-y-0 md:space-x-4 md:flex">
          <Button href="https://www.linkedin.com/in/adiamar/" target="_blank">
            View Linkedin
          </Button>
          <Button
            color="secondary"
            href="https://github.com/Skarf4U"
            target="_blank"
          >
            View Github
          </Button>
        </div>
      </div>
    </div>
  );
};

About;
