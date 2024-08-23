import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import { useEffect } from "react";

interface I_Props {
  visualizerDesignElements: I_VisualizerDesign[];
  currentStep: number;
  setSelectedKitchenType: any;
  selectedKitchenType: any;
}

const StepDetails = (props: I_Props) => {
  const { visualizerDesignElements, currentStep, setSelectedKitchenType, selectedKitchenType } = props;


  const selectDataToDisplay = () => {
    if (currentStep === 0) {
      return visualizerDesignElements[0]?.exterior;
    } else if (currentStep === 1) {
      return visualizerDesignElements[0]?.firstFloor;
    } else if (currentStep === 2) {
      return visualizerDesignElements[0]?.secondFloor;
    } else {
      return visualizerDesignElements[0]?.review;
    }
  };

  const { dinningRoom, greatRoom, kitchen, mudRoom, ownersBath, ownersSuit } = selectDataToDisplay();

  return (
    <div className="w-full max-w-96 pl-9">
      <div className="w-full rounded-[20px] pt-2 pb-2.5 pl-4 pr-[15px] mb-[23px] bg-white stepper-detail-dropdown-open completed">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]"></div>
          <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
            Dining Room
          </p>
          <div className="flex items-center gap-[11px]">
            <button type="button">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0548 11.9375L23 11.0625L20.1644 8V0H0V20H20.1644V13.875H18.9041V18.75H10.2082V16.4375H8.94794V18.75H1.26027V9.8125H8.94794V12.4375H10.2082V8.5625H1.26027V1.25H18.9041V4.5H15.1233V5.75H18.9041V8.4375L22.0548 11.9375Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button type="button">
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 15.7207C6.35307 15.7207 2.22847 11.7533 0.253418 8.35405L0 7.91712L0.253418 7.4802C2.25453 4.0284 6.39669 0 11.5 0C16.6033 0 20.7452 4.0284 22.7466 7.4802L23 7.91712L22.7466 8.35405C20.7804 11.7533 16.6472 15.7207 11.5 15.7207ZM2.03608 7.90832C3.8537 10.8008 7.31417 13.973 11.5 13.973C15.6858 13.973 19.1463 10.8008 20.9639 7.90832C19.1201 4.9635 15.6422 1.73904 11.5 1.73904C7.35779 1.73904 3.87999 4.97216 2.03608 7.90832Z"
                  fill="#495057"
                />
                <path
                  d="M11.4999 11.3514C9.56873 11.3514 8.00452 9.78716 8.00452 7.85595C8.00452 5.92475 9.56873 4.36053 11.4999 4.36053C13.4311 4.36053 14.9954 5.92475 14.9954 7.85595C14.9954 9.78716 13.4311 11.3514 11.4999 11.3514ZM11.4999 6.10824C10.5387 6.10824 9.75223 6.89471 9.75223 7.85595C9.75223 8.81719 10.5387 9.60366 11.4999 9.60366C12.4612 9.60366 13.2476 8.81719 13.2476 7.85595C13.2476 6.89471 12.4612 6.10824 11.4999 6.10824Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <button type="button" className="ml-6">
            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 9.57762M1 18L10.771 9.72973"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full rounded-[20px] pt-2 pb-2.5 pl-4 pr-[15px] mb-[23px] bg-white stepper-detail-dropdown-open completed">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]">
            <span className="block w-full h-full rounded-full bg-white"></span>
          </div>
          <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
            Great Room
          </p>
          <div className="flex items-center gap-[11px]">
            <button type="button">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0548 11.9375L23 11.0625L20.1644 8V0H0V20H20.1644V13.875H18.9041V18.75H10.2082V16.4375H8.94794V18.75H1.26027V9.8125H8.94794V12.4375H10.2082V8.5625H1.26027V1.25H18.9041V4.5H15.1233V5.75H18.9041V8.4375L22.0548 11.9375Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button type="button">
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 15.7207C6.35307 15.7207 2.22847 11.7533 0.253418 8.35405L0 7.91712L0.253418 7.4802C2.25453 4.0284 6.39669 0 11.5 0C16.6033 0 20.7452 4.0284 22.7466 7.4802L23 7.91712L22.7466 8.35405C20.7804 11.7533 16.6472 15.7207 11.5 15.7207ZM2.03608 7.90832C3.8537 10.8008 7.31417 13.973 11.5 13.973C15.6858 13.973 19.1463 10.8008 20.9639 7.90832C19.1201 4.9635 15.6422 1.73904 11.5 1.73904C7.35779 1.73904 3.87999 4.97216 2.03608 7.90832Z"
                  fill="#495057"
                />
                <path
                  d="M11.4999 11.3514C9.56873 11.3514 8.00452 9.78716 8.00452 7.85595C8.00452 5.92475 9.56873 4.36053 11.4999 4.36053C13.4311 4.36053 14.9954 5.92475 14.9954 7.85595C14.9954 9.78716 13.4311 11.3514 11.4999 11.3514ZM11.4999 6.10824C10.5387 6.10824 9.75223 6.89471 9.75223 7.85595C9.75223 8.81719 10.5387 9.60366 11.4999 9.60366C12.4612 9.60366 13.2476 8.81719 13.2476 7.85595C13.2476 6.89471 12.4612 6.10824 11.4999 6.10824Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <button type="button" className="ml-6">
            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 9.57762M1 18L10.771 9.72973"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full rounded-[20px] pt-2 pb-2.5 pl-4 pr-[15px] mb-[23px] bg-white stepper-detail-dropdown-open completed">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]">
            <span className="block w-full h-full rounded-full bg-white"></span>
          </div>
          <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
            Kitchen
          </p>
          <div className="flex items-center gap-[11px]">
            <button type="button">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0548 11.9375L23 11.0625L20.1644 8V0H0V20H20.1644V13.875H18.9041V18.75H10.2082V16.4375H8.94794V18.75H1.26027V9.8125H8.94794V12.4375H10.2082V8.5625H1.26027V1.25H18.9041V4.5H15.1233V5.75H18.9041V8.4375L22.0548 11.9375Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button type="button">
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 15.7207C6.35307 15.7207 2.22847 11.7533 0.253418 8.35405L0 7.91712L0.253418 7.4802C2.25453 4.0284 6.39669 0 11.5 0C16.6033 0 20.7452 4.0284 22.7466 7.4802L23 7.91712L22.7466 8.35405C20.7804 11.7533 16.6472 15.7207 11.5 15.7207ZM2.03608 7.90832C3.8537 10.8008 7.31417 13.973 11.5 13.973C15.6858 13.973 19.1463 10.8008 20.9639 7.90832C19.1201 4.9635 15.6422 1.73904 11.5 1.73904C7.35779 1.73904 3.87999 4.97216 2.03608 7.90832Z"
                  fill="#495057"
                />
                <path
                  d="M11.4999 11.3514C9.56873 11.3514 8.00452 9.78716 8.00452 7.85595C8.00452 5.92475 9.56873 4.36053 11.4999 4.36053C13.4311 4.36053 14.9954 5.92475 14.9954 7.85595C14.9954 9.78716 13.4311 11.3514 11.4999 11.3514ZM11.4999 6.10824C10.5387 6.10824 9.75223 6.89471 9.75223 7.85595C9.75223 8.81719 10.5387 9.60366 11.4999 9.60366C12.4612 9.60366 13.2476 8.81719 13.2476 7.85595C13.2476 6.89471 12.4612 6.10824 11.4999 6.10824Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <button type="button" className="ml-6">
            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 9.57762M1 18L10.771 9.72973"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>


        <div className="mt-4 pl-5">
        
          <div className="inline-flex items-center">
            <div className={ `w-4 h-4 rounded-full p-1 ${selectedKitchenType.kitchen_layout ? 'bg-green-500' : ''}`}></div>
            <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer" onClick={() => setSelectedKitchenType('kitchen_layout')}>
              Kitchen Layout
            </p>
          </div>
          <div className="flex items-center">
            <div className={ `w-4 h-4 rounded-full p-1 ${selectedKitchenType.cabinet_selection ? 'bg-green-500' : ''}`}>
              <span className="block w-full h-full rounded-full bg-white"></span>
            </div>
            <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer" onClick={() => setSelectedKitchenType('cabinet_selection')}>
              Cabinet Selection
            </p>
          </div>
          <div className="flex items-center">
            <div className={ `w-4 h-4 rounded-full p-1 ${selectedKitchenType.counterTop_selection ? 'bg-green-500' : ''}`}>
              <span className="block w-full h-full rounded-full bg-white"></span>
            </div>
            <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer"  onClick={() => setSelectedKitchenType('counterTop_selection')}>
              Countertop Selection
            </p>
          </div>
          <div className="flex items-center">
            <div className={ `w-4 h-4 rounded-full p-1 ${selectedKitchenType.plumbing_fixture ? 'bg-green-500' : ''}`}>
              <span className="block w-full h-full rounded-full bg-white"></span>
            </div>
            <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer" onClick={() => setSelectedKitchenType('plumbing_fixture')}>
              Plumbing Fixtures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepDetails;
