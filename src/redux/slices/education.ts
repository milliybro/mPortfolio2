

import {PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CardInterFae from "../../types/Card";
import request from "../../server/request";


const educationName = "education"

interface Data {
  pagination: {
      next: number;
      limit: number;
      page: number;
      total: number;
  };
  data: {
      _id: string;
      name: string;
      percent: number;
      user: null;
      __v: number;
  }[];
}

interface initialStateInterface {
  education: CardInterFae[];
  total: number;
  loading: boolean;
}

const initialState : initialStateInterface = {
  education:[],
  total:0,
  loading : false,
}

export const getEducation = createAsyncThunk("skill/fetching" , async ({active = 1 , search} : {active : number , search : string})=>{
  const params = {
    search,
    page:active,
    limit : 20
  }  
  const {data} = await request.get("education" , {params})
  return data
})

const EducationSlice = createSlice({
  initialState,
  name:educationName,
  reducers:{},
  extraReducers: (builder) => {
    
    builder.addCase(getEducation.pending,(state) => {
      state.loading = true
    }
    )
    .addCase(getEducation.fulfilled,(state , {payload : {data , pagination}} : PayloadAction<Data>)=>{
      state.education = data,
      state.total = pagination.total
      state.loading = false
    }
    ).addCase(getEducation.rejected,(state) => {
      state.loading = false
    }
    )
  }
})

const educationReducer = EducationSlice.reducer

export {educationName}

export default educationReducer


