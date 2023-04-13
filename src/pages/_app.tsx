import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import LayoutMain from "~/components/layouts/layout-main";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
};

export default api.withTRPC(MyApp);
