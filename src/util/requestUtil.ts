export const parseParamsToUrl = (params: object) => {
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });

  return queryParams.toString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  return cleaned.startsWith("02")
    ? cleaned.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3")
    : cleaned.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
};
