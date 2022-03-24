import { useQuery } from "react-query";
import commentsApi from "../../../../../api/commentsApi";
const useComment = (id) => {
  return useQuery("commentss", async () => {
    return commentsApi.getBycommentId(id);
  });
};

export default useComment;
