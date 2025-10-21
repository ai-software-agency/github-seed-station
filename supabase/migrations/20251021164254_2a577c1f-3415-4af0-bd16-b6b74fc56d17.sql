-- Update trigger function to use the correct schema for pg_net
CREATE OR REPLACE FUNCTION public.trigger_google_sheets_sync()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the edge function via pg_net without authentication
  SELECT extensions.net.http_post(
    url := 'https://enwilghfnxvttcntnadc.supabase.co/functions/v1/sync-to-google-sheets',
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'record', jsonb_build_object(
        'id', NEW.id::text,
        'email', NEW.email,
        'link', NEW.link,
        'created_at', NEW.created_at::text
      )
    )
  ) INTO request_id;
  
  RETURN NEW;
END;
$$;