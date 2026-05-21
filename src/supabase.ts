import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udvvgpqvuadpkjfuamhj.supabase.co'

const supabaseKey = 'sb_publishable_SZZLRWJ3rCyk7SuETRCD3Q_YqiBrCuq'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

export default supabase