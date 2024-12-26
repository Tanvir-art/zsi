import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { RootState } from "../store"; // Ensure you have the correct path to your RootState
import Cookies from "js-cookie";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: (args, api, extraOptions) => {
    const token = Cookies.get("token");

    return fetchBaseQuery({
      baseUrl: "https://api.zsimarketing.com/api", // Ensure the protocol is included
      prepareHeaders: (headers) => {
        if (token) {
          headers.set("Authorization", token); // Set the token in the header
        }
        return headers;
      },
    })(args, api, extraOptions);
  },
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useLoginMutation } = baseApi;
