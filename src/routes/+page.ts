import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/api/register');
  const data = await res.json();

  if (res.ok) {
    return {
      users: data.users,
    };
  }

  return {
    status: res.status,
    error: new Error(data.error),
  };
};
