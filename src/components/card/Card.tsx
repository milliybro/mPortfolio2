import { Card, Progress } from "antd"
import CardInterFae from "../../types/Card"
import Meta from "antd/es/card/Meta"


const Card1 = ({_id , name , percent , user} : CardInterFae) => {
  const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
  return (
    <Card
      hoverable
    >
      <p className={_id}>@ {user}anynomous</p>
      <p className={_id}>Skill Name: {name}</p>
      <p className="percent">Mastered: <Progress percent={percent} strokeColor={twoColors} /></p>

      
    </Card>
  )
}

export default Card1