import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {Spin} from "antd"
import { getEducation } from "../redux/slices/education";
import Card2 from "../components/card/Card2";


const UsersEducationPage = () => {

  const [search , setSearch] = useState("")
  const [active , setActive] = useState(1)

  const {education , total , loading } = useAppSelector(state => state.education)

  const dispatch = useAppDispatch()

  console.log(education);
  

  const [totalPaginate , setTotalPaginate] = useState(1)

  useEffect(()=>{
    dispatch(getEducation({search , active}))
    const r = Math.ceil(total/12)
    setTotalPaginate(r)
  } , [search , dispatch , active ,total])

  const SearchEducations = (e: React.FormEvent<HTMLInputElement>)=>{
    setSearch(e.currentTarget.value)
    setActive(1)
  }

  return (
    <Spin  spinning={loading} >
      <div className="skills-page">
      <section id="search">
        <div className="container">
          <div className="search-container">
            <input onChange={SearchEducations} type="text" placeholder="Search..." />
          </div>
        </div>
      </section>  
      <div className="all-skills">
        <div className="container">
          <div className="skills">
          {
            education.map((el)=>{              
              return <Card2 {...el} key={el._id}/>
            })
          }
          </div>
        </div>
      </div>
      {/* {
            totalPaginate > 1 ? <section id="pagination">
            <div className="container">
              <div className="pagination-btns">
                <button disabled={active === 1 ? true : false} onClick={()=>{setActive(active-1)}}>{"<"}</button>
                <span>{active}</span>
                <button disabled={totalPaginate === active ? true : false} onClick={()=>{setActive(active+1)}}>{">"}</button>
              </div>
            </div>
          </section> : null
          } */}
      </div>
    </Spin>
  )
}

export default UsersEducationPage