import { useParams, useNavigate } from "react-router-dom"

function ProductDetail() {
 const {id} = useParams();
 const navigate = useNavigate();
 

  return (
   <>
    <p>
      product id:{id}
    </p>
    <button onClick={()=>navigate(-1)}>Navigation</button>
   </>
  )
}

export default ProductDetail