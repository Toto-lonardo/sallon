import React from "react";

type Props = {
  classNameContainer?: string;
  classNameSal?: string;
  classNameLon?: string;
};
const Logo: React.FC<Props> = ({
  classNameContainer,
  classNameSal,
  classNameLon,
}) => {
  return (
    <div className={classNameContainer}>
      <span className={`text-verde ${classNameSal}`}>Sal</span>
      <span className={`text-arancione ${classNameLon}`}>lon</span>
    </div>
  );
};

export default Logo;
