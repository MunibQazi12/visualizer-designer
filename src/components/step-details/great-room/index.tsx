import React from "react";
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorGreatRoom, I_AccordionData } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  greatRoom: ExteriorGreatRoom;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const GreatRoom = (props: I_Props) => {
  const { greatRoom, accordion, setAccordion } = props;
  return (
    <>
      <CardHeader
        name="Great Room"
        className={`${accordion.greatRoom.value ? 'show' : 'hide'}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"greatRoom"}
      />

      <div className="mt-4 pl-5">
        <CardDetails  className={`${accordion.greatRoom.value ? "show" : "hide"}`}>
          <>
            {greatRoom.great_room_layout ? (
              <CardSingleItem name="Great Room Layout" />
            ) : null}

            {greatRoom.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {greatRoom.seating_area ? (
              <CardSingleItem name="Seating Area" />
            ) : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default GreatRoom;
