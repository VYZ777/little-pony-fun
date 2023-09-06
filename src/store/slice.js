import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllCharacters = createAsyncThunk(
  'characters/all',
  async () => {
    const response = await fetch('https://ponyapi.net/v1/character/all')
    const json = await response.json()
    return json.data
  }
)

export const fetchAlicorn = createAsyncThunk('characters/alicorn', async () => {
  const response = await fetch(
    'https://ponyapi.net/v1/character/by-kind/Alicorn'
  )
  const json = await response.json()
  return json.data
})

export const fetchUnicorn = createAsyncThunk('characters/unicorn', async () => {
  const response = await fetch(
    'https://ponyapi.net/v1/character/by-kind/Unicorn'
  )
  const json = await response.json()
  return json.data
})

export const fetchImages = createAsyncThunk('characters/images', async () => {
  const response = await fetch('https://ponyapi.net/v1/image/all')
  const json = await response.json()
  return json.data
})

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    alicorn: [],
    unicorn: [],
    images: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCharacters.fulfilled, (state, action) => {
      state.characters = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchAllCharacters.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchAlicorn.fulfilled, (state, action) => {
      state.alicorn = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchAlicorn.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUnicorn.fulfilled, (state, action) => {
      state.unicorn = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchUnicorn.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchImages.pending, (state, action) => {
      state.loading = true
    })
  },
})
