import { permanentRedirect } from "next/navigation";

function IndexPage() {
  permanentRedirect("/home");
  return <></>;
}

export default IndexPage;
