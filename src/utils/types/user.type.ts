export type TUser = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  active: boolean;
  admin: boolean;
};
