-- Completely rebuild the RLS policies from scratch
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Authenticated users can view waitlist" ON public.waitlist;

-- Allow anyone to insert
CREATE POLICY "enable_insert_for_all" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to view
CREATE POLICY "enable_select_for_authenticated" 
ON public.waitlist 
FOR SELECT 
TO authenticated
USING (true);