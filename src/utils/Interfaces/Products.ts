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

interface GreatRoom {
  bed: boolean;
  sideTables: boolean;
  dressing: boolean;
  wardrobe: boolean;
}

interface OwnersSuit {
  bed: boolean;
  sideTables: boolean;
  dressing: boolean;
  wardrobe: boolean;
}

interface OwnersBath {
  bathMat: boolean;
  showerCurtains: boolean;
  soapDish: boolean;
  shampooHolder: boolean;
}

interface MudRoom {
  washer: boolean;
  shelvings: boolean;
  shoeStorage: boolean;
  seatingArea: boolean;
  petSuppliers: boolean;
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

interface visualizerDesignItems {
  dinningRoom: DiningRoom;
  greatRoom: GreatRoom;
  kitchen: {
    kitchen_layout: KitchenLayout;
    cabinet_selection: CabinetOptions;
    counterTop_selection: CounterTopSelections[];
    plumbing_fixture: PlumbingFixture;
  };
  ownersSuit: OwnersSuit;
  ownersBath: OwnersBath;
  mudRoom: MudRoom;
}

export interface I_VisualizerDesign {
  exterior: visualizerDesignItems;
  firstFloor: visualizerDesignItems;
  secondFloor: visualizerDesignItems;
  review: visualizerDesignItems;
}
