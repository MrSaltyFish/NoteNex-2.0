interface LargeCardProps {
  imageSrc: string;
  heading: string;
  body: string;
  tags: string[];
}

const LargeCard: React.FC<LargeCardProps> = ({
  imageSrc,
  heading,
  tags,
  body,
}) => {
  return (
    <div className="flex w-[1024px] h-[200px] border-[4px] border-[#1F0033] shadow-sm overflow-hidden">
      {/* Left: Image */}
      <img
        src={imageSrc}
        alt={heading}
        className="w-[200px] h-[200px] object-cover"
      />

      {/* Right: Content */}
      <div className="flex-1 p-6 flex flex-col gap-y-2">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1F0033] mb-2">
          {heading}
        </h2>

        {/* Tags (Placeholder container) */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-sm bg-[#1F0033] text-white px-3 py-1 h-[24px] flex items-center"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Body */}
        <p className="text-gray-700 text-sm">{body}</p>
      </div>
    </div>
  );
};

export default LargeCard;
