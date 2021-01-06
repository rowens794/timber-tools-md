import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../postComponents/postStyles.module.css";
import HeroImage from "../../postComponents/heroImage";
import PostTitle from "../../postComponents/postTitle";
import ProductImage from "../../postComponents/productImg";
import BuyButton from "../../postComponents/buyButton";
import InContentProductLink from "../../postComponents/inContentProductLink";
import YoutubeVideo from "../../postComponents/youtubeVideo";
import helpers from "../../postComponents/helpers";

export default function index({ props }) {
  let { title, coverImage, excerpt } = props;

  return (
    <>
      <Head>
        <meta name="description" content={excerpt} />
      </Head>
      <article>
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} />
          <PostTitle title={title} />
          <p>
            Of course, being a woodworker you could always build your own table. This is reasonable option for those that don't already have an
            endless list of projects, but for those that do, this is what you should be thinking about:
          </p>
          <ul>
            <li>
              <strong>Price</strong> - you're looking at an investment of between $100 - $500, as with anything it is important to know what you need.
            </li>
            <li>
              <strong>Work Surface Dimensions</strong> -- Routing large cabinet panels is going to be difficult on a 14" surface, most won't need a
              huge surface but it is important to keep in mind what your typical projects will look like.
            </li>
            <li>
              <strong>Fence Quality</strong> -- just about every tool in the shop interacts with a fence in one way or another, If you're going to be
              using this table frequently, you want to make sure the fence isn't going to be the bane of your existence.
            </li>
            <li>
              <strong>Safety features</strong> -- Lockout keys, bit guards, t-tracks, and included accessories such as feather boards all make
              operating you router less risky
            </li>
            <li>
              <strong>Dust Control</strong> -- Open frame tables are inherently more exposed to the nuisance of dust regardless of how well positioned
              vac ports are installed.
            </li>
            <li>
              <strong>Size</strong> -- Router tables vary from bench top to dedicated tables, for those with space to spare a dedicated option is a
              magical thing.
            </li>
          </ul>
          <p>Let's begin with the two most popular options which both come from Bosch.</p>

          <h2>Bosch RA1181 Benchtop Router Table</h2>
          <h3>A worthy addition to our list of router table reviews</h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Bosch-RA1181.jpg"
            alt="Bosch RA1181"
            title="Bosch RA1181"
          />

          <BuyButton productLink="https://amzn.to/2nYBdxg" />

          <p>
            The <strong>RA1181 Benchtop Router Table</strong> features 27" x 18" aluminum work surface. At 30 lbs it is a weighty (especially once you
            add a router), yet reasonably portable option. The aluminum fence receives uniformly high praise from users of the product. To ensure your
            router fits check out the compatibility list{" "}
            <a href="https://www.cpotools.com/on/demandware.static/-/Sites-cpo-master-catalog/default/dw75b56d18/product_media/bsh/bshnra1181/documents/bshnra1181_Compatible%20Routers.pdf">
              <strong>here</strong>
            </a>
            .
          </p>
          <p>
            This table typically sells for $159.00 on Amazon.com, but over the last year the price has fluctuated between $120 and $179. As you would
            expect the price tends to increase in the summer and near Christmas and fall at the beginning of each year. As of March '17 there were
            nearly 600 reviews clocked in at Amazon.com, with a 4.3 out of 5 rating. This is an extremely highly rated product. To check out the
            product manual, click this{" "}
            <a href="http://www.homedepot.com/catalog/pdfImages/48/484bf812-f1db-442e-a065-656b472ad729.pdf">
              <strong>link</strong>
            </a>
            .
          </p>
          <p>
            The table does have a dust collection port in the fence, but given that the bottom of the table is open, it is a certainty that dust will
            be flying out below the table near the chuck.
          </p>
          <p>Check out the video of this table being unboxed below.</p>

          <h2>Bosch RA1171 Cabinet Style Router Table</h2>
          <h3>The best router table for the money</h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Bosch-RA1171.jpg"
            alt="Bosch RA1171"
            title="Bosch RA1171"
          />

          <BuyButton productLink="https://amzn.to/2nYBdxg" />

          <p>
            Up next is another Bosch product, the <strong>RA1171 Cabinet Style Router Table</strong>. The work surface on this cabinet style table is
            a bit smaller than the RA1181 at roughly 25" x 16". However, the table comes in at a beefier 42 pounds. This primary differentiator
            between this table and the RA1181 is the fact that the cabinet encloses dust and chippings that would otherwise make it into your work
            environment. On top of that, this model includes two dust collection ports, one on the fence and a second in the cabinet. The RA1171
            excels at keeping your work environment clean.
          </p>
          <p>
            The fence is identical to the RA1181 model, which again is a very highly rated fence. The table includes two feather boards, a clear
            guard, three mounting plates, and two shims. If you want to check out a list of compatible routers you can find that{" "}
            <a href="https://www.cpotools.com/on/demandware.static/-/Sites-cpo-master-catalog/default/dw75b56d18/product_media/bsh/bshnra1181/documents/bshnra1181_Compatible%20Routers.pdf">
              <strong>here</strong>
            </a>
            . Additionally, if you want to browse through the manual for the RA1171, you can check that out on Bosch's site at this{" "}
            <a href="https://www.boschtools.com/us/en/ocsmedia/r00287v1.pdf">
              <strong>link</strong>
            </a>
            .
          </p>
          <p>
            This table is slightly cheaper than the RA1181, primarily because the work surface is not entirely aluminum. It normally sells for
            $150-$160 on Amazon, but if you watch out it can be had for less than $140 from time to time.
          </p>
          <p>Finally, Scott Sutton put together a great video review of the table that I've included down below.</p>

          <h2>Kreg PRS1045 Precision Router Table System</h2>
          <h3>
            ​The best router table available <em>(on a reasonable budget)</em>
          </h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Kreg-PRS1045.jpg"
            alt="Kreg PRS1045"
            title="Kreg PRS1045"
          />

          <BuyButton productLink="https://amzn.to/2piETKc" />

          <p>
            Next up is the <strong>Kreg PRS1045 Precision Router Table System</strong>. This is the highest end table we are going to be looking at
            and at $499 it's also the priciest. One item to note on the price is that your likely not going to find it for less than $499. Over the
            last two years, the price hasn't moved once on Amazon. This system has a 4.9 out of 5.0 star rating on Amazon with 11 reviews.
          </p>
          <p>
            The user drills the necessary holes for their router so this system works with any router. While this adds a bit of work, many users
            including me prefer this as you don't have a bunch of unnecessary holes waiting to be clogged and snag your work piece.
          </p>
          <p>
            The table top is 1" think MDF and offers an extremely large 24" x 32" work area. An additional benefit for those that can afford the space
            is that this is a stand alone unit and does not require bench-top space to operate. Kreg's Precision Router Table Fence is self squaring
            and extremely high quality. The fence on it's own runs ~$200.
          </p>
          <p>
            If you want to check out the manuals: the table top manual can be found{" "}
            <a href="https://www.kregtool.com/webres/Files/PRS1025-MANUAL.pdf">
              <strong>here</strong>
            </a>
            , and the fence manual{" "}
            <a href="https://www.kregtool.com/webres/Files/PRS1015-MANUAL.pdf">
              <strong>here</strong>
            </a>
            .
          </p>

          <h2>Bench Dog ProTop Contractor Benchtop Router Table</h2>
          <h3>The second best router table on the list​</h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Bench-Dog-40-001.jpg"
            alt="Bench Dog ProTop"
            title="Bench Dog ProTop"
          />

          <BuyButton productLink="https://amzn.to/2nYJ8dV" />

          <p>
            The <strong>Bench Dog ProTop Benchtop Table</strong> is a worthy competitor with the 2 Bosch products and the Kreg table. As you can see
            in the picture above it is a cabinet style table, which would be a significant advantage when it comes to dust control. The work area is a
            16" x 22" laminate top, which is bigger than both Bosch tables, yet not quite as large as the Kreg. The table is well rated at 4.1 out of
            5.0 stars on Amazon over 215 reviews. It is priced right between the Bosch tables and the Kreg table, at ~$275. The price has bounced
            around a bit over the last two years, but has always stayed at between $250 - $300.
          </p>
          <p>
            The fence system is workable, but not nearly as solid as either of the Bosch tables and it's certainly not as good as the Kreg. Oddly
            enough, while a dust collection port is included on the fence, there is not one for the cabinet. This forces you to regularly vacuum out
            the cabinet to prevent a build up of saw dust.
          </p>
          <p>
            You can check out the manual for the ProTop table{" "}
            <a href="http://go.rockler.com/tech/RTD10000485AC.pdf">
              <strong>here</strong>
            </a>
            . Below I've include a review video which was very helpful for me as I was learning about the table.
          </p>

          <h2>PORTER-CABLE 698 Bench Top Router Table</h2>
          <h3>Avoid this table at all costs​</h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Porter-Cable-698.jpg"
            alt="PORTER-CABLE 698"
            title="PORTER-CABLE 698"
          />

          <BuyButton productLink="https://amzn.to/2onQ4Et" />

          <p>
            I want to wrap this up with a look at the <strong>Porter-Cable 698 Bench Top Router Table</strong>, since it is one of the most discussed
            tables out there. I am going to preface everything I type below with one thought: I am not a fan.
          </p>
          <p>
            The table costs around $170 typically, although this price has fluctuated between $120 - $250 over the last year. For that price you'd be
            much better off going with either of the less expensive Bosch tables.
          </p>
          <p>
            This table features the smallest work top at 20" x 17". The most disappointing aspect of this table is the split fence which requires
            independent adjustment. This is not only time consuming to adjust but can lead to work piece snags, which in the best case ruin a work
            piece and in the worst case is dangerous.
          </p>
          <p>
            52 Amazon reviewers gave this table a ho-hum rating of 3.7 stars. There are some compatibility issues to consider, and while Porter Cable
            states this model is pre-drilled for Porter Cable routers, it does not list any non-brand routers it is compatible with. I have searched
            every where for a manual but a linkable version is also non-existent on the internet.
          </p>

          <h2>Summing it Up...</h2>
          <p>The way I see it there are 3 choices:</p>
          <ol>
            <li>
              <p>​If you're looking for THE BEST router table and you have space and money to space, go with the Kreg.</p>
            </li>
            <li>
              <p>If dust control is the most important issue, go with the Bench Dog.</p>
            </li>
            <li>
              <p>Finally, if you're on a tight budget and you can make due with a smaller work area, get the Bosch RA1171.</p>
            </li>
          </ol>
        </div>
      </article>
    </>
  );
}
