-- Remove the problematic trigger and function
DROP TRIGGER IF EXISTS on_waitlist_entry_created ON public.waitlist;
DROP FUNCTION IF EXISTS public.trigger_google_sheets_sync();