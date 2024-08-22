import SettingCard from "./setting-card";
import ImageSlider from "./slider";

const MeterialPreview = () => {
    return (
        <div className="meterial-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
            <SettingCard/>
            <ImageSlider />
        </div>
    )
}

export default MeterialPreview;

