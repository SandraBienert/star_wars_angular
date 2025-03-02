import { supa } from '../environment/firebase-auth';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root',
})
export class AuthSupaService {

  private supabase: SupabaseClient;
  currentUserLoginOn: any;
  currentUserData: any;

  constructor() {
    this.supabase = createClient(supa.apiUrl, supa.apiKey);
  }

  // Registre d'usuari amb email i password
  async signUp(email: string, password: string) {
    return await this.supabase.auth.signUp({ email, password });
  }

  // Login d'usuari
  async signIn(email: string, password: string) {
    await this.supabase.auth.signOut();
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
