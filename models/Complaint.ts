import { MaterialQuantified } from "@/models/Material";
import { Role, RoleSpecificUser, User } from "@/models/User";

export type GeoLocation = {
  address: string;
  plusCode: string;
  coordinates: [number, number];
};

export type Spot = {
  ward: number;
  panchayat: string;
  block: string;
  district: string;
  state: string;
};

export type Complaint = {
  id: string;
  issues: string[];
  description: string;
  spot: Spot;
  location: GeoLocation;
  registeredBy: User;
  supervisor: RoleSpecificUser<Role.SUPERVISOR>;
  createdAt: Date;
  updatedAt: Date | null;
};

export type Resolution = {
  complaintId: string;
  tasks: string[];
  materials: MaterialQuantified[];
  workers: RoleSpecificUser<Role.WORKER>[];
  verified: boolean;
  verifiedBy: RoleSpecificUser<Role.MANAGER>;
  createdAt: Date;
  updatedAt: Date | null;
};
