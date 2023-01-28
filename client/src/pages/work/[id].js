import { useRouter } from "next/router";
import Axios from "axios";

export default function CommentPage() {
  const router = useRouter();
  const id = router.query.id;
  const comment = router.query.comment;

  return (
    <>
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  );
}
