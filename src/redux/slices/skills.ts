

import {PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CardInterFae from "../../types/Card";
import request from "../../server/request";


const skillsName = "skills"

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
  skills: CardInterFae[];
  total: number;
  loading: boolean;
}

const initialState : initialStateInterface = {
  skills:[],
  total:0,
  loading : false,
}

export const getSkills = createAsyncThunk("skill/fetching" , async ({active = 1 , search} : {active : number , search : string})=>{
  const params = {
    search,
    page:active,
    limit : 12
  }  
  const {data} = await request.get("skills" , {params})
  return data
})

const SkillSlice = createSlice({
  initialState,
  name:skillsName,
  reducers:{},
  extraReducers: (builder) => {
    
    builder.addCase(getSkills.pending,(state) => {
      state.loading = true
    }
    )
    .addCase(getSkills.fulfilled,(state , {payload : {data , pagination}} : PayloadAction<Data>)=>{
      state.skills = data,
      state.total = pagination.total
      state.loading = false
    }
    ).addCase(getSkills.rejected,(state) => {
      state.loading = false
    }
    )
  }
})

const skillsReducer = SkillSlice.reducer

export {skillsName}

export default skillsReducer


