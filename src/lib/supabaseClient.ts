import { createClient } from "@supabase/auth-helpers-sveltekit"
import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from "$env/static/public"

console.log("Ran supabase", PUBLIC_SUPABASE_ANON_KEY) ;


export const supabaseClient = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
)
