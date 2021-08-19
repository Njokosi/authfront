import { signIn, signOut, useSession } from "next-auth/client";
import { Box } from "@chakra-ui/react";
import { withAuth } from "../../constants/HOCs";

import SomeText from "components/SomeText";
import SomeImage from "components/SomeImage";
import CTASection from "components/CTASection";

const Home = (props: any) => {
  const { session } = props;
  return (
    <>
      <Box mb={8} w="full">
        {session && (
          <>
            Signed in as {session?.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
            {session.accessToken && <pre>User has access token</pre>}
          </>
        )}
        {/* <Link href="/posts">Go to posts</Link> */}
      </Box>
    </>
  );
};

export default withAuth(3 * 60)(Home);
