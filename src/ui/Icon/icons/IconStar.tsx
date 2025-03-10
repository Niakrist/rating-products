import React from "react";

type IIconStarProps = React.SVGProps<SVGSVGElement>;

const IconStar: React.FC<IIconStarProps> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={className}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor">
      <path d="M19.948 7.557a1.072 1.072 0 0 0-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0 0 10 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 0 0 1.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18Z"></path>
    </svg>
  );
};

export default IconStar;
