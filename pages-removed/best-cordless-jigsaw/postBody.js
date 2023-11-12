import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../postComponents/postStyles.module.css";
import HeroImage from "../../postComponents/heroImage";
import PostTitle from "../../postComponents/postTitle";
import ProductImage from "../../postComponents/productImg";
import BuyButton from "../../postComponents/buyButton";
import ComparisonTable from "../../postComponents/comparisonTable";
import ProductFeatures from "../../postComponents/productFeatures";

export default function index({
  props = { title: null, coverImage: null, excerpt: null },
}) {
  let { title, coverImage, excerpt } = props;

  return (
    <>
      <Head>
        <meta name="description" content={excerpt} />
        <title>{title}</title>
      </Head>
      <article>
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} />
          <PostTitle title={title} />
          <p>
            I take it you came to this article searching for the best cordless
            jigsaw that’s available on the market in 2023. While I can answer
            that question for you, the answer that is going to ensure you end up
            with the right tool is that it depends.
          </p>
          <p>
            In this article I’ll help you examine all of the cordless jigsaws
            that are available on the market today from the major manufacturers
            to figure out which best fits your needs.
          </p>
          <p>
            Before we look at the individual products there are a couple of
            things that you need to understand about the battery operated jigsaw
            landscape.
          </p>
          <h3>Traditional vs. Barrel Grip Jigsaws</h3>
          <p>
            The invisible hand of the market has done its work and determined
            that two styles of jigsaws must exist: Traditional handle, or
            D-Shaped grip jigsaws, and jigsaws that go without a handle commonly
            called barrel grip jigsaws.
          </p>
          <p>
            The important thing for you to understand about these two types is
            that there is essentially zero difference between how these two
            styles operate. The choice between the two comes down to your
            personal preference.
          </p>
          <p>
            The manufacturers will try to sell you on the argument that barrel
            grip jig saws are better geared towards detail work and traditional
            grip jig saws are better suited towards quick rough cuts, but this
            doesn’t really hold a lot of water if you listen to what folks who
            actually use both model says - which is that there is no real
            difference.
          </p>
          <p>
            One thing you may want to consider is that if you have large hands,
            a barrel grip jigsaw may be more comfortable to operate and vice
            versa if you have small hands. But honestly don’t stress about this
            choice too much.
          </p>
          <h3>Brushless Motors</h3>
          <p>
            You’ve probably heard about the fuss with brushless motors, but you
            may not understand what exactly the benefits are. Because brushless
            motors don’t have copper brushes rubbing against contacts, they use
            magnets instead, they don’t lose any power due to friction. This
            means a brushless tool will be more powerful and energy efficient
            than an equivalent traditional motor.
          </p>
          <p>
            Given that we are talking about CORDLESS tools here, this is a big
            deal and it is one of the biggest factors that separates the pro
            models vs consumer models. If you want to read more about it Popular
            Mechanics has a great{" "}
            <a
              href="https://www.popularmechanics.com/home/tools/a8109/whats-so-great-about-brushless-motor-power-tools/"
              target="_blank"
            >
              article
            </a>
            .
          </p>
          <h3>Cordless Jigsaws Sold Without Batteries</h3>
          <p>
            In just about every case a cordless jigsaw will be sold without a
            battery. You can of course by battery included kits, but they are
            more expensive - as you would expect. As we run down the list of
            jigsaws on the market I will be primarily evaluating the saws only,
            i.e. without batteries.
          </p>
          <p>
            This can become an important consideration if you have already
            bought into a tool family's cordless tool suite. It is much more
            convenient to manage a single set of batteries than multiple
            batteries from a range of manufacturers. In fact, if you do have a
            pre-existing collection of batteries from one manufacturer, It would
            be very difficult for me to recommend purchasing a tool from another
            family. The benefits you get from having compatible batteries for
            all your tools typically out-weigh other tool specific benefits or
            weaknesses.
          </p>
          <h3>Target Market</h3>
          <p>
            As you will see once we start looking at individual tools,
            manufacturers typically target their lineups to particular markets:
            home DIY’ers, professional contractors, or somewhere in the middle
            (let’s call them pro-sumer’s).
          </p>
          <p>
            I’ll give you an idea of where each tool falls in this article, but
            the big differentiators are the robustness of the tool and to a
            large extent, whether the tool has a brushless motor.
          </p>
          <p>
            The brushless motor is becoming a feature that is expected in
            professional tools due to the efficiency and power gains, but is too
            expensive to put in tools targeted for every day consumers.
          </p>
          <h3>Let’s Look at some Cordless Jig saws</h3>
          <p>
            I’m going to begin with my top pick that I think represents the all
            around best value for a cordless jig saw.
          </p>
          <h3>Top-Pick: Ridgid R8832B OCTANE 18V</h3>
          <p>
            The Ridgid R8832B is a pro-sumer model that usually sells for around
            $125 without a battery. This jig saw actually won the top spot in my
            book, because if you don’t already have a battery you can choose a
            battery included package for just about $30 extra, which is very
            inexpensive, and probably represents an attempt by Ridgid to pull
            people into their product lineup.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Ridgid-R8832B.jpg"
            alt="Ridgid R8832B"
            title="Ridgid R8832B"
          />
          <p>
            While I would classify this tool as a pro-sumer model, it does
            feature a lot of pro-level features: it has a brushless motor,
            variable speed trigger, a 1-inch cutting stroke and it operates
            up-to 3500 rpm - which is among the fastest of all the jigsaws on
            the market.
          </p>
          <p>
            It is a traditional grip jig saw and it is also very highly reviewed
            - ~4.7 rating through ~100 reviews on Amazon.
          </p>
          <BuyButton productLink="https://amzn.to/2La8GWf" />
          <p>
            With the top pick out of the way, let’s looks look at some of the
            other tools in the market according to where they fall in the
            Pro/Pro-Sumer/Consumer categories.
          </p>
          <h3>Professional Grade Jig Saws</h3>
          <ComparisonTable list={proSaws} />
          <p>
            The professional grade market is dominated by three players: DeWalt,
            Makita and Milwaukee. Each of their tools are roughly equivalent and
            all very high quality. If your willing to spend the money on any of
            these you’ll end up with a great saw. Of course, the primary
            deciding factor will be whether or not you already have batteries
            from one of these brands.
          </p>
          <h4>DEWALT 20V MAX Jig Saw, Barrel Grip - DCS335B</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/DEWALT-DCS335B.jpg"
            alt="DEWALT 20V MAX XR Jig Saw - DCS335B"
            title="DEWALT 20V MAX XR Jig Saw - DCS335B"
          />
          <p>
            With 470 reviews and a 4.8 star rating on Amazon, it's clear that
            the Dewalt DCS335B is a solid jigsaw. This professional saw features
            a max cutting speed of 3200 strokes per minute with variable speed
            that is controlled by the the trigger.It has a brushless motor which
            means more power and battery life while your using it.
          </p>
          <p>
            This saw normally sells for around $191.99 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3pVrxmM" />
          <ProductFeatures
            features={[
              "3200 Max RPM",
              "Professional Grade",
              "1 in Inch Stroke Length",
              "Variable Speed Trigger",
              "Brushless Motor",
              "Average Price: $191.99",
            ]}
          />
          <h4>DEWALT 20V MAX XR Jig Saw - DCS334B</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/DEWALT-DCS334B.jpg"
            alt="DEWALT 20V MAX XR Jig Saw - DCS334B"
            title="DEWALT 20V MAX XR Jig Saw - DCS334B"
          />
          <p>
            With 1824 reviews and a 4.9 star rating on Amazon, it's clear that
            the Dewalt DCS334B is a great saw. This professional saw features a
            max cutting speed of 3200 strokes per minute with variable speed
            that is controlled by the the trigger.It has a brushless motor which
            means more power and battery life while your using it.
          </p>
          <p>
            This saw normally sells for around $190.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3oo5u7C" />
          <ProductFeatures
            features={[
              "3200 Max RPM",
              "Professional Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Brushless Motor",
              "Average Price: $190.00",
            ]}
          />
          <h4>Makita XVJ02Z 18-Volt LXT Cordless Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Makita-XVJ02Z.jpg"
            alt="Makita XVJ02Z 18-Volt LXT Cordless Jig Saw"
            title="Makita XVJ02Z 18-Volt LXT Cordless Jig Saw"
          />
          <p>
            With 231 reviews and a 4.7 star rating on Amazon, the Makita XVJ02Z
            will serve you well. This professional saw features a max cutting
            speed of 3500 strokes per minute with variable speed that is
            controlled by the the trigger.It has a brushless motor which means
            more power and battery life while your using it.
          </p>
          <p>
            This saw normally sells for around $239.99 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3bdYTZZ" />
          <ProductFeatures
            features={[
              "3500 Max RPM",
              "Professional Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Brushless Motor",
              "Average Price: $239.99",
            ]}
          />
          <h4>Makita XVJ01Z 18V LXT Brushless Barrel Grip Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Makita-XVJ02Z.jpg"
            alt="Makita XVJ02Z 18-Volt LXT Cordless Jig Saw"
            title="Makita XVJ02Z 18-Volt LXT Cordless Jig Saw"
          />
          <p>
            With 163 reviews and a 4.7 star rating on Amazon, the Makita XVJ01Z
            is a good performer. This professional saw features a max cutting
            speed of 3500 strokes per minute with variable speed that is
            controlled by the the trigger.It has a brushless motor which means
            more power and battery life while your using it.
          </p>
          <p>
            This saw normally sells for around $239.99 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3bdYTZZ" />
          <ProductFeatures
            features={[
              "3500 Max RPM",
              "Professional Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Brushless Motor",
              "Average Price: $239.99",
            ]}
          />
          <h4>Milwaukee Fuel Top Handle Jigsaw 18V</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Milwaukee-M18-FJS-0X.jpg"
            alt="Milwaukee Fuel Top Handle Jigsaw 18V"
            title="Milwaukee Fuel Top Handle Jigsaw 18V"
          />
          <p>
            With 74 reviews and a 4.8 star rating on Amazon, it's clear that the
            Milwaukee Fuel is a solid jigsaw. This professional saw features a
            max cutting speed of 3500 strokes per minute with variable speed
            that is controlled by the the trigger.It has a brushless motor which
            means more power and battery life while your using it.
          </p>
          <p>
            This saw normally sells for around $199.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3hM1rj4" />
          <ProductFeatures
            features={[
              "3500 Max RPM",
              "Professional Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Brushless Motor",
              "Average Price: $199.00",
            ]}
          />
          <h3>Prosumer Grade Jig Saws</h3>
          <ComparisonTable list={prosumerSaws} />
          <p>
            As we step down from the professional grade into pro-sumer grade
            territory we tend to lose the brushless motors. These tools are
            still very durable and powerful, but not quite as energy efficient
            as the pro-models.
          </p>
          <p>
            Just as with the pro models, it’s easy to recommend any of these,
            but stay within your current brand if you already have a collection
            of batteries.
          </p>
          <h4>Makita XVJ03Z 18V LXT Cordless Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Makita-XVJ03Z.jpg"
            alt="Makita XVJ03Z 18V LXT Cordless Jig Saw"
            title="Makita XVJ03Z 18V LXT Cordless Jig Saw"
          />
          <p>
            With 661 reviews and a 4.8 star rating on Amazon, the Makita XVJ03Z
            is a good choice. This pro-sumer saw features a max cutting speed of
            2600 strokes per minute with variable speed that is controlled by
            the the trigger.It does have a traditional motor, but it is still
            plenty powerful and efficient to finish any job you might throw at,
            it just might take a little longer than a professional grade saw.
          </p>
          <p>
            This saw normally sells for around $125.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3bd7n3j" />
          <ProductFeatures
            features={[
              "2600 Max RPM",
              "Pro-Sumer Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Traditional Motor",
              "Average Price: $125.00",
            ]}
          />
          <h4>DEWALT 20V Max Jig Saw - DCS331B</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/DEWALT-DCS331B.jpg"
            alt="DEWALT 20V Max Jig Saw - DCS331B"
            title="DEWALT 20V Max Jig Saw - DCS331B"
          />
          <p>
            With 2637 reviews and a 4.8 star rating on Amazon, the Dewalt
            DCS331B is a solid jigsaw. This pro-sumer saw features a max cutting
            speed of 3000 strokes per minute with variable speed that is
            controlled by the the trigger.It does have a traditional motor, but
            it is still plenty powerful and efficient to finish any job you
            might throw at, it just might take a little longer than a
            professional grade saw.
          </p>
          <p>
            This saw normally sells for around $130.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3pX5kEW" />
          <ProductFeatures
            features={[
              "3000 Max RPM",
              "Pro-Sumer Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Traditional Motor",
              "Average Price: $130.00",
            ]}
          />
          <h4>BOSCH JSH180B 18-Volt Lithium-Ion Cordless Jig Saw </h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/BOSCH-JSH180B.jpg"
            alt="BOSCH JSH180B 18-Volt Lithium-Ion Cordless Jig Saw"
            title="BOSCH JSH180B 18-Volt Lithium-Ion Cordless Jig Saw"
          />
          <p>
            With 383 reviews and a 4.8 star rating on Amazon, the Bosch JSH180B
            is a good jigsaw. This pro-sumer saw features a max cutting speed of
            2700 strokes per minute with variable speed that is controlled by
            the the trigger.It does have a traditional motor, but it is still
            plenty powerful and efficient to finish any job you might throw at,
            it just might take a little longer than a professional grade saw.
          </p>
          <p>
            This saw normally sells for around $149.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/2JPUfGf" />
          <ProductFeatures
            features={[
              "2700 Max RPM",
              "Pro-Sumer Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Traditional Motor",
              "Average Price: $149.00",
            ]}
          />
          <h4>BOSCH JS120BN 12-volt Max Cordless Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/BOSCH-JS120BN.jpg"
            alt="BOSCH JS120BN 18-Volt Lithium-Ion Cordless Jig Saw"
            title="BOSCH JS120BN 18-Volt Lithium-Ion Cordless Jig Saw"
          />
          <p>
            With 272 reviews and a 4.5 star rating on Amazon, the Bosch JS120BN
            is a solid jigsaw. This pro-sumer saw features a max cutting speed
            of 2800 strokes per minute with variable speed that is controlled by
            the a dial.It does have a traditional motor, but it is still plenty
            powerful and efficient to finish any job you might throw at, it just
            might take a little longer than a professional grade saw.
          </p>
          <p>
            This saw normally sells for around $120.00 on at major retailers,
            but the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3nhWuQk" />
          <ProductFeatures
            features={[
              "2800 Max RPM",
              "Pro-Sumer Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Dial",
              "Traditional Motor",
              "Average Price: $120.00",
            ]}
          />
          <h3>Consumer Grade Jig Saws</h3>
          <ComparisonTable list={consumerSaws} />
          <p>
            Finally, we get to the consumer grade jig saws. You begin to see a
            pretty sharp fall off in features with these saws, however, you also
            see a steep decline in prices as well.
          </p>
          <h4>CRAFTSMAN CMCS600B V20 Cordless Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/CRAFTSMAN-CMCS600B.jpg"
            alt="CRAFTSMAN CMCS600B V20 Cordless Jig Saw"
            title="CRAFTSMAN CMCS600B V20 Cordless Jig Saw"
          />
          <p>
            With 338 reviews and a 4.7 star rating on Amazon, it's clear that
            the Craftsman CMCS600B is a solid jigsaw. This consumer saw features
            a max cutting speed of 500 strokes per minute with variable speed
            that is controlled by the a dial.It does have a traditional motor,
            but it is still plenty powerful and efficient to finish any job you
            might throw at, it just might take a little longer than a
            professional grade saw.
          </p>
          <p>
            This saw normally sells for around $75.00 on at major retailers, but
            the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <ProductFeatures
            features={[
              "500 Max RPM",
              "Consumer Grade",
              ".75 inch Inch Stroke Length",
              "Variable Speed Dial",
              "Traditional Motor",
              "Average Price: $75.00",
            ]}
          />
          <BuyButton productLink="https://amzn.to/396Cuej" />
          <h4>Ryobi One+ P5231 18V Lithium Ion </h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/Ryobi-One-P5231.jpg"
            alt="Ryobi One+ P5231 18V Lithium Ion"
            title="Ryobi One+ P5231 18V Lithium Ion"
          />
          <p>
            With 477 reviews and a 4.8 star rating on Amazon, it's the Ryobi
            One+ P5231 is a good light duty saw. This consumer saw features a
            max cutting speed of 3000 strokes per minute with variable speed
            that is controlled by the a dial.It does have a traditional motor,
            but it is still plenty powerful and efficient to finish any job you
            might throw at, it just might take a little longer than a
            professional grade saw.
          </p>
          <p>
            This saw normally sells for around $69.00 on at major retailers, but
            the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/3nfyOfb" />
          <ProductFeatures
            features={[
              "3000 Max RPM",
              "Consumer Grade",
              "1 inch Inch Stroke Length",
              "Variable Speed Dial",
              "Traditional Motor",
              "Average Price: $69.00",
            ]}
          />
          <h4>PORTER-CABLE PCC650B 20V MAX Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/PORTER-CABLE-PCC650B.jpg"
            alt="PORTER-CABLE PCC650B 20V MAX Jig Saw"
            title="PORTER-CABLE PCC650B 20V MAX Jig Saw"
          />
          <p>
            With 1329 reviews and a 4.7 star rating on Amazon, it's clear that
            the Porter-Cable PCC650B is a solid jigsaw. This consumer saw
            features a max cutting speed of 2500 strokes per minute with
            variable speed that is controlled by the the trigger.It does have a
            traditional motor, but it is still plenty powerful and efficient to
            finish any job you might throw at, it just might take a little
            longer than a professional grade saw.
          </p>
          <p>
            This saw normally sells for around $60.00 on at major retailers, but
            the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/35wL3hJ" />
          <ProductFeatures
            features={[
              "2500 Max RPM",
              "Consumer Grade",
              ".75 inch Inch Stroke Length",
              "Variable Speed Trigger",
              "Traditional Motor",
              "Average Price: $60.00",
            ]}
          />
          <h4>BLACK+DECKER BDCJS20B 20V MAX Jig Saw</h4>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609955450/TimberTools/BLACK_DECKER-BDCJS20B.jpg"
            alt="BLACK+DECKER BDCJS20B 20V MAX Jig Saw"
            title="BLACK+DECKER BDCJS20B 20V MAX Jig Saw"
          />
          <p>
            With 652 reviews and a 4.6 star rating on Amazon, the Black & Decker
            BDCJS20B is a decent saw, but I'm not sure it's one that would serve
            wood-workers well. This is a tool for light duty DIY projects. This
            consumer saw features a max cutting speed of 2500 strokes per minute
            with variable speed that is controlled by the Yes - trigger.It does
            have a traditional motor, but it is still plenty powerful and
            efficient to finish any job you might throw at, it just might take a
            little longer than a professional grade saw.
          </p>
          <p>
            This saw normally sells for around $48.99 on at major retailers, but
            the price does fluctuate from time to time. There is a link to
            Amazon below if you want to check where the price is at today.
          </p>
          <BuyButton productLink="https://amzn.to/2La8GWf" />
          <ProductFeatures
            features={[
              "2500 Max RPM",
              "Consumer Grade",
              ".75 inche Inch Stroke Length",
              "Variable Speed Trigger",
              "Traditional Motor",
              "Average Price: $48.99",
            ]}
          />{" "}
        </div>
      </article>
    </>
  );
}

//all elements in the table must have the same keys
//Table headings are created from the keys
const proSaws = [
  {
    Model: "Dewalt DCS335B",
    "Average Price": "$191.99",
    Grip: "Barrel",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3pVrxmM",
  },
  {
    Model: "Dewalt DCS334B",
    "Average Price": "$190.00",
    Grip: "Traditional",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3oo5u7C",
  },
  {
    Model: "Makita XVJ02Z",
    "Average Price": "$239.99",
    Grip: "Traditional",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3bdYTZZ",
  },
  {
    Model: "Makita XVJ01Z",
    "Average Price": "$239.99",
    Grip: "Barrel",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/393qomk",
  },
  {
    Model: "Milwaukee Fuel",
    "Average Price": "$199.00",
    Grip: "Traditional",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3hM1rj4",
  },
];

const prosumerSaws = [
  {
    Model: "Bosch JSH180B",
    "Average Price": "$149.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/2JPUfGf",
  },
  {
    Model: "Dewalt DCS331B",
    "Average Price": "$130.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3pX5kEW",
  },
  {
    Model: "Makita XVJ03Z",
    "Average Price": "$125.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/3bd7n3j",
  },
  {
    Model: "Ridgid R8832B",
    "Average Price": "$125.00",
    Grip: "Traditional",
    Motor: "Brushless",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/395r3DD",
  },
  {
    Model: "Bosch JS120BN",
    "Average Price": "$120.00",
    Grip: "Barrel",
    Motor: "Traditional",
    "Variable Speed": "Dial",
    "Amazon Link": "https://amzn.to/3nhWuQk",
  },
];

const consumerSaws = [
  {
    Model: "Black & Decker BDCJS20B",
    "Average Price": "$48.99",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/2La8GWf",
  },
  {
    Model: "Craftsman CMCS600B",
    "Average Price": "$75.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Dial",
    "Amazon Link": "https://amzn.to/396Cuej",
  },
  {
    Model: "Porter-Cable PCC650B",
    "Average Price": "$60.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Trigger",
    "Amazon Link": "https://amzn.to/35wL3hJ",
  },
  {
    Model: "Ryobi One+ P5231",
    "Average Price": "$69.00",
    Grip: "Traditional",
    Motor: "Traditional",
    "Variable Speed": "Dial",
    "Amazon Link": "https://amzn.to/3nfyOfb",
  },
];
