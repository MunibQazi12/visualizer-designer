import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import Card from "@/components/step-details/card";
import { useState } from "react";

import Item from "./item";

interface I_Props {
  visualizerDesignElements: I_VisualizerDesign[];
  currentStep: number;
  selectedDesignElements: any;
  selectedCategory: string | null;
}

const StepDetails = (props: I_Props) => {
  const {
    visualizerDesignElements,
    currentStep,
    selectedDesignElements,
    selectedCategory,
  } = props;

    const [openCards, setOpenCards] = useState<string[]>([]);
    const [radioBox, setRadioBox] = useState<string[]>([]);

  // const selectDataToDisplay = () => {
  //   if (currentStep === 0) {
  //     return [visualizerDesignElements[0]?.exterior];
  //   } else if (currentStep === 1) {
  //     return [visualizerDesignElements[0]?.firstFloor];
  //   } else if (currentStep === 2) {
  //     return [visualizerDesignElements[0]?.secondFloor];
  //   } else {
  //     return [visualizerDesignElements[0]?.review];
  //   }
  // };

  const handleToggle = (card_key: string) => {
    if (openCards.includes(card_key)) {
      setOpenCards(openCards.filter((i:any) => i !== card_key));
    } else {
      setOpenCards([...openCards, card_key]);
    }
  };


  const handleRadioToggle = (radio_key: string) => {
    if (radioBox.includes(radio_key)) {
      setRadioBox(radioBox.filter((i: any) => i !== radio_key));
    } else {
      setRadioBox([...radioBox, radio_key]);
    }
  };

  return (
    <>
      <div className="w-full max-w-[348px] ml-9 relative step-detail-container h-[530px] overflow-auto rounded-[20px] scrollBar-hidden cardsContainer">
        {Object.keys(selectedDesignElements).map((location_item_name: any, index: number) => {
          const key = selectedCategory + "_" + location_item_name;
          return (
            <Card
              className="completed mb-[23px]"
              key={key}
            >
              <Item
                name={location_item_name}
                item_details={selectedDesignElements[location_item_name]}
                toggleValue = {key}
                openCards={openCards}
                setToggle={handleToggle}
                handleRadioToggle={handleRadioToggle}
                radioBox = {radioBox}
              />
            </Card>
          );
        })}
      </div>
    </>
  );

  //   {Object.keys(locations[location]).map((optSelId) => (

  //     <div key={optSelId} className="option-group">

  //       <h3>{locations[location][optSelId][0][" Opt Sel Name"]}</h3>

  //       {locations[location][optSelId].map((option) => (
  //             <div key={option["id"]} className="option-card">
  //               <div className="option-info">
  //                 <span className="option-name">{option[" Opt Val Name"]}</span>
  //                 <span className="option-price">+${option["Price"] || 0}</span>
  //               </div>
  //               </div>

  //             )}
  //     </div>
  //     )}

  // )}

  {
    /* <Accordion multiple>
        {Object.keys(locations).map((location) => (
          <AccordionTab key={location} header={location}>
            {Object.keys(locations[location]).map((optSelId) => (
              <div key={optSelId} className="option-group">
                <h3>{locations[location][optSelId][0][" Opt Sel Name"]}</h3>
                {locations[location][optSelId].map((option) => (
                  <div key={option["id"]} className="option-card">
                    <div className="option-info">
                      <span className="option-name">{option[" Opt Val Name"]}</span>
                      <span className="option-price">+${option["Price"] || 0}</span>
                    </div>
                    <div className="option-actions">
  
  
  
                      <Checkbox
                        inputId={option["id"] + "selection"}
                        checked={isChecked(option["id"], "isSelected")}
                        onChange={(e) =>
                          e.checked
                            ? handleCheck(option["id"], "isSelected", variant ? []: locations[location][optSelId])
                            : handleUncheck(option["id"], "isSelected")
                        }
                      />
                      <label htmlFor={option["id"] + "selection"}>{variant ? "Make Available": ""}</label>
  
                      {isOverridden(option["id"], "isSelected") && (
                        <span className="overridden">Overridden</span>
                      )}
  
  
                      {variant &&
                      <div>
                        <Checkbox
                          inputId={option["id"] + "default"}
                          checked={isChecked(option["id"], "isDefault")}
                          onChange={(e) =>
                            e.checked
                              ? handleCheck(option["id"], "isDefault", locations[location][optSelId])
                              : handleUncheck(option["id"], "isDefault")
                          }
                        />
                        <label htmlFor={option["id"] + "default"}>Default</label>
  
                        {isOverridden(option["id"], "isDefault") && (
                          <span className="overridden">Overridden</span>
                        )}
                      </div>
                      }
  
  
  
  
  
  
  
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </AccordionTab>
        ))}
      </Accordion>
    ) */
  }
  // return visualizeElements.map((data: any, index: number) => {
  //   return (
  //     <div
  //       key={"visualizeElements" + index}
  //       className="w-full max-w-[348px] ml-9 relative step-detail-container h-[530px] overflow-auto rounded-[20px] scrollBar-hidden cardsContainer"
  //     >
  //       {data.dinningRoom.dining_layout ? (
  //         <Card className="completed mb-[23px]">
  //           <DiningRoom dinningRoom={data.dinningRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
  //         </Card>
  //       ) : null}

  //       {data.greatRoom.great_room_layout ? (
  //         <Card className="completed mb-[23px]">
  //           <GreatRoom greatRoom={data.greatRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
  //         </Card>
  //       ) : null}

  //       {data.kitchen.kitchen_layout ? (
  //         <Card className="completed mb-[23px]">
  //           <Kitchen
  //             selectedKitchenType={selectedKitchenType}
  //             setSelectedKitchenType={setSelectedKitchenType}
  //             kitchen={data.kitchen}
  //             accordion={accordionToShow}
  //             setAccordion={setAccordionToShowHandler}
  //           />
  //         </Card>
  //       ) : null}

  //       {data.ownersSuit.owner_suit_layout ? (
  //         <Card className="completed mb-[23px]">
  //           <OwnerSuit ownersSuit={data.ownersSuit} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
  //         </Card>
  //       ) : null}

  //       {data.ownersBath.owner_bath_layout ? (
  //         <Card className="completed mb-[23px]">
  //           <OwnerBath ownersBath={data.ownersBath} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
  //         </Card>
  //       ) : null}

  //       {data.mudRoom.mudroom_layout ? (
  //         <Card className="completed">
  //           <MudRoom mudRoom={data.mudRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
  //         </Card>
  //       ) : null}

  //       <ScrollDownSvg />
  //       <div className="more-data-scroll"></div>
  //     </div>
  //   );
  // });
};
export default StepDetails;
