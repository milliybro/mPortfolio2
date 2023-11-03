import { Card } from "antd"
import CardInterFae from "../../types/Card"
import Meta from "antd/es/card/Meta"


const Card1 = ({_id , name , percent , user} : CardInterFae) => {
  return (
    <Card
      hoverable
    >
      <p className={_id}>@ {user}anynomous</p>
      <p className={_id}>Skill Name: {name}</p>
      <p className={_id}>Mastered: {percent}%</p>

      
    </Card>
  )
}

export default Card1