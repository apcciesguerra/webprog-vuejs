import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xdbylhadokoaoxvxhiig.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYnlsaGFkb2tvYW94dnhoaWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjY4NTcsImV4cCI6MjA1MzYwMjg1N30.6uHLodhKbM4LftF19mF3PNnvpDxsUTBTs-keN-CHB_w')