// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fftxlescsylyxxhaiqye.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdHhsZXNjc3lseXh4aGFpcXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5ODI1NTcsImV4cCI6MjA2MDU1ODU1N30.m6u-cMLiHnHSoTI9RC0sQfRPVnQ7Cf4c52j58sX7shI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);