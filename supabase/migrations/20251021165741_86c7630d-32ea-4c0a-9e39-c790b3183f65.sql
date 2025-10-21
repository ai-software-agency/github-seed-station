-- Fix the RLS policy to allow anyone (public) to insert
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;

CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist 
FOR INSERT 
TO public
WITH CHECK (true);