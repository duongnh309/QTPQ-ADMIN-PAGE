import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import queryString from "query-string";
import useCommentt from "../../pages/ProductDetailPage/use-comment";
import { useSelector } from "react-redux";
function CommentsList({ commentRes, size }) {
  const chooseCount = () => {
    if (count + size > commentRes.totalElement) {
      setCount(commentRes.totalElement);
    } else {
      setCount((count) => count + size);
    }
  };
  const user = useSelector((state) => state.user.current);
  const comments = commentRes.data;
  const [count, setCount] = useState(0);


  useEffect(() => {
    chooseCount();
  }, []);

  const tmpArr = [];
  for (let index = 0; index < count; index++) {
    tmpArr.push(comments[index]);
  }
  const commentsArr = tmpArr.map((comment) => (
    <div className="flex w-full items-center font-sans px-4 py-8">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src="http://i.pravatar.cc/300"
        alt="Avatar of Author"
      />
      <div className="flex-1 px-2">
        <p className="font-bold text-base md:text-xl leading-none mb-2">
          {comment?.username}
        </p>
        <Rating name="read-only" value={comment?.rate} readOnly />
        <p className="text-gray-600 text-xs md:text-base">{comment?.content}</p>
      </div>
    </div>
  ));
  const location = useLocation();
  const { id: productId } = queryString.parse(location.search);
  const { mutate: comment } = useCommentt();
  const onSubmit = (datas) => {
    const { content } = datas;
    const data = { productId, customerId: user.userId, content, rate: value };
    comment(data);
  };
  const [value, setValue] = React.useState(2);
  const { register, handleSubmit } = useForm();
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-10">
      {user && <div className="mt-5 mb-20">
        <h1 className="mb-2">Đánh giá của bạn</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-2 p-8">
            <textarea
              placeholder="Để lại đánh giá của bạn ở đây...."
              className="resize-none w-full"
              name="content"
              cols="40"
              rows="3"
              {...register("content")}
            ></textarea>
          </div>
          <Rating
            className="mt-1"
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <button
            type="submit"
            className="btn hvr-hover ml-36 my-4 mt-3 float-right"
          >
            Bình luận
          </button>
        </form>
      </div>}
      <h1 className="flex justify-center ">Đánh giá sản phẩm</h1>
      {commentsArr}
      {count < commentRes.totalElement && (
        <button
          onClick={() => {
            chooseCount();
          }}
        >
          Xem thêm bình luận
        </button>
      )}
    </div>
  );
}

export default CommentsList;
