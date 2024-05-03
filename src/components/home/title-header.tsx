import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

type Props = {
  title: string;
  path?: string;
};
const TitleHeader = (props: Props) => {
  return (
    <div
      className="text-container title-header"
      style={{ marginBottom: "20px" }}
    >
      <h1 style={{ fontSize: "16px", textAlign: "left" }}>{props.title}</h1>
      {props.path && (
        <Link
          href={`/${props.path}`}
          className="flex items-center gap-2"
          style={{ fontSize: "16px", textAlign: "left", color: "#C1EF0C" }}
        >
          View all <FaArrowRight />
        </Link>
      )}
    </div>
  );
};

export { TitleHeader };
