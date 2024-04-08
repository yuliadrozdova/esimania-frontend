import { API_URL, SEARCH_BASE_URL } from "../config/config.tsx";

// Types
export type Image = {
  width: number;
  height: number;
  url: string;
};

export type Seo = {
  description: string | null;
  keywords: string | null;
  title: string | null;
};

export type Country = {
  id: number;
  image: Image;
  package_count?: number;
  packages?: Package[];
  seo: Seo | null;
  slug: string;
  title: string;
};

export type Package = {
  amount: number;
  calling_credit: string | null;
  data: string;
  day: number;
  fair_usage_policy: string | null;
  id: number;
  is_stock: boolean;
  is_unlimited: boolean;
  is_unlimited_text: boolean;
  is_unlimited_voice: boolean;
  note: string | null;
  price: number;
  short_info: string;
  slug: string;
  text: string | null;
  title: string;
  type: string;
  validity: string;
  voice: string | null;
  operator: Operator;
  promotions: any[];
};

export type Operator = {
  activation_policy: string;
  airplane_toggle: boolean;
  apn: string | null;
  apn_single: string;
  apn_type: string;
  apn_type_android: string;
  apn_type_ios: string;
  countries: Country[];
  data_roaming: boolean;
  gradient_end: string;
  gradient_start: string;
  id: number;
  image: Image;
  info: string[];
  is_kyc_one_time: boolean;
  is_kyc_verify: number;
  is_multi_package: boolean;
  is_prepaid: boolean;
  kyc_expiry_duration: string | null;
  kyc_restriction: string | null;
  kyc_type: string | null;
  network: Network[];
  operator_legal_name: string | null;
  other_info: string | null;
  plan_type: string;
  privacy_policy_url: string | null;
  rechargeability: boolean;
  style: string;
  title: string;
  type: string;
};

export type Network = {
  network: string;
  service_type: string;
  status: boolean;
  tadig: string | null;
};

export type TopapPackage = {
  amount: number;
  availability_channels: string[];
  can_activate: boolean;
  data: string;
  day: number;
  expired_at: string | null;
  id: number;
  is_active: string | null;
  is_expired: boolean;
  is_unlimited: boolean;
  is_unlimited_text: boolean;
  is_unlimited_voice: boolean;
  net_price: number;
  note: string | null;
  operator: Operator
  order: number;
  price: number;
  promotions: string[] | null;
  remaining: string | null;
  remaining_text: string | null;
  remaining_voice: string | null;
  short_info: string | null;
  sim_package_id: string | null;
  slug: string;
  status: string | null;
  text: string | null;
  title: string;
  type: string;
  validity: string;
  voice: string | null;
}

const apiSettings = {
  fetchCountries: async (searchTerm: string) => {
    const endpoint: string = searchTerm
      ? `${API_URL}${searchTerm}`
      : `${API_URL}`;
    return await (await fetch(endpoint)).json();
  },

  fetchGlobal: async () => {
    const endpoint: string = `${API_URL}regions/world`;
    return await (await fetch(endpoint)).json();
  },

  fetchRegions: async (searchTerm: string | null = null) => {
    const endpoint: string = searchTerm
      ? `${API_URL}regions/${searchTerm}`
      : `${API_URL}regions`;
    return await (await fetch(endpoint)).json();
  },

  fetchSearchEsim: async (searchTerm: string) => {
    const endpoint = `${SEARCH_BASE_URL}${searchTerm}`;
    return await (await fetch(endpoint)).json();
  },
  
  fetchAvailablePackages: async (searchTerm: string) => {
    const endpoint: string = `${API_URL}operator/${searchTerm}/package?type=topup`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
