import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router";
import { getPostDetail } from "../api/post";

const CustomDetail:React.FC =()=> {
  const params = useParams<{id:string}>();
  const navigate = useNavigate();
  // const [detailData, setDetailData] = useState({});

  useEffect(()=>{
    // setDetailData(getPostDetail(params.id))
  },[]);
  return (
    <div>
      <button onClick={()=>navigate(`/`)}>Home</button>
      <button onClick={()=>navigate(-1)}>Back</button>
      <p>CustomDetail {params.id}</p>
      </div>
  )
}

export default CustomDetail