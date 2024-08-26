export interface I_Products {
  id: number;
  productImage: string;
  title: string;
  description: string;
}

export interface I_FeaturesElements {
  id: number;
  featuresImage: string;
}

interface DiningRoom {
  sofa: boolean;
  diningTable: boolean;
  utensils: boolean;
}

interface ExtDiningLayout {
  oneWallKitchen: boolean;
  galleyKitchen: boolean;
  lShapedKitchen: boolean;
  horseShoeKitchen: boolean;
}

interface ExtShelvingLayout {
  racks: boolean;
  boxes: boolean;
  screws: boolean;
}

interface ExtStairsLayout {
  standardHeight: boolean;
  standardWidth: boolean;
  customPlain: boolean;
}

interface ExtSeatingArea {
  sofa: boolean;
  Table: boolean;
  bed: boolean;
  chair: boolean;
}

export interface ExteriorDiningRoom {
  dining_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
  shelvings: ExtShelvingLayout;
  stairs: ExtStairsLayout;
  seating_area: ExtSeatingArea;
  display: boolean;

}

interface FirstFloorDiningRoom {
  dining_layout: ExtDiningLayout;
  shelvings: ExtShelvingLayout;
  stairs: ExtStairsLayout;
  display: boolean;

}

interface SecondFloorDiningRoom {
  dining_layout: ExtDiningLayout;
  stairs: ExtStairsLayout;
  seating_area: ExtSeatingArea;
  display: boolean;

}

interface ReviewDiningRoom {
  dining_layout: ExtDiningLayout,
  shelvings: ExtShelvingLayout,
  seating_area: ExtSeatingArea,
  display: boolean;

}



interface GreatRoom {
  bed: boolean;
  sideTables: boolean;
  dressing: boolean;
  wardrobe: boolean;
}

interface ExtJacuzziArea {
  standardHeight: boolean;
  standardWidth: boolean;
  customPlain: boolean;
}

export interface ExteriorGreatRoom {
  great_room_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
  seating_area: ExtSeatingArea;
}

export interface ExteriorKitchen {
    kitchen_layout: KitchenLayout;
    cabinet_selection: CabinetOptions;
    counterTop_selection: CounterTopSelections[];
    plumbing_fixture: PlumbingFixture;
}
interface FirstFloorGreatRoom {
  great_room_layout: ExtDiningLayout;
  seating_area: ExtSeatingArea;
}

interface SecondFloorGreatRoom {
  great_room_layout: ExtDiningLayout,
    seating_area: ExtSeatingArea,
}

interface ReviewGreatRoom {
  great_room_layout: ExtDiningLayout,
  seating_area: ExtSeatingArea,
}





interface OwnersSuit {
  bed: boolean;
  sideTables: boolean;
  dressing: boolean;
  wardrobe: boolean;
}

export interface ExteriorOwnersSuit {
  owner_suit_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
  shelvings: ExtShelvingLayout;
}

interface FirstFloorOwnersSuit {
  owner_suit_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
}

interface SecondFloorOwnersSuit {
  owner_suit_layout: ExtDiningLayout,
  shelvings: ExtShelvingLayout,
}

interface ReviewOwnersSuit {
  owner_suit_layout: ExtDiningLayout,
  shelvings: ExtShelvingLayout,
}






export interface ExteriorOwnersBath {
  owner_bath_layout: ExtDiningLayout,
  cabinet_selection: CabinetOptions,
  shelvings: ExtShelvingLayout,
  jacuzzi: ExtJacuzziArea,
}

interface FirstFloorOwnersBath {
  owner_bath_layout: ExtDiningLayout;
  shelvings: ExtShelvingLayout;
  jacuzzi: ExtJacuzziArea;
}


interface SecondFloorOwnersBath {
  owner_bath_layout: ExtDiningLayout,
  cabinet_selection: CabinetOptions,
  shelvings: ExtShelvingLayout,
}

interface ReviewOwnersBath {
  owner_bath_layout: ExtDiningLayout,
  jacuzzi: ExtJacuzziArea,
}





interface OwnersBath {
  owner_bath_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
  shelvings: ExtShelvingLayout;
  jacuzzi: ExtJacuzziArea;
}

interface MudRoom {
  washer: boolean;
  shelvings: boolean;
  shoeStorage: boolean;
  seatingArea: boolean;
  petSuppliers: boolean;
}

export interface ExteriorMudRoom {
  mudroom_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
  shelvings: ExtShelvingLayout;
}

interface FirstFloorMudRoom {
  mudroom_layout: ExtDiningLayout;
  cabinet_selection: CabinetOptions;
}

interface SecondFloorMudRoom {
  mudroom_layout: ExtDiningLayout,
  shelvings: ExtShelvingLayout,
}

interface ReviewMudRoom {
  mudroom_layout: ExtDiningLayout,
  shelvings: ExtShelvingLayout,
}

interface KitchenLayout {
  oneWallKitchen: boolean;
  galleyKitchen: boolean;
  lShapedKitchen: boolean;
  horseShoeKitchen: boolean;
}
interface PlumbingFixture {
  sinks: boolean;
  kitchenFaucets: boolean;
  kitchenShower: boolean;
}

interface ActiveSelections {
  id: number;
  productImage: string;
  title: string;
  description: string;
}

interface DefaultSelections {
  id: number;
  productImage: string;
  title: string;
  description: string;
}
interface CabinetOptions {
  activeSelections: ActiveSelections[];
  defaultSelections: DefaultSelections;
}

interface CounterTopSelections {
  id: number;
  productImage: string;
  title: string;
  description: string;
}

interface visualizerDesignReviewItems {
  dinningRoom: ReviewDiningRoom;
  greatRoom: ReviewGreatRoom;
  kitchen: {
    kitchen_layout: KitchenLayout;
    cabinet_selection: CabinetOptions;
    counterTop_selection: CounterTopSelections[];
    plumbing_fixture: PlumbingFixture;
  };
  ownersSuit: ReviewOwnersSuit;
  ownersBath: ReviewOwnersBath;
  mudRoom: ReviewMudRoom;
}


interface visualizerDesignExteriorItems {
  dinningRoom: ExteriorDiningRoom;
  greatRoom: ExteriorGreatRoom;
  kitchen: ExteriorKitchen;
  ownersSuit: ExteriorOwnersSuit;
  ownersBath: ExteriorOwnersBath;
  mudRoom: ExteriorMudRoom;
}

interface visualizerDesignSecondFloorItems {
  dinningRoom: SecondFloorDiningRoom;
  greatRoom: SecondFloorGreatRoom;
  kitchen: {
    kitchen_layout: KitchenLayout;
    cabinet_selection: CabinetOptions;
    counterTop_selection: CounterTopSelections[];
    plumbing_fixture: PlumbingFixture;
  };
  ownersSuit: SecondFloorOwnersSuit;
  ownersBath: SecondFloorOwnersBath;
  mudRoom: SecondFloorMudRoom;
}
interface visualizerDesignFirstFloorItems {
  dinningRoom: FirstFloorDiningRoom;
  greatRoom: FirstFloorGreatRoom;
  kitchen: {
    kitchen_layout: KitchenLayout;
    cabinet_selection: CabinetOptions;
    counterTop_selection: CounterTopSelections[];
    plumbing_fixture: PlumbingFixture;
  };
  ownersSuit: FirstFloorOwnersSuit;
  ownersBath: FirstFloorOwnersBath;
  mudRoom: FirstFloorMudRoom;
}

export interface I_VisualizerDesign {
  exterior: visualizerDesignExteriorItems;
  firstFloor: visualizerDesignFirstFloorItems;
  secondFloor: visualizerDesignSecondFloorItems;
  review: visualizerDesignReviewItems;
}

export interface I_AccordionData {
  dinningRoom: {
    label: string,
    value: boolean,
  },
  greatRoom: {
    label: string,
    value: boolean,
  },
  kitchen: {
    label: string,
    value: boolean,
  },
  ownersSuit: {
    label: string,
    value: boolean,
  },
  ownersBath: {
    label: string,
    value: boolean,
  },
  mudRoom: {
    label: string,
    value: boolean,
  },
}