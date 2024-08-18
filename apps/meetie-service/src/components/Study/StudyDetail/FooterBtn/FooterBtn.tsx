import Button from "@/components/common/Button/Button";

const FooterBtn = () => {
  return (
    <div className="fixed bottom-0 bg-white px-4 py-6 flex gap-5 items-center">
      <div className="flex flex-col items-center">
        <p className="text-medium-12 text-blue-300">참여가능인원</p>
        <p className="text-medium-18">
          <span className="text-primary-500">0명</span> /{" "}
          <span className="text-[#707070]">4명</span>
        </p>
      </div>
      <Button variant="disabled" size="md">
        <p className="text-bold-16 text-white">아직 대기 인원이 없습니다</p>
      </Button>
    </div>
  );
};

export default FooterBtn;
