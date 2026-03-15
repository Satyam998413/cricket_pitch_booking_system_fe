import { apiSlice } from "./apiSlice";

export const pitchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getPitches: builder.query({
      query: () => "/pitch/",
      providesTags: ["Pitch"]
    }),

    createPitch: builder.mutation({
      query: (data) => ({
        url: "/pitch/create",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Pitch"]
    }),

    updatePitch: builder.mutation({
      query: (data) => ({
        url: "/pitch/update",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Pitch"]
    })
    ,
    deletePitch: builder.mutation({
      query: (data) => ({
        url: "/pitch/delete",
        method: "DELETE",
        body: data
      }),
      invalidatesTags: ["Pitch"]
    })

  })
});

export const {
  useGetPitchesQuery,
  useCreatePitchMutation,
  useUpdatePitchMutation,
  useDeletePitchMutation,
} = pitchApi;