import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <div>NewsPage</div>;
      <ul>
        <li>
          <Link href="/news/next-js-is-great-framework">
            Next JS is great framework
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
