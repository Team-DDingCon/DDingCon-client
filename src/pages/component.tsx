import Button from "@components/common/button";

 function ComponentPage() {
  return(
    <main className="pt-4 bg-white h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold">공통 컴포넌트</h1>
      <h2 className="pt-2 text-2xl font-bold">🚀 알림 선택용 버튼</h2>
      <p>기본</p>
        <Button content="7일 전(클릭)" isSelected={false} size='small' onClick={() => console.log("Button Clicked!")}/>
      <p>선택</p>
        <Button content="7일 전" isSelected={true} size="full"/>
    </main>
  )
}

export default ComponentPage;
