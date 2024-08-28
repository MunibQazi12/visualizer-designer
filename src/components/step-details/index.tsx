import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import Card from "@/components/step-details/card";
import { useState } from "react";

import Item from "./item";
import ScrollDownSvg from "@/../public/svgs/scroll-down";

interface I_Props {
  selectedDesignElements: any;
  setSelectedVarientElements: any;
  selectedCategory: string | null;
}

const StepDetails = (props: I_Props) => {
  const {
    selectedDesignElements,
    selectedCategory,
    setSelectedVarientElements,
  } = props;

  const [openCards, setOpenCards] = useState<string[]>([]);
  const [radioBox, setRadioBox] = useState<string[]>([]);

  const handleToggle = (card_key: string) => {
    if (openCards.includes(card_key)) {
      setOpenCards(openCards.filter((i: any) => i !== card_key));
    } else {
      setOpenCards([...openCards, card_key]);
    }
  };

  const handleRadioToggle = (radio_key: string, actual_value: string) => {
    if (radioBox.includes(radio_key)) {
      setRadioBox(radioBox.filter((i: any) => i !== radio_key));
    } else {
      // setRadioBox([...radioBox, radio_key]);
      setRadioBox([radio_key]);
    }

    // const aa = Object.keys(selectedDesignElements).map((location: string) => {

    //     return Object.keys(selectedDesignElements[location]).map((optSelId: any) => {
    //       // const key = toggleValue + "_" + optSelId;
    //       // console.log("aaaa", selectedDesignElements[location][optSelId])

    //         return selectedDesignElements[location][optSelId].filter((data: any) => { return data[' Opt Sel ID '] === actual_value}).map((option: any) => (
    //           // <div key={option["id"]} className="option-card">
    //           //   <div className="option-info">
    //           //     <span className="option-name">
    //                 // console.log("Opt Val Name: ", option[" Opt Val Name"], "radioBox:", radioBox)
    //                 // console.log("location_item_name: ",location,  "Opt Val Name: ", option[" Opt Val Name"], "radioBox:", radioBox)

    //                 (option[" Opt Val Name"])

    //           //     </span>
    //           //     <span className="option-price">
    //           //       +${option["Price"] || 0}
    //           //     </span>
    //           //   </div>
    //           // </div>
    //         ));

    //     });

    // });

    // console.log("aa: ", aa)

    const returnValue = Object.keys(selectedDesignElements).flatMap(
      (location: string) => {
        return Object.keys(selectedDesignElements[location]).flatMap(
          (optSelId: any) => {
            return selectedDesignElements[location][optSelId]
              .filter((data: any) => data[" Opt Sel ID "] === actual_value)
              .map((option: any) => {
                return option;

                // option[" Opt Val Name"]
              });
          }
        );
      }
    );

    setSelectedVarientElements(returnValue);

    console.log("returnValue: ", returnValue);
  };

  // useEffect(() => {
  //   {
  //     Object.keys(selectedDesignElements).map((location: string) => {
  //       {
  //         Object.keys(selectedDesignElements[location]).map((optSelId: any) => {
  //           // const key = toggleValue + "_" + optSelId;
  //           console.log("aaaa", selectedDesignElements[location][optSelId])

  //           {
  //             selectedDesignElements[location][optSelId].filter((data: any) => { return data[' Opt Sel ID '] === 'APP-ENT-WALL-1'}).map((option: any) => (
  //               // <div key={option["id"]} className="option-card">
  //               //   <div className="option-info">
  //               //     <span className="option-name">
  //                     console.log("location_item_name: ",location,  "Opt Val Name: ", option[" Opt Val Name"], "radioBox:", radioBox)
  //               //     </span>
  //               //     <span className="option-price">
  //               //       +${option["Price"] || 0}
  //               //     </span>
  //               //   </div>
  //               // </div>
  //             ));
  //           }
  //         });
  //       }
  //     });
  //   }
  //   // setSelectedVarientElements();
  // }, [radioBox]);

  return (
    <>
      <div className="w-full max-w-[348px] ml-9 relative step-detail-container h-[530px] overflow-auto rounded-[20px] scrollBar-hidden cardsContainer">
        <div>
          {Object.keys(selectedDesignElements).map(
            (location_item_name: string) => {
              const key = selectedCategory + "_" + location_item_name;
              return (
                <Card className="completed mb-[23px]" key={key}>
                  <Item
                    name={location_item_name}
                    item_details={selectedDesignElements[location_item_name]}
                    toggleValue={key}
                    openCards={openCards}
                    setToggle={handleToggle}
                    handleRadioToggle={handleRadioToggle}
                    radioBox={radioBox}
                  />
                </Card>
              );
            }
          )}

          <ScrollDownSvg />
          <div className="more-data-scroll"></div>
        </div>
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

  //
  //     </div>
  //   );
  // });
};
export default StepDetails;
