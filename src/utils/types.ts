export interface ApiResource {
  total: number;
};

export interface TableData {
  headers: string[],
  rows: React.JSX.Element[][],
}

export interface Campaign {
  email_subject: string,
  email_body: string,
  created_at: string,
  sender_identity: SenderIdentity,
}

export interface SenderIdentity {
  name: string,
  email: string,
}

export interface CampaignResource extends ApiResource {
  data: Campaign[],
}
