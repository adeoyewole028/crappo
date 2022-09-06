import React from "react";
import ContentIllustration from "./Content-illustration";
import ContentInfo from "./Content-info";

const Content = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between">
      <ContentIllustration />
      <ContentInfo />
    </div>
  );
};

export default Content;
