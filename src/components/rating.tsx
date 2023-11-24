type RatingProps = {
  minScore?: number;
  maxScore?: number;
  selected: number;
  setSelected: () => void;
};

export default function Rating({
  minScore = 0,
  maxScore = 5,
  selected,
  setSelected,
}: RatingProps) {
  return <div>WIP</div>;
}
