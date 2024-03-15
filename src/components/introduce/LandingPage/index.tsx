import Image from 'next/image';

import FirstGif from 'public/gif/LandingPage/first.gif';
import FirstSideGif from 'public/gif/LandingPage/first_side.gif';
import SecondGif from 'public/gif/LandingPage/second.gif';
import ThirdGif from 'public/gif/LandingPage/third.gif';
import FourthGif from 'public/gif/LandingPage/fourth.gif';
import FifthGif from 'public/gif/LandingPage/fifth.gif';
import SeventhGif from 'public/gif/LandingPage/seventh.gif';
import FirstSectionImage from 'public/assets/images/LandingPage/first.png';
import SecondSectionImage from 'public/assets/images/LandingPage/second.png';
import ThirdSectionImage from 'public/assets/images/LandingPage/third.png';
import FourthSectionImage from 'public/assets/images/LandingPage/fourth.png';
import FifthSectionImage from 'public/assets/images/LandingPage/fifth.png';
import SixthSectionImage from 'public/assets/images/LandingPage/sixth.png';
import SeventhSectionImage from 'public/assets/images/LandingPage/seventh.png';
import EighthSectionImage from 'public/assets/images/LandingPage/eighth.png';
import CTAButton from '@components/common/CTAButton';

export default function LandingPage() {
  // 알림 신청 버튼
  const handleClickSubscribeButton = () => {};

  // 이벤트 페이지 복사 버튼
  const handleClickCopyButton = () => {};
  return (
    <div className="w-full text-center">
      <div className="relative">
        <Image src={FirstSectionImage} alt="첫 섹션 이미지" />
        <Image
          src={FirstGif}
          alt="첫 섹션 영상"
          className="absolute top-[22%]"
        />
        <Image
          src={FirstSideGif}
          alt="첫 섹션 사이드 영상"
          className="absolute w-[27%] top-[40.3%] left-[16.5%] rounded-[7px] overflow-hidden"
        />
        <Image
          src={SecondGif}
          alt="두번째 섹션 영상"
          className="absolute bottom-[9%]"
        />
      </div>
      <div className="relative">
        <Image src={SecondSectionImage} alt="두번째 섹션 이미지" />
        <Image
          src={ThirdGif}
          alt="네번째 섹션 영상"
          className="absolute rounded-t-[18px] overflow-hidden w-[40%] bottom-[22.3%] left-[50%] -translate-x-[50%]"
        />
      </div>
      <div className="relative">
        <Image src={ThirdSectionImage} alt="세번째 섹션 이미지" />
        <Image
          src={FourthGif}
          alt="네번째 섹션 영상"
          className="absolute rounded-t-[18px] overflow-hidden w-[40%] bottom-[42.5%] left-[50%] -translate-x-[50%]"
        />
        <Image
          src={FifthGif}
          alt="다섯번째 섹션 영상"
          className="absolute bottom-[15%]"
        />
      </div>
      <div className="relative">
        <Image src={FourthSectionImage} alt="네번째 섹션 이미지" />
      </div>
      <div className="relative">
        <Image src={FifthSectionImage} alt="다섯번째 섹션 이미지" />
        <Image
          src={SeventhGif}
          alt="일곱번째 섹션 영상"
          className="absolute w-full bottom-[27%]"
        />
      </div>
      <div className="relative">
        <Image src={SixthSectionImage} alt="여섯번째 섹션 이미지" />
      </div>
      <div className="relative">
        <Image src={SeventhSectionImage} alt="일곱번째 섹션 이미지" />
        <CTAButton
          className="absolute bottom-[10%] left-0 right-0 mx-auto w-[calc(100%-40px)]"
          onClick={handleClickSubscribeButton}
        >
          지금 <strong className="text-[#F5FA0E]">알림 신청</strong>하러 가기
        </CTAButton>
      </div>
      <div className="relative">
        <Image src={EighthSectionImage} alt="여덟번째 섹션 이미지" />
        <CTAButton
          className="absolute bottom-[10%] left-0 right-0 mx-auto w-[calc(100%-40px)]"
          onClick={handleClickCopyButton}
        >
          <strong className="text-[#F5FA0E]">이벤트 페이지</strong> 링크
          복사하기
        </CTAButton>
      </div>
    </div>
  );
}
