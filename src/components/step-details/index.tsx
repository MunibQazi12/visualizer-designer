import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import DiningRoom from "@/components/step-details/dining-room";
import Card from "@/components/step-details/card";
import GreatRoom from "@/components/step-details/great-room";
import OwnerSuit from "@/components/step-details/owner-suit";
import OwnerBath from "@/components/step-details/owner-bath";
import MudRoom from "@/components/step-details/mud-room";
import Kitchen from "@/components/step-details/kitchen";
import ScrollDownSvg from "@/../public/svgs/scroll-down";
import { useState } from "react";
import { I_AccordionData } from "@/utils/Interfaces/Products";
import { accordionData } from "@/utils";
import Item from "./item";

interface I_Props {
  visualizerDesignElements: I_VisualizerDesign[];
  currentStep: number;
  selectedDesignElements: any;
}

const StepDetails = (props: I_Props) => {
  const {
    visualizerDesignElements,
    currentStep,
    selectedDesignElements,
  } = props;

  const [accordionToShow, setAccordionToShow] =
    useState<I_AccordionData>(accordionData);

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

  const setAccordionToShowHandler = (value: string) => {
    console.log("value: ", value);
    if (value === accordionData.dinningRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          dinningRoom: {
            label: prev.dinningRoom.label,
            value: !prev.dinningRoom.value,
          },
        };
      });
    } else if (value === accordionData.greatRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          greatRoom: {
            label: prev.greatRoom.label,
            value: !prev.greatRoom.value,
          },
        };
      });
    } else if (value === accordionData.kitchen.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          kitchen: {
            label: prev.kitchen.label,
            value: !prev.kitchen.value,
          },
        };
      });
    } else if (value === accordionData.ownersSuit.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          ownersSuit: {
            label: prev.ownersSuit.label,
            value: !prev.ownersSuit.value,
          },
        };
      });
    } else if (value === accordionData.ownersBath.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          ownersBath: {
            label: prev.ownersBath.label,
            value: !prev.ownersBath.value,
          },
        };
      });
    } else if (value === accordionData.mudRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          mudRoom: {
            label: prev.mudRoom.label,
            value: !prev.mudRoom.value,
          },
        };
      });
    }
  };

  // const visualizeElements: any = selectDataToDisplay();

  // console.log("selectedDesignElements: ss ", selectedDesignElements);
  // console.log("visualizeElements ", visualizeElements);

  return (
    <>
      <div className="w-full max-w-[348px] ml-9 relative step-detail-container h-[530px] overflow-auto rounded-[20px] scrollBar-hidden cardsContainer">
        {Object.keys(selectedDesignElements).map(
          (item_name: any, index: number) => (
            <Card className="completed mb-[23px]" key={item_name+'_'+index}>
              <Item
                name={item_name}
                item_details={selectedDesignElements[item_name]}
                accordion={accordionToShow}
                setAccordion={setAccordionToShowHandler}
              />
            </Card>
          )
        )}
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
