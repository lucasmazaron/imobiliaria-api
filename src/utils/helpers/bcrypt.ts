import * as bcrypt from 'bcrypt';

export const hashPassword = async (pass: string): Promise<string> => {
  return await bcrypt.hash(pass, await bcrypt.genSalt());
};

export const comparePassword = async (pass, hash: string): Promise<boolean> => {
  return await bcrypt.compare(pass, hash);
};
