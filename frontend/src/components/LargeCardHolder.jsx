import LargeCard from "./LargeCard"; // Adjust path if needed

const LargeCardHolder = ({ cards }) => {
  return (
    <div className="flex flex-col gap-8">
      {cards.map((card, index) => (
        <LargeCard
          key={index}
          imageSrc={card.imageSrc}
          heading={card.heading}
          tags={card.tags}
          body={card.body}
        />
      ))}
    </div>
  );
};

export default LargeCardHolder;
