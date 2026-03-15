import { apiSlice } from "./apiSlice";

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getSlots: builder.query({
      query: ({ pitchId, date }) =>
        `/booking/slots?pitchId=${pitchId}&date=${date}`,
      providesTags: ["Slot"]
    }),

    reserveSlot: builder.mutation({
      query: (data) => ({
        url: "/booking/reserve-slot",
        method: "POST",
        body: data
      })
    }),

    confirmBooking: builder.mutation({
      query: (data) => ({
        url: "/booking/confirm-booking",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Booking", "Slot"]
    }),

    myBookings: builder.query({
      query: () => "/booking/my-bookings",
      providesTags: ["Booking"]
    })

  })
});

export const {
  useGetSlotsQuery,
  useReserveSlotMutation,
  useConfirmBookingMutation,
  useMyBookingsQuery
} = bookingApi;