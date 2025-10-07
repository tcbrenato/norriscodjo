export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      participants: {
        Row: {
          id: string
          first_name: string
          last_name: string
          phone: string
          email: string
          zone: string
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          phone: string
          email: string
          zone: string
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          phone?: string
          email?: string
          zone?: string
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          author_name: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          author_name: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          author_name?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}
