-- Fix the RLS policy to allow anonymous inserts
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;

CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist 
FOR INSERT 
TO anon
WITH CHECK (true);