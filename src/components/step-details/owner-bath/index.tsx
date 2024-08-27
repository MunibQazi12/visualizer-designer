import React from "react";
import { ExteriorOwnersBath, I_AccordionData } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  ownersBath: ExteriorOwnersBath;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}

const OwnerBath = (props: I_Props) => {
  const { ownersBath, accordion, setAccordion  } = props;

  return (
    <>
      <CardHeader
        name="Owners Bath"
        className={`${accordion.ownersBath.value ? 'rotate-90' : ''}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"ownersBath"}
      />

      <div className="pl-5">
        <CardDetails className={`${accordion.ownersBath.value ? "list-show" : "list-hide"}`}>
          <>
            {ownersBath.owner_bath_layout ? (
              <CardSingleItem name="Owner Bath Layout" />
            ) : null}
            {ownersBath.jacuzzi ? <CardSingleItem name="Jacuzzi" /> : null}
            {ownersBath.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {ownersBath.shelvings ? <CardSingleItem name="Shelving" /> : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default OwnerBath;
