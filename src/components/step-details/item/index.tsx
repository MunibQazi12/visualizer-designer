import React, { useState } from "react";

import { ExteriorDiningRoom } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  name: string;
  item_details: any;
  setToggle: (toggle_key: string) => void;
  toggleValue: string;
  openCards: string[];
  handleRadioToggle: (toggle_key: string, actual_value: string) => void;
  radioBox: string[];
}

const Item = (props: I_Props) => {
  const {
    name,
    setToggle,
    item_details,
    toggleValue,
    openCards,
    handleRadioToggle,
    radioBox,
  } = props;

  return (
    <>
      <CardHeader
        name={name}
        className={`${openCards.includes(toggleValue) ? "rotate-90" : ""}`}
        setToggle={setToggle}
        toggleValue={toggleValue}
      />

      <div className="pl-5">
        <CardDetails
          className={`${
            openCards.includes(toggleValue) ? "list-show" : "list-hide"
          }`}
        >
          <>
            {Object.keys(item_details).map((optSelId: any) => {
              const key = toggleValue + "_" + optSelId;

              return (
                <CardSingleItem
                  name={item_details[optSelId][0][" Opt Sel Name"]}
                  key={key}
                  handleRadioToggle={handleRadioToggle}
                  optSelId={optSelId}
                  radioBox={radioBox}
                  radioToggleValue={key}
                />

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
              );
            })}
          </>
        </CardDetails>
      </div>

    </>
  );
};

export default Item;
