import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/supabaseClient';

export const GET: RequestHandler = async () => {
  const { data, error } = await supabase.from('test').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ users: data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
