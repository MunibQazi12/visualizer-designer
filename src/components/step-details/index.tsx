import Card from "@/components/step-details/card";
import { useEffect, useRef, useState } from "react";
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

  const [isHeightGreaterThan530, setIsHeightGreaterThan530] =
    useState<number>(0);
  const [scrollButtonClicked, setScrollButtonClicked] =
    useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);
  const divScrollRef = useRef<HTMLDivElement>(null);

  const handleToggle = (card_key: string) => {
    if (openCards.includes(card_key)) {
      setOpenCards(openCards.filter((i: any) => i !== card_key));
    } else {
      setOpenCards([...openCards, card_key]);
    }
  };

  const handleRadioToggle = (radio_key: string, actual_value: string) => {
    if (radioBox.includes(radio_key)) {
      setRadioBox([]);
      setSelectedVarientElements([]);
      // setRadioBox(radioBox.filter((i: any) => i !== radio_key));
    } else {
      setRadioBox([radio_key]);
      // setRadioBox([...radioBox, radio_key]);
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
    }
  };

  const handleScroll = (e: any) => {
    const scroll = e.target.scrollTop;
    if (scroll > 5) {
      setHasScrolled(true);
    } else {
      setScrollButtonClicked(false);
      setHasScrolled(false);
    }
  };

  const checkHeight = () => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      if (height < 530) setScrollButtonClicked(false);
      setIsHeightGreaterThan530(height);
    }
  };

  const scrollToEnd = () => {
    const divElement = divRef.current;
    if (divElement && divScrollRef) {
      divScrollRef.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
      setScrollButtonClicked(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      checkHeight();
    }, 300);
  }, [selectedDesignElements, openCards, radioBox]);

  return (
    <>
      <div
        onScroll={handleScroll}
        className="w-full max-w-[348px] ml-9 relative step-detail-container h-[530px] overflow-auto rounded-[20px] scrollBar-hidden cardsContainer"
      >
        <div ref={divRef} className="">
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
          <div ref={divScrollRef} />
          {isHeightGreaterThan530 > 530 &&
          !scrollButtonClicked &&
          !hasScrolled ? (
            <>
              <button onClick={scrollToEnd}>
                <ScrollDownSvg />
              </button>
              <div className="more-data-scroll"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default StepDetails;