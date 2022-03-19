import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
const Home: React.FC = () => {
  return <>
    <IGHeader />
    <IGContainer>
      <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            {/* <IGStory />
            <IGPostList /> */}
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            {/* <IGProfile /> */}
          </div>
        </div>
    </IGContainer>
  </>;
};

export default Home;
