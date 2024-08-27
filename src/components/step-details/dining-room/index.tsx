import React from "react";

import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import {
  ExteriorDiningRoom,
  I_AccordionData,
  I_VisualizerDesign,
} from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";
import EyeSvg from "../../../../public/svgs/eyes";

interface I_Props {
  dinningRoom: ExteriorDiningRoom;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const DiningRoom = (props: I_Props) => {
  const { dinningRoom, accordion, setAccordion } = props;

  return (
    <>
      <CardHeader
        name="Dining Room"
        className={`${accordion.dinningRoom.value ? 'rotate-90' : ''}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"dinningRoom"}
      />

      <div className="pl-5">
        <CardDetails
          className={`${accordion.dinningRoom.value ? "list-show" : "list-hide"}`}
        >
          <>
            {dinningRoom.dining_layout ? (
              <CardSingleItem name="Dining Layout" />
            ) : null}

            {dinningRoom.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {dinningRoom.seating_area ? (
              <CardSingleItem name="Seating Area" />
            ) : null}

            {dinningRoom.shelvings ? <CardSingleItem name="Shelving" /> : null}

            {dinningRoom.stairs ? <CardSingleItem name="Stairs" /> : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default DiningRoom;
