// src/lib/supabaseClient.ts
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";

let supabaseClient;

export function getSupabaseClient(fetch, serverSession) {
  if (!supabaseClient) {
    supabaseClient = createSupabaseLoadClient({
      supabaseUrl: PUBLIC_SUPABASE_URL,
      supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
      event: { fetch },
      serverSession,
    });
  }
  return supabaseClient;
}
