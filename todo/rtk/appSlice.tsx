import React from 'react';
import { _NEVER, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Todos'],
    endpoints: (builder) =>({
        getTodos: builder.query({
            query:() => 'todos',
            providesTags: ['Todos'],
        }),
        addTodo: builder.mutation({
            query:(newTodo) =>({
                url: 'todos',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: ['Todos'],
        }),
        updateTodo: builder.mutation({
            query:({id,...uodatedTodo}) =>({
                url: `todos/${id}`,
                method: 'PUT',
                body: uodatedTodo,
            }),
            invalidatesTags: ['Todos'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
              url: `todos/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['Todos'],
          }),
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;