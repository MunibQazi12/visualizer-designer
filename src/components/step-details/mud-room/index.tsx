import React from "react";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorMudRoom, I_AccordionData } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  mudRoom: ExteriorMudRoom;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const MudRoom = (props: I_Props) => {
  const { mudRoom, accordion, setAccordion  } = props;
  return (
    <>
      <CardHeader
        name="Mud Room"
        className={`${accordion.mudRoom.value ? 'rotate-90' : ''}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"mudRoom"}
      />

      <div className="pl-5">
        <CardDetails className={`${accordion.mudRoom.value ? "list-show" : "list-hide"}`}>
          <>
            {mudRoom.mudroom_layout ? (
              <CardSingleItem name="Mud Room Layout" />
            ) : null}

            {mudRoom.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {mudRoom.shelvings ? <CardSingleItem name="Shelving" /> : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default MudRoom;
