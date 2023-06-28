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

export interface Subscribers {
  data: any;
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
  data: any;
  name: string;
  email: string;
}

export interface Tag {
  name: string;
}

export interface CampaignResource extends ApiResource {
  data: Campaign[];
}
