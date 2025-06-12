import InfoCard from "../components/InfoCard";

// Simulated backend response
const cardData = [
  {
    title: "Compiler Design",
    subtitle: "Next Class",
    rightItems: ["C-104", "2", "Three"],
  },
  {
    title: "Operating Systems",
    subtitle: "Upcoming",
    rightItems: ["C-201", "4", "Today"],
  },
  {
    title: "Green Skills Workshop",
    subtitle: "Seminar",
    rightItems: ["Lab-4", "9:30am", "Today"],
  },
];

const InfoCardHolder = () => {
  return (
    <div className="grid grid-cols-[500px_500px_350px] gap-x-8">
      {cardData.map((card, idx) => (
        <InfoCard
          key={idx}
          title={card.title}
          subtitle={card.subtitle}
          rightItems={card.rightItems}
        />
      ))}
    </div>
  );
};

export default InfoCardHolder;
