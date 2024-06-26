// src/lib/supabaseServerClient.ts
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

let supabaseServerClient;

export function getSupabaseServerClient(event) {
  if (!supabaseServerClient) {
    supabaseServerClient = createSupabaseServerClient({
      supabaseUrl: PUBLIC_SUPABASE_URL,
      supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
      event
    });
  }
  return supabaseServerClient;
}
