import React from "react";

interface EducationCardProps {
  title: string;
  description: string;
  image: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ title, description, image }) => {
  return (
    <div className="overflow-hidden transition-transform duration-300 transform bg-white shadow-md w-52 sm:w-64 md:w-52 rounded-xl hover:scale-105">
      {/* Full-width image */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-28 sm:h-32 md:h-36"
      />

      {/* Text section */}
      <div className="p-3 text-center sm:p-4">
        <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">
          {title}
        </h3>
        <p className="text-xs italic text-gray-600 sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
