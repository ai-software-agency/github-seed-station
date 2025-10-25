-- Drop trigger first
DROP TRIGGER IF EXISTS on_waitlist_entry_created ON public.waitlist;

-- Drop function
DROP FUNCTION IF EXISTS public.trigger_google_sheets_sync();

-- Drop RLS policies
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Authenticated users can view waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "allow_anon_insert" ON public.waitlist;
DROP POLICY IF EXISTS "allow_authenticated_select" ON public.waitlist;

-- Drop table
DROP TABLE IF EXISTS public.waitlist;