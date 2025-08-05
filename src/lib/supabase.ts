import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// 타입 정의
export type Database = {
  public: {
    Tables: {
      // 여기에 테이블 타입 정의
    }
    Views: {
      // 여기에 뷰 타입 정의
    }
    Functions: {
      // 여기에 함수 타입 정의
    }
  }
} 