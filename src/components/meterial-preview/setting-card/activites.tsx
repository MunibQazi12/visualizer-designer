import { I_FeaturesElements } from "@/utils/Interfaces/Products";
import Walls from "@/../public/svgs/walls";
import Sink from "@/../public/svgs/sink";
import SecurityWall from "@/../public/svgs/security-wall";
import LightIcon from "@/../public/svgs/light-icon";
import { E_FeatureImage } from "@/enums/Products";

interface I_Props {
  FeaturesElements: I_FeaturesElements[];
}

const featureImageHandler = (featuresImage: string) => {
  switch (featuresImage) {
    case E_FeatureImage.Walls:
      return <Walls />;
    case E_FeatureImage.Sink:
      return <Sink />;
    case E_FeatureImage.SecurityWall:
      return <SecurityWall />;

    case E_FeatureImage.LightIcon:
      return <LightIcon />;
    default:
      return <Walls />;
  }
};

const Activites = (props: I_Props) => {
  const { FeaturesElements } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-[26px] mr-[110px]">
      {FeaturesElements.map((info) => {
        const { featuresImage, id } = info;
        return (
          <button
            key={id}
            className="2xl:h-[52px] h-10 w-10 2xl:w-[52px] bg-white rounded-full flex justify-center items-center"
          >
            {featureImageHandler(featuresImage)}
          </button>
        );
      })}
    </div>
  );
};

export default Activites;
