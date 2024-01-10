import MyCarousel from "./MyCarousel";

const MyHome = () => {
  return (
    <>
      <MyCarousel searchValue="Joker" />
      <MyCarousel searchValue="Transformers" />
      <MyCarousel searchValue="Iron Man" />
      <MyCarousel searchValue="Barbie" />
      <MyCarousel searchValue="Spider-Man" />
      <MyCarousel searchValue="" />
    </>
  );
};
export default MyHome;
