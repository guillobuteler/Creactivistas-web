
import { QuestionKey } from "@/app/actus/mbti.types";

type RatingProps = {
  selected: number;
  updateScore: (arg:number) => void;
  minScore?: number;
  maxScore?: number;
};
type Rating = {
  score: number;
  active: boolean;
};
export default function Rating({
  selected,
  updateScore,
  minScore = 0,
  maxScore = 5,
}: RatingProps) {
  
  const boxes: Rating[] = [];
  
  for (let i = minScore; i <= maxScore; i++) {
    boxes.push({ score: i, active: i <= selected });
  }

  return (
    <>
      <div data-testid="rating-container" className="flex items-center gap-2">
        {/* 
          Star shape
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        */}
        {boxes.map(({ score, active }, index) => (
          <div
            data-testid="score-container"
            key={index}
            className={`flex flex-col gap-1 ${active ? "active-score" : ""}`}
          >
            <svg
              className={`w-4 h-4 cursor-pointer ${
                active ? "text-teal-400" : "text-gray-300"
              }`}
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                updateScore(score)
              }}
              data-testid="score"
            >
              <rect width="16" height="16" rx="4" />
            </svg>
            <span>{score}</span>
          </div>
        ))}
      </div>
    </>
  );
}
