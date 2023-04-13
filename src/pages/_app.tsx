import { type AppType } from "next/app";
import { api } from "~/utils/api";
import LayoutMain from "~/components/layouts/layout-main";

import "swiper/css";
import "swiper/css/pagination";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
};

export default api.withTRPC(MyApp);
