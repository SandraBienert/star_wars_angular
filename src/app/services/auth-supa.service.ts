import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ucwgglfjwdspkkkjmtat.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjd2dnbGZqd2RzcGtra2ptdGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4Mjk4ODcsImV4cCI6MjA1NjQwNTg4N30.FPhq4GNzzCjx9l0mJJQpNPh2ARIM9dkJs5PAqFBoFvc';

@Injectable({
  providedIn: 'root',
})
export class AuthSupaService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  }

  // Registre d'usuari amb email i password
  async signUp(email: string, password: string) {
    return await this.supabase.auth.signUp({ email, password });
  }

  // Login d'usuari
  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  // Logout
  async signOut() {
    return await this.supabase.auth.signOut();
  }

  // Obtenir usuari actual
  async getUser() {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

}
