import { Session, User } from "@supabase/supabase-js";

export interface SignUpResponse {

    data: {
      user: User | null;
      session: Session | null;
    };
    error: any;
  }
