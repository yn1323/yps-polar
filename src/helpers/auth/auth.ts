import { createClient } from './server';

export const serverAuth = () => {
  const client = createClient();

  const getUser = async () => (await client).auth.getUser();

  return {
    getUser,
  };
};
