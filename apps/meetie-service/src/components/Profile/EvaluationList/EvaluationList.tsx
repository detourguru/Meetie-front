import EvaluationCard from "./EvaluationCard/EvaluationCard";

const EvaluationList = () => {
  return (
    <div className="flex flex-col gap-2 px-4 my-8">
      <p className="text-bold-18">받은 스터디 매너 평가</p>
      <EvaluationCard content="친절하고 열정이 넘쳐요 😘" count={11} />
      <EvaluationCard content="정보를 잘 공유해줘요 😘" count={8} />
      <EvaluationCard content="피드백을 구체적으로 잘해줘요 😘" count={2} />
      <EvaluationCard content="시간 약속을 너무 잘 지켜요 😘" count={5} />
    </div>
  );
};

export default EvaluationList;
