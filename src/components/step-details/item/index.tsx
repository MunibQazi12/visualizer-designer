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
              );
            })}
          </>
        </CardDetails>
      </div>

    </>
  );
};

export default Item;
