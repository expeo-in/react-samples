import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function Like() {
  const [liked, setLike] = useState(false);
  return (
    <div>
      {liked ? (
        <AiFillHeart
          size="100"
          color="pink"
          onClick={() => setLike(!liked)}
        ></AiFillHeart>
      ) : (
        <AiOutlineHeart
          size="100"
          color="pink"
          onClick={() => setLike(!liked)}
        ></AiOutlineHeart>
      )}
    </div>
  );
}
