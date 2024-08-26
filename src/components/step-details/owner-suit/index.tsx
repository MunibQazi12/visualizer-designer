import React from "react";
import { ExteriorOwnersSuit, I_AccordionData } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";
import CardHeader from "../card/card-header";

interface I_Props {
  ownersSuit: ExteriorOwnersSuit;
  accordion: I_AccordionData;
  setAccordion: (accordion_name: string) => void;
}
const OwnerSuit = (props: I_Props) => {
  const { ownersSuit, accordion, setAccordion  } = props;
  
  return (
    <>
      <CardHeader
        name="Owners Suite"
        className={`${accordion.ownersSuit.value ? 'rotate-90' : ''}`}
        accordion={accordion}
        setAccordion={setAccordion}
        label={"ownersSuit"}
      />

      <div className="pl-5">
        <CardDetails className={`${accordion.ownersSuit.value ? 'show' : 'hidden'}`}>
          <>
            {ownersSuit.owner_suit_layout ? (
              <CardSingleItem name="Owner Suit Layout" />
            ) : null}

            {ownersSuit.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {ownersSuit.shelvings ? <CardSingleItem name="Shelving" /> : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default OwnerSuit;
