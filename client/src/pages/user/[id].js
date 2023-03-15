import { useRouter } from "next/router";
const User = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log({ id });
  return (
    <div>
      <h1>Hello! Welcome {id} </h1>
    </div>
  );
};
export default User;
