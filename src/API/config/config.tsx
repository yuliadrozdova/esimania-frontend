import axios from "axios";
import { Cookies } from "react-cookie";

const MAX_RETRIES = 2;
const cookies = new Cookies();
const API_URL = axios.create({
  baseURL: "https://www.airalo.com/api/",
});

API_URL.interceptors.request.use(
  (config) => {
    const token = cookies.get("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API_URL.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let message = "";

    try {
      if (error.response.status === 401) {
        // Redirect to the login page
        cookies.remove("authToken");
        window.location.href = "/auth/login";
        return Promise.reject(error);
      }
    } catch (e) {
      message = e.message || "";
    }

    try {
      const config = error.config;
      config.headers["retryCount"] = config.headers["retryCount"] || 0;

      if (
        (error.response.status === 404 || error.response.status >= 500) &&
        config.headers["retryCount"] < MAX_RETRIES
      ) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        config.headers["retryCount"]++;
        const response = await API_URL(config);
        return response;
      } else {
        console.error(error.response.status);
        window.location.href = "/";
      }
    } catch (e) {
      // ignored
    }

    return Promise.reject(error);
  }
);

const myEsims = [
  {
    id: 21633831,
    iccid: "8910300000015566784",
    msisdn: null,
    label: null,
    is_archived: false,
    is_installed: true,
    android_direct_install: true,
    has_notification_support: true,
    operator: {
      id: 516,
      title: "Merhaba",
      style: "light",
      gradient_start: "#b91f35",
      gradient_end: "#ad1e35",
      is_kyc_verify: 0,
      kyc_type: null,
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: false,
      is_multi_package: true,
      plan_type: "data",
      activation_policy: "first-usage",
      rechargeability: true,
      other_info:
        "This eSIM does not cover Northern Cyprus. If you plan to use your eSIM data for 91 days (accumulated) or more in a 120-day period, you must register your device\u2019s IMEI number on Turkey\u2019s Central Equipment Identification Register (CEIR) and pay a one-time tax.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "globaldata",
      data_roaming: true,
      airplane_toggle: false,
      networks: [
        {
          network: "Turk Telekom (Avea)",
          service_type: "5G",
          tadig: "TURAC",
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "5G Data-only eSIM.",
        "Rechargeable online with no expiry.",
        "Operates on the Turk Telekom/AVEA network in Turkey.",
        "This eSIM does not cover Northern Cyprus.",
      ],
      phones: {
        msisdn_number: null,
        msisdn_message: null,
        usage_number: null,
        usage_message: null,
        msisdn_type: "not_available",
        usage_type: "api",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/b547f1c0-bb69-423a-b846-61cc0170699a.png",
      },
      is_routing: true,
      country: {
        id: 227,
        slug: "turkey",
        title: "Turkey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
        },
      },
      countries: [
        {
          id: 227,
          slug: "turkey",
          title: "Turkey",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 16218340,
    iccid: "8966052308891663112",
    msisdn: "+66944714825",
    label: null,
    is_archived: false,
    is_installed: false,
    android_direct_install: false,
    has_notification_support: false,
    operator: {
      id: 751,
      title: "dtac",
      style: "light",
      gradient_start: "#015DA5",
      gradient_end: "#1B3A6B",
      is_kyc_verify: 1,
      kyc_type: "no_agreement",
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: true,
      is_multi_package: false,
      plan_type: "data-voice-text",
      activation_policy: "installation",
      rechargeability: false,
      other_info:
        'Unlimited internet at MAX speed for eSIMs activated from 05 February 2024 to 31 July 2024. It comes with 100 minutes of local calls, 30 minutes for India, South Korea, and Vietnam through the "00400" prefix, and 15 baht credit for texts and international calls.',
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "www.dtac.co.th",
      data_roaming: false,
      airplane_toggle: false,
      networks: [
        {
          network: "Dtac",
          service_type: "5G",
          tadig: null,
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "Valid for 10 days ",
        "Operates on the dtac network in Thailand",
        "15 baht call credit.",
        "100 minutes of local calls to any network",
        'Free IDD 30 mins for India, South Korea, and Vietnam though the "00400" prefix',
        "Non-refundable",
        "The validity period starts at the time of installation",
      ],
      phones: {
        msisdn_number: "*101*9#",
        msisdn_message: null,
        usage_number: "*101*9#",
        usage_message: null,
        msisdn_type: "dial",
        usage_type: "dial",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/e5d1fe8b-53af-46cd-87d2-7ecf5f4f9879.png",
      },
      is_routing: false,
      country: {
        id: 219,
        slug: "thailand",
        title: "Thailand",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
        },
      },
      countries: [
        {
          id: 219,
          slug: "thailand",
          title: "Thailand",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 16051500,
    iccid: "8966052308891053595",
    msisdn: "+66948696108",
    label: null,
    is_archived: false,
    is_installed: false,
    android_direct_install: false,
    has_notification_support: false,
    operator: {
      id: 752,
      title: "dtac",
      style: "light",
      gradient_start: "#5B3A6A",
      gradient_end: "#A559A3",
      is_kyc_verify: 1,
      kyc_type: "no_agreement",
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: true,
      is_multi_package: false,
      plan_type: "data-voice-text",
      activation_policy: "installation",
      rechargeability: false,
      other_info:
        "Unlimited local calls to any network. Comes with 15 baht credit for texts and international calls.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "www.dtac.co.th",
      data_roaming: false,
      airplane_toggle: false,
      networks: [
        {
          network: "Dtac",
          service_type: "5G",
          tadig: null,
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "Valid for 15 days ",
        "Operates on the dtac network in Thailand",
        "Unlimited local calls to any network.",
        "15 baht call credit.",
        "Non-refundable",
        "The validity period starts at the time of installation",
      ],
      phones: {
        msisdn_number: "*101*9#",
        msisdn_message: null,
        usage_number: "*101*9#",
        usage_message: null,
        msisdn_type: "dial",
        usage_type: "dial",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/832fc2d0-32e1-4492-b2ec-78705073e64d.png",
      },
      is_routing: false,
      country: {
        id: 219,
        slug: "thailand",
        title: "Thailand",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
        },
      },
      countries: [
        {
          id: 219,
          slug: "thailand",
          title: "Thailand",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 5836145,
    iccid: "8966052211882868429",
    msisdn: "+66815864253",
    label: null,
    is_archived: false,
    is_installed: false,
    android_direct_install: false,
    has_notification_support: false,
    operator: {
      id: 457,
      title: "dtac",
      style: "light",
      gradient_start: "#379E81",
      gradient_end: "#004670",
      is_kyc_verify: 1,
      kyc_type: "no_agreement",
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: true,
      is_multi_package: false,
      plan_type: "data-voice-text",
      activation_policy: "installation",
      rechargeability: false,
      other_info:
        "It comes with 15 Baht of credit for calls and SMS. Non-refundable.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "www.dtac.co.th",
      data_roaming: false,
      airplane_toggle: false,
      networks: [
        {
          network: "Dtac",
          service_type: "5G",
          tadig: null,
          status: false,
          coverage_url: null,
        },
      ],
      info: [
        "Valid for 15 days ",
        "Unlimited 4G/5G data (Fair Usage Policy of 384 kbps after 30 GB usage): 5G is available in 5G compatible ",
        "phones in 5G coverage zones.",
        "Operates on the dtac network in Thailand.",
        "Free calls to dtac network numbers",
        "Free 5 chat apps usage for 15 days.",
        "Free Free 15 Baht call credit.",
        "Non-Rechargeable.",
        "Non-refundable.",
        "The validity period starts at the time of installation.",
      ],
      phones: {
        msisdn_number: "*101*9#",
        msisdn_message: null,
        usage_number: "*101*1*9#",
        usage_message: null,
        msisdn_type: "dial",
        usage_type: "dial",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1012,
        height: 638,
        url: "https://cdn.airalo.com/images/673b2fe2-122a-4e49-9ddc-1f40bc587fc5.png",
      },
      is_routing: null,
      country: {
        id: 219,
        slug: "thailand",
        title: "Thailand",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
        },
      },
      countries: [
        {
          id: 219,
          slug: "thailand",
          title: "Thailand",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 21258679,
    iccid: "8910300000015162166",
    msisdn: null,
    label: null,
    is_archived: false,
    is_installed: true,
    android_direct_install: true,
    has_notification_support: true,
    operator: {
      id: 516,
      title: "Merhaba",
      style: "light",
      gradient_start: "#b91f35",
      gradient_end: "#ad1e35",
      is_kyc_verify: 0,
      kyc_type: null,
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: false,
      is_multi_package: true,
      plan_type: "data",
      activation_policy: "first-usage",
      rechargeability: true,
      other_info:
        "This eSIM does not cover Northern Cyprus. If you plan to use your eSIM data for 91 days (accumulated) or more in a 120-day period, you must register your device\u2019s IMEI number on Turkey\u2019s Central Equipment Identification Register (CEIR) and pay a one-time tax.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "globaldata",
      data_roaming: true,
      airplane_toggle: false,
      networks: [
        {
          network: "Turk Telekom (Avea)",
          service_type: "5G",
          tadig: "TURAC",
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "5G Data-only eSIM.",
        "Rechargeable online with no expiry.",
        "Operates on the Turk Telekom/AVEA network in Turkey.",
        "This eSIM does not cover Northern Cyprus.",
      ],
      phones: {
        msisdn_number: null,
        msisdn_message: null,
        usage_number: null,
        usage_message: null,
        msisdn_type: "not_available",
        usage_type: "api",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/b547f1c0-bb69-423a-b846-61cc0170699a.png",
      },
      is_routing: true,
      country: {
        id: 227,
        slug: "turkey",
        title: "Turkey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
        },
      },
      countries: [
        {
          id: 227,
          slug: "turkey",
          title: "Turkey",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 21193263,
    iccid: "8910300000015099695",
    msisdn: null,
    label: null,
    is_archived: false,
    is_installed: false,
    android_direct_install: true,
    has_notification_support: true,
    operator: {
      id: 516,
      title: "Merhaba",
      style: "light",
      gradient_start: "#b91f35",
      gradient_end: "#ad1e35",
      is_kyc_verify: 0,
      kyc_type: null,
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: false,
      is_multi_package: true,
      plan_type: "data",
      activation_policy: "first-usage",
      rechargeability: true,
      other_info:
        "This eSIM does not cover Northern Cyprus. If you plan to use your eSIM data for 91 days (accumulated) or more in a 120-day period, you must register your device\u2019s IMEI number on Turkey\u2019s Central Equipment Identification Register (CEIR) and pay a one-time tax.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "globaldata",
      data_roaming: true,
      airplane_toggle: false,
      networks: [
        {
          network: "Turk Telekom (Avea)",
          service_type: "5G",
          tadig: "TURAC",
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "5G Data-only eSIM.",
        "Rechargeable online with no expiry.",
        "Operates on the Turk Telekom/AVEA network in Turkey.",
        "This eSIM does not cover Northern Cyprus.",
      ],
      phones: {
        msisdn_number: null,
        msisdn_message: null,
        usage_number: null,
        usage_message: null,
        msisdn_type: "not_available",
        usage_type: "api",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/b547f1c0-bb69-423a-b846-61cc0170699a.png",
      },
      is_routing: true,
      country: {
        id: 227,
        slug: "turkey",
        title: "Turkey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
        },
      },
      countries: [
        {
          id: 227,
          slug: "turkey",
          title: "Turkey",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
          },
        },
      ],
    },
    renewal: null,
  },
  {
    id: 21184216,
    iccid: "8910300000015091076",
    msisdn: null,
    label: null,
    is_archived: false,
    is_installed: true,
    android_direct_install: true,
    has_notification_support: true,
    operator: {
      id: 516,
      title: "Merhaba",
      style: "light",
      gradient_start: "#b91f35",
      gradient_end: "#ad1e35",
      is_kyc_verify: 0,
      kyc_type: null,
      operator_legal_name: null,
      privacy_policy_url: null,
      type: "local",
      is_prepaid: false,
      is_multi_package: true,
      plan_type: "data",
      activation_policy: "first-usage",
      rechargeability: true,
      other_info:
        "This eSIM does not cover Northern Cyprus. If you plan to use your eSIM data for 91 days (accumulated) or more in a 120-day period, you must register your device\u2019s IMEI number on Turkey\u2019s Central Equipment Identification Register (CEIR) and pay a one-time tax.",
      is_kyc_one_time: false,
      kyc_restriction: null,
      kyc_expiry_duration: null,
      apn_type: "single",
      apn_type_ios: "automatic",
      apn_type_android: "single",
      apn_single: "globaldata",
      data_roaming: true,
      airplane_toggle: false,
      networks: [
        {
          network: "Turk Telekom (Avea)",
          service_type: "5G",
          tadig: "TURAC",
          status: true,
          coverage_url: null,
        },
      ],
      info: [
        "5G Data-only eSIM.",
        "Rechargeable online with no expiry.",
        "Operates on the Turk Telekom/AVEA network in Turkey.",
        "This eSIM does not cover Northern Cyprus.",
      ],
      phones: {
        msisdn_number: null,
        msisdn_message: null,
        usage_number: null,
        usage_message: null,
        msisdn_type: "not_available",
        usage_type: "api",
        usage_email: "support@airalo.com",
      },
      image: {
        width: 1035,
        height: 653,
        url: "https://cdn.airalo.com/images/b547f1c0-bb69-423a-b846-61cc0170699a.png",
      },
      is_routing: true,
      country: {
        id: 227,
        slug: "turkey",
        title: "Turkey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
        },
      },
      countries: [
        {
          id: 227,
          slug: "turkey",
          title: "Turkey",
          image: {
            width: 132,
            height: 99,
            url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
          },
        },
      ],
    },
    renewal: null,
  },
];

export { API_URL, myEsims };
