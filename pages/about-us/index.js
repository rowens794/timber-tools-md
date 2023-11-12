import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Intro from "../../components/intro";
import Footer from "../../components/footer";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>About Timber & Tools</title>
          <meta
            name="description"
            content="Timber and Tools is a woodworking based blog."
          />
        </Head>
        <Container>
          <Intro />
          <div
            className="min-h-screen"
            style={{ maxWidth: "1140px", margin: "auto" }}
          >
            <h1>About Us</h1>
            <br />
            <p>
              We are committed to helping new woodworkers learn the ropes that
              that they can enjoy this timeless past time. As with any complex
              activity, learning the terminology and necessary skills to fully
              enjoy this hobby can be daunting in the beginning. We want to help
              those folks that are new (as well as those who have been doing
              this for while) get to the point where they are confident taking
              on any project.
            </p>
            <br />
            <p>
              My team and I devote a lot of time, energy, and resources to this
              site and while we don't ever ask for anything in return from our
              readers, we do include affiliate links to tools and resources that
              we believe would be helpful to you.  There are no incremental
              charges for our readers to make a purchase through our affiliate
              links, but we do collect a small fee for transactions that
              originate from our links.  If you do enjoy our material and you
              see us talking about a tool you are interested in, please purchase
              through our link - it'll help us to continue to bring great
              content to you. We are a participant in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed to
              provide a means for us to earn fees by linking to Amazon.com and
              affiliated sites. If you'd like to learn more about our Privacy
              Policy check it out 
              <a href="https://www.timberandtools.com/privacy-policy/">here</a>
              .​
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
