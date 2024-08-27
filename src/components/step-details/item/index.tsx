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
  name: ExteriorDiningRoom;
  details: any;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const Item = (props: I_Props) => {
  const { name, accordion, setAccordion, details } = props;
  console.log("details", details);
  return (
    <>
      <CardHeader
        name={name}
        className={`${accordion.dinningRoom.value ? "rotate-90" : ""}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"dinningRoom"}
      />

      <div className="pl-5">
        <CardDetails
          className={`${
            accordion.dinningRoom.value ? "list-show" : "list-hide"
          }`}
        >
          <>
            {Object.keys(details).map((optSelId: any) => (
              <CardSingleItem name={details[optSelId][0][" Opt Sel Name"]} key={optSelId} />

              // <h3 key={optSelId}>{details[optSelId][0][" Opt Sel Name"]}</h3>
              // <div key={optSelId} className="option-group">

              //   <h3>
              //     {
              //       selectedDesignElements[location][optSelId][0][
              //         " Opt Sel Name"
              //       ]
              //     }
              //   </h3>
              //   <>{console.log("optSelId", optSelId)}</>

              //   {/* <h3>{selectedDesignElements[location][optSelId][0][" Opt Sel Name"]}</h3> */}

              //   {/* {selectedDesignElements[location][optSelId].map((option: any) => (
              //       <div key={option["id"]} className="option-card">
              //         <div className="option-info">
              //           <span className="option-name">{option[" Opt Val Name"]}</span>
              //           <span className="option-price">+${option["Price"] || 0}</span>
              //         </div>
              //       </div>

              //   ))} */}
              // </div>
            ))}
         
            {/* {dinningRoom.dining_layout ? (
              <CardSingleItem name="Dining Layout" />
            ) : null}

            {dinningRoom.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {dinningRoom.seating_area ? (
              <CardSingleItem name="Seating Area" />
            ) : null}

            {dinningRoom.shelvings ? <CardSingleItem name="Shelving" /> : null}

            {dinningRoom.stairs ? <CardSingleItem name="Stairs" /> : null} */}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default Item;
