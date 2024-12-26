export type Unit = "mm" | "in" | "cm" | "unit";

export type MaterialUnitPrice = {
  unit: Unit;
  price: number;
};

export type Material = {
  id: string;
  name: string;
  variant: string;
  unitPrice: MaterialUnitPrice;
};

export type MaterialQuantified = {
  material: Material;
  quantity: number;
};
