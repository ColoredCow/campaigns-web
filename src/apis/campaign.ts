import api from "@/utils/api"

export const getCampaigns = async () => {
  const response = await api.get('/api/campaign');
  const data = await response.data;
  return data;
}
