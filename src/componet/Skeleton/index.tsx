import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={240}
    height={325}
    viewBox="0 0 240 325"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    padding-bottom={10}
    border-radius={5}
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="320" height="366" />
  </ContentLoader>
);

export default Skeleton;
