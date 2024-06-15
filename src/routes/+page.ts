import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/api/register');
  const data = await res.json();
  console.log('Data fetched in +page.ts:', data);

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
