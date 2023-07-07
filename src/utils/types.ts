import { ReactNode } from 'react';
import internal from 'stream';

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
  id:
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
    | null
    | undefined;
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
  subscriber: Subscribers;
}

export interface SenderIdentity {
  total: ReactNode;
  data: any;
  name: string;
  email: string;
}

export interface Users {
  data: any;
  total: ReactNode;
  map(arg0: (user: Users) => import('react').JSX.Element[]): unknown;
  name: string;
  email: string;
}

export interface Tag {
  name: string;
}

export interface CampaignResource extends ApiResource {
  data: Campaign[];
}
