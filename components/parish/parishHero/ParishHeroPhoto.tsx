import Image from "next/image";
import styled from "styled-components";

const ParishHeroPhoto = () => {
  return (
    <ContainerStyle>
      <Image
        src="/images/background.png"
        alt="Zdjęcie koscioła"
        fill
        priority={true}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </ContainerStyle>
  );
};

export default ParishHeroPhoto;

const ContainerStyle = styled.div`
  width: 50%;
  margin-left: 20%;
  height: 750px;
  background-color: #ececec;
  position: relative;
  border-bottom-left-radius: 40px;
  clip-path: path(
    "M0 0H784V722C784 733.046 775.046 742 764 742H226.881C168.327 742 118.323 699.741 108.56 642.007L0 0Z"
  );
  & > img {
    position: absolute;
    height: 100%;
  }
`;
