
import { SupabaseClient, createClient } from '@supabase/supabase-js'

declare global {
    var supabase: SupabaseClient | undefined
}

const supabaseUrl = 'https://oipxoqpfakyiuwdnjzwh.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

if(process.env.NODE_ENV !== 'production') globalThis.supabase = supabase