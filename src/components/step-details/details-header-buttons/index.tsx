import React from 'react'
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";

const DetailHeaderButtons = () => {
  return (
    <div className="flex items-center gap-[11px] mr-6">
        <button type="button">
          <MapSvg />
        </button>
        <button type="button">
        <EyeSvg />
        </button>
      </div>
  )
}

export default DetailHeaderButtons