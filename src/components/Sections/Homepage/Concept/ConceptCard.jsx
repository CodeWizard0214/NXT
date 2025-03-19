import Image from "next/image";

const ConceptCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-[3.39px] border border-white/[.15] px-6 xl:px-10 pt-16 pb-9 md:pb-16 lg:pb-9 h-64 sm:h-auto">
      <Image src={icon} alt="" width="27" height="27" />
      <h3 className="mt-4 text-xl font-medium">{title}</h3>
      <p className="mt-2 text-sm text-oslo-gray max-w-md">{description}</p>
    </div>
  );
};

export default ConceptCard;
