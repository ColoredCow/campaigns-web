import { ReactNode } from 'react';

export interface ApiResource {
  total: number;
}

export interface TableData {
  headers: string[];
  rows: React.JSX.Element[][];
}

export interface Campaign {
  email_subject: string;
  email_body: string;
  created_at: string;
  sender_identity: SenderIdentity;
  tag: Tag;
}

export interface Subscriber {
  id: number;
  total: ReactNode;
  email: string;
  name: string;
  phone_number: string;
  comments: string;
  file: string;
  designation: string;
  address: string;
  organization: string;
  result: string;
}

export interface SenderIdentity {
  total: ReactNode;
  data: any;
  name: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface Tag {
  name: string;
}

export interface CampaignResource extends ApiResource {
  data: Campaign[];
}

export interface SubscriberResource extends ApiResource {
  data: Subscriber[];
}

export interface UserResource extends ApiResource {
  data: User[];
}
