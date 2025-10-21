-- Drop existing policies
DROP POLICY IF EXISTS "enable_insert_for_all" ON public.waitlist;
DROP POLICY IF EXISTS "enable_select_for_authenticated" ON public.waitlist;

-- Create policy explicitly for anon and authenticated roles
CREATE POLICY "allow_anon_insert" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow viewing for authenticated users
CREATE POLICY "allow_authenticated_select" 
ON public.waitlist 
FOR SELECT 
TO authenticated
USING (true);