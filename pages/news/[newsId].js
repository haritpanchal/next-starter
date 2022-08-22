import { useRouter } from "next/router";
const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  return <div>DetailPage</div>;
};

export default DetailPage;
