import { BASE_URL } from "../../contants";

export const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
};
