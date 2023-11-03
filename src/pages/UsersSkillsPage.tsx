import { useEffect, useState } from "react";
import Card1 from "../components/card/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks"

import {Spin, Button} from "antd"
import { getSkills } from "../redux/slices/skills";

import "./UsersSkillsPage.scss"

const UsersSkillsPage = () => {

  const [search , setSearch] = useState("")
  const [active , setActive] = useState(1)

  const {skills , total , loading } = useAppSelector(state => state.skills)

  const dispatch = useAppDispatch()

  const [totalPaginate , setTotalPaginate] = useState(1)

  useEffect(()=>{
    dispatch(getSkills({search , active}))
    const r = Math.ceil(total/10)
    setTotalPaginate(r)
  } , [search , dispatch , active ,total])

  const SerachSkills = (e: React.FormEvent<HTMLInputElement>)=>{
    setSearch(e.currentTarget.value)
    setActive(1)
  }

  
  return (
    <Spin  spinning={loading} >
      <div className="skills-page">
      <section id="search">
        <div className="container">
          <div className="search-container">
            <h1>Skills</h1>
            <input onChange={SerachSkills} type="text" placeholder="Search..." />
            <Button type="dashed" danger>
      +
    </Button>
          </div>
        </div>
      </section>  
      <div className="all-skills">
        <div className="container">
          <div className="skills">
          {
            skills.map((el)=>{
              return <Card1 key={el._id} {...el} />
            })
          }
          </div>
        </div>
      </div>
      
      </div>
    </Spin>
  )
}

export default UsersSkillsPage