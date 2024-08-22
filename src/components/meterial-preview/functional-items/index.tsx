import Play from "../../../../public/svgs/play";
import Location from "../../../../public/svgs/location";
import Box from "../../../../public/svgs/box";
import Camera from "../../../../public/svgs/camera";
import LargerView from "../../../../public/svgs/larger-view";
import ScaleIcon from "../../../../public/svgs/scale-icon";
import Button from "@/constants/button";

const functionalButtons = [
  { id: 1, icon: <Play /> },
  { id: 2, icon: <Location /> },
  { id: 3, icon: <Box /> },
  { id: 4, icon: <ScaleIcon /> },
  { id: 5, icon: <Camera /> },
  { id: 6, icon: <LargerView /> },
];

const FunctionalItems = () => {
  return (
    <div className="bg-customWhite-500 mt-8 px-6 rounded-full h-12 max-w-[392px] flex justify-between mx-auto items-center">
      {functionalButtons.map((info) => {
        const { id, icon } = info;
        return (
          <div key={id}>
            <Button iconStart={icon} />
          </div>
        );
      })}
    </div>
  );
};

export default FunctionalItems;
