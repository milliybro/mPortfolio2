import { Card } from "antd"
import Meta from "antd/es/card/Meta"

interface User {
  role: string;
  fields: never[];
  client: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
  __v: number;
  photo: null;
}

interface EducationIntercafe {
  description?: string,
  level?: string,
  name?: string,
  user?: User | null,
  __v?: number,
  _id?: string,
}

const Card2 = ({_id , name , level , user , description} : EducationIntercafe) => {
  return (
    <Card
      hoverable
    >
      <p className={_id} style={{color: "red"}}>@{user?.username} anynomous</p>
      <p className={_id}>Name Work: {name}</p>
      <p className={_id}>Level : {level}</p>
      <h5 className={_id}>{description}</h5>

    </Card>
  )
}


export default Card2