interface InfoCardProps {
  title: string;
  subtitle: string;
  rightItems: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, rightItems }) => {
  return (
    <div className="mx-auto w-[500px] border-[4px] border-[#1F0033] flex shadow-sm">
      {/* Left Section */}
      <div className="w-[350px] p-4 flex flex-col justify-center">
        <p className="text-sm text-gray-600">{subtitle}</p>
        <h2 className="text-xl font-semibold text-[#1F0033] mt-1">{title}</h2>
      </div>

      {/* Right Section */}
      <div className="w-[150px] flex flex-col justify-between p-2 gap-2">
        {rightItems.map((item, index) => (
          <div
            key={index}
            className="border-[4px] border-[#1F0033] flex items-center justify-center h-[60px] text-[20px] text-[#1F0033]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
