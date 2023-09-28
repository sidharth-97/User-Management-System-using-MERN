import { apiSlice } from "./apiSlice";
const ADMIN_URL = '/api/admin'

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/auth`,
                method: 'POST',
                body:data
            })
        }),
        adminLogout: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/logout`,
                method: 'POST',
                body:data
            })
        }),
        userList: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/users`,
                method: 'GET',
                body:data
            })
        }),
        block: builder.mutation({
            query: ({ id }) => ({
              url: `${ADMIN_URL}/delete-user?id=${id}`,
              method: 'DELETE',
            }),
        }),
        getUser:builder.mutation({
            query: ({ id }) => ({
              url: `${ADMIN_URL}/user-details?id=${id}`,
              method: 'GET',
            }),
        }),
        Updateuser: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/edit-user`,
                method: 'PUT',
                body:data
            })
        }),
        AddUser: builder.mutation({
            query: (data) => ({
                url: `${ADMIN_URL}/add-user`,
                method: 'POST',
                body:data
            })
        }),

    })
})

export const {
    useAdminLoginMutation,useAdminLogoutMutation,useUserListMutation,useBlockMutation,useGetUserMutation,useUpdateuserMutation,useAddUserMutation}=adminApiSlice
