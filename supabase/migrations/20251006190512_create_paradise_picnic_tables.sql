/*
  # Paradise Pic-Nic Database Schema

  ## Overview
  This migration creates the database structure for the Paradise Pic-Nic Summer Vibes 2026 website.
  It includes tables for storing participant information (private) and public testimonials.

  ## New Tables

  ### 1. `participants`
  Stores private information of people who access the gallery:
  - `id` (uuid, primary key) - Unique identifier
  - `first_name` (text) - First name of participant
  - `last_name` (text) - Last name of participant
  - `phone` (text) - Phone/WhatsApp number
  - `email` (text) - Email address
  - `zone` (text) - Residential zone (Cotonou, Porto-Novo, etc.)
  - `created_at` (timestamptz) - Registration timestamp

  ### 2. `testimonials`
  Stores public testimonials displayed on the website:
  - `id` (uuid, primary key) - Unique identifier
  - `author_name` (text) - Name of person giving testimonial
  - `message` (text) - Testimonial content
  - `created_at` (timestamptz) - Submission timestamp

  ## Security

  ### Row Level Security (RLS)
  - Both tables have RLS enabled
  - `participants` table: Only accessible by authenticated users (admin)
  - `testimonials` table: Public read access, authenticated insert

  ### Access Policies
  1. Admin-only access to participant data
  2. Public read access to testimonials
  3. Anyone can submit testimonials
*/

-- Create participants table
CREATE TABLE IF NOT EXISTS participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  zone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Participants policies (admin only)
CREATE POLICY "Admin can view all participants"
  ON participants
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous inserts to participants"
  ON participants
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can delete participants"
  ON participants
  FOR DELETE
  TO authenticated
  USING (true);

-- Testimonials policies (public read, anyone can insert)
CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert testimonials"
  ON testimonials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_participants_created_at ON participants(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);