import React from "react";

import {
  ExteriorDiningRoom,
  I_AccordionData,
} from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  name: ExteriorDiningRoom;
  item_details: any;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const Item = (props: I_Props) => {
  const { name, accordion, setAccordion, item_details } = props;
  console.log("item_details", item_details);
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
            {Object.keys(item_details).map((optSelId: any) => (
              <CardSingleItem name={item_details[optSelId][0][" Opt Sel Name"]} key={optSelId} />

              // <h3 key={optSelId}>{item_details[optSelId][0][" Opt Sel Name"]}</h3>
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
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default Item;
