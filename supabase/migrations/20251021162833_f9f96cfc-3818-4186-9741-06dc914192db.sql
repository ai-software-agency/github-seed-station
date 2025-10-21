-- Create function to call edge function when waitlist entry is created
CREATE OR REPLACE FUNCTION public.trigger_google_sheets_sync()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the edge function via pg_net
  SELECT net.http_post(
    url := 'https://enwilghfnxvttcntnadc.supabase.co/functions/v1/sync-to-google-sheets',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('request.headers')::json->>'authorization'
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on waitlist table
DROP TRIGGER IF EXISTS on_waitlist_entry_created ON public.waitlist;
CREATE TRIGGER on_waitlist_entry_created
  AFTER INSERT ON public.waitlist
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_google_sheets_sync();