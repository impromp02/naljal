export enum Role {
  ADMIN = "ADMIN",
  SUPERVISOR = "SUPERVISOR",
  MANAGER = "MANAGER",
  WORKER = "WORKER",
  REPRESENTATIVE = "REPRESENTATIVE",
}

export type RoleSpecificUser<R extends Role> = Omit<User, "role"> & { role: R };

export type User = {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  role: Role;
  contact: string;
  verified: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};
