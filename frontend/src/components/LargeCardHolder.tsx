import LargeCard from "./LargeCard"; // Adjust path if needed

interface CardData {
  imageSrc: string;
  heading: string;
  tags: string[];
  body: string;
}

interface LargeCardHolderProps {
  cards: CardData[];
}

const LargeCardHolder: React.FC<LargeCardHolderProps> = ({ cards }) => {
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
