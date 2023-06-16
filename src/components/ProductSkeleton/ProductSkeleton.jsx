import "./ProductSkeleton.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

export default function ProductSkeleton() {
  return (
    <div>
      <Skeleton width={205} height={260} />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
