import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

export default function MainCarousel() {
  const sourceImg = [
    "https://cdn.discordapp.com/attachments/938684956916449330/941198256132739102/photo_2022-02-10_14.05.38.jpeg",
    "https://cdn.discordapp.com/attachments/938684956916449330/941171778619863090/photo_2022-02-10_12.19.47.jpeg",
    "https://cdn.discordapp.com/attachments/938684956916449330/941210226579894302/photo_2022-02-10_14.50.07.jpeg",
    "https://cdn.discordapp.com/attachments/938684956916449330/941211195686387732/photo_2022-02-10_14.54.42.jpeg",
    "https://cdn.discordapp.com/attachments/938684956916449330/941171802858717295/photo_2022-02-10_12.19.50.jpeg",
  ];

  const settings = {
    dots: true, // 밑에 dot으로 사진 갯수 표현
    infinite: true, // 사진의 마지막에서 1번째 사진으로 넘어갈지 말지 설정
    speed: 500, // 넘어갈 때 속도
    slidesToShow: 1, // 화면에 몇 개를 보여줄 지
    slidesToScroll: 1, // 넘어갈 때 n개만큼 넘어감
    autoplay: true, //자동으러 넘어가기 설정
    autoplaySpeed: 5000, // 자동으로 넘어가는 시간
  };

  return (
    <MainCarouselContainer>
      <Slider {...settings}>
        {sourceImg.map((el, idx) => {
          return <img src={el} key={idx} alt="" />;
        })}
      </Slider>
    </MainCarouselContainer>
  );
}

export const MainCarouselContainer = styled.div`
  justify-content: center;
  width: 100vw;
  height: 600px;

  img {
    width: 100%;
    height: 600px;
    /* height: 100%; */
  }
`;
