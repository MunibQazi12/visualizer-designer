import Image from "next/image"
import Map from"@/img/map.png";
import CloseImageSvg from "@/../public/svgs/close-img";
import OpenCardInFull from "@/../public/svgs/open-img";

interface I_Props {
    mapToggle: () => void;
}

const LocationMap = (props: I_Props) => {
    const {mapToggle} = props;

  return (
    <div className="w-[369px] h-[302px] bg-white rounded-[20px] absolute left-[62px] bottom-[73px]">
      <div className="flex justify-end items-center gap-[26px] pt-[22px] px-[21px]">
        <button type="button" onClick={mapToggle}>
          <CloseImageSvg />
        </button>
        <button type="button">
          <OpenCardInFull />
        </button>
      </div>
      <div className="pr-[11px] pl-[15px] pb-10">
        <Image src={Map} alt="Map" />
      </div>
    </div>
  );
};

export default LocationMap;
