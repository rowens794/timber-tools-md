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

export default function index({ props = { title: null, coverImage: null, excerpt: null } }) {
  let { title, coverImage, excerpt } = props;

  return (
    <>
      <Head>
        <meta name="description" content={excerpt} />
        <title>{title}</title>
      </Head>
      <article>
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} title={title} />
          <PostTitle title={title} />

          <h3>​Why Should You Spend a Few Hundred Dollars on a Router Lift?</h3>
          <p>
            ​The first thing that needs to be addressed is why in the world would you spend another $200-500 on an accessory that does something you
            can already do. Well... If that truly was the case, why did you end up here.
          </p>
          <p>
            Sure, you can maneuver your bit up and down without a router lift, but not without an annoying amount of difficulty. Best case - you need
            to duck your head under your table to find the adjustment knob, release the locking mechanism, and then hope you can eye-ball a workable
            height adjustment. It's just not an efficient process.
          </p>
          <p>
            A router table allows you to change your work flow so that everything occurs above the table. Need to raise the bit 1/16th of an inch -
            easy just make a single turn of the adjustment crank. Need to raise the bit 1/128th of and inch, get this... EASY, just turn the
            adjustment crank a 1/8th turn. The accuracy that can be achieved with a lift is truly unparalleled.
          </p>
          <p>
            But that's not the only reason you would lay down semi-serious cash on an accessory. A lift allows you to raise the chuck completely above
            the router lift plate . No longer do you have to engage in under-table acrobatics to change a bit. If you have a small table, like I do,
            the frequency of bashed knuckles drops precipitously.
          </p>
          <p>
            Accurate adjustments and easy bit changes are amazing and worth the purchase price by themselves. The kicker is the amount of time you
            save by adding a lift to you setup. When you no longer have to battle the router motor to make gross adjustments or eyeball bit height in
            the hopes that your cut will be accurate, the time you invest in each cut falls dramatically. If your anything like me it's hard to trust
            the adjustments that you do make - so you end up having to make test cuts after every adjustment. A lift eliminates the need guess and
            test.
          </p>
          <h3>​Standard Features of Router Lifts</h3>
          <p>
            The number one feature all lifts are going to offer is some sort of above table or side of table crank that allows to make easy bit height
            adjustments and bit changes. This is after all why you buy a lift in the first place.
          </p>
          <p>
            In addition to increased accuracy and convenience, in just about every case an after market lift is going to include a superior plate
            relative to the standard plate that comes with the table. It will likely be made out of better material, it will accept a wider range of
            router motors, and it will be more solidly constructed.
          </p>
          <p>
            I mentioned the fact that you can change bits above the table earlier, but the easy with which you can change bits is something to behold.
            For instance, the{" "}
            <a href="http://lumberjocks.com/reviews/1260" target="_blank">
              Woodpeckers PRL-V2
            </a>{" "}
            includes a spring loaded assist lift wrench that enables you to completely raise or lower your router motor in less than 5 seconds.
          </p>
          <h3>Accurate Cuts Made Easy</h3>
          <p>
            It's one thing to say that a lift allows you to make more accurate cuts, but it's another to hear all the ways this is made possible.
            First, the ability to use a hand crank vs. a knob attached to a fixed base is a world of difference. Counting the number of times you have
            turned a knob is a near impossible task. Counting revolutions with a hand crank is almost natural.
          </p>
          <p>
            Many lifts include an incremental scale on the surface plate allowing you to make accurate adjustments to 1/512 of an inch. This level of
            accuracy is unattainable without a lift.
          </p>
          <h3>Don't Make a Dumb Mistake When Buying</h3>
          <p>
            If your going to make a purchase, be smart about it. There are a few things you need to check before you pull out your card.- Is the
            router lift compatible with your table? There are 2 universal plate sizes: 9 1/4" x 11 3/4" and 8 1/4" x 11 3/4" make sure you know which
            size your table requires before you purchase. (See guide below)
          </p>
          <ul>
            <li>
              <p>
                Is the router lift compatible with your table? There are 2 universal plate sizes: 9 1/4" x 11 3/4" and 8 1/4" x 11 3/4" make sure you
                know which size your table requires before you purchase.
              </p>
            </li>
            <li>
              <p>
                Is the router lift compatible with your router? If you already own a router you need to make sure you are buying a lift that can
                support it. This is typically only a real concern once you start dealing with the big 3 1/4 HP models and above. If your buying a lift
                for one of these you'll probably have to pay up for a heavier duty lift.
              </p>
            </li>
            <li>
              <p>
                Are you going to be removing the Router motor from the base regularly? Honestly, avoid this situation at all costs. It is a pain to
                constantly be pulling your motor out of the base for handheld work. Small handheld routers are relatively inexpensive these days. If
                you absolutely must have the versatility to pull it out - try to get a lift that isn't too difficult to remove the motor from.
              </p>
            </li>
          </ul>
          <h3>How Much Will Do You Need to Spend?</h3>
          <p>
            You guessed it - it depends. The mainstream lifts run between $180 and $360. The price you pay is going to be highly dependent on the
            features you want and the size of your router motor. If you motor is larger than 3.5" your going to be at the high end of the range.
          </p>
          <p>
            I want to provide a break down of what it is you'll be looking at before we dig into comparisons. First, there are 4 major brands - the
            first two{" "}
            <a href="http://www.woodpeck.com/prlv2.html" target="_blank">
              Woodpecker
            </a>{" "}
            and{" "}
            <a href="https://www.jessem.com/index.html" target="_blank">
              Jessem{" "}
            </a>
            are manufacturers that build lifts that fit a wide range of tables and motors, the third, Bench Dog, builds a lift specifically for it's
            router tables, it has a non-standard 8 1/4" faceplate that's not going to fit in other tables. Finally, Incra modifies the Woodpecker and
            Jessem lifts so that the lifts can accomodate{" "}
            <a href="http://www.incra.com/router_system_accessories-mlp.html" target="_blank">
              Incra's MagnaLOCK
            </a>{" "}
            reducing ring system (more on this later). Incra is not building the lifts, mearly doing a bit of machining on the lifts that Woodpeckers
            and Jessem produce.
          </p>
          <h3>Overview of the Most Popular Router Table Lifts</h3>
          <h3>JessEm</h3>
          <p>Rout-R-Lift II</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Rout-R-Lift-II.jpg"
            alt="JessEm Rout-R-Lift II"
            title="JessEm Rout-R-Lift II"
          />
          <p>
            The Rout-R-Lift is the entry level model of the bunch. It costs about 1/2 as much as it's bigger brother, the Mast-R-Lift, but has the
            same functionality.
          </p>
          <p>
            <strong>Insert Size</strong>
          </p>
          <p>9 1/4" x 11 3/4"</p>
          <p>
            <strong>Compatible Routers</strong>
          </p>
          <p>​Bosch 1617/1618 series</p>
          <p>​Dewalt 610/618 series</p>
          <p>​Craftsman 1754x / 28190 / 28084</p>
          <p>$190</p>

          <BuyButton productLink="https://amzn.to/2pvZcEh" />

          <h3>JessEm</h3>
          <p>Mast-R-Lift II</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Mast-R-Lift-II.jpg"
            alt="Mast-R-Lift II"
            title="Mast-R-Lift II"
          />
          <p>
            TheMast-R-Lift steps up the game of it's little brother by adding an upgraded anodized aluminum plate and the capacity for larger motors.
          </p>
          <p>
            <strong>Insert Size</strong>
          </p>
          <p>9 1/4" x 11 3/4"</p>
          <p>
            <strong>Compatible Routers</strong>
          </p>
          <p>​Clamping system allows for router motors up to 4.2" in diameter.</p>
          <p>$360</p>

          <BuyButton productLink="https://amzn.to/2nGRR8g" />

          <h3>Woodpeckers</h3>
          <p>PRL-V2</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Woodpeckers-V2.jpg"
            alt="PRL-V2"
            title="PRL-V2"
          />
          <p>
            The PRL-V2 adds a thumb scroll wheel and a Quick Raise/Lower functionality to the mechanism. The PRL-V2 comes in 6 different flavors to
            accomodate both 9 1/4" and 8 1/4" bases as well as three different width moters. Make sure you select the correct version for your setup
            when you buy.
          </p>
          <p>
            <strong>Insert Size</strong>
          </p>
          <p>9 1/4" x 11 3/4" or</p>
          <p>8 1/4" x 11 3/4"</p>
          <p>
            <strong>Compatible Routers</strong>
          </p>
          <p>​All depending on PRL-V2 Model (350/414/420)</p>
          <p>$360</p>

          <BuyButton productLink="https://amzn.to/2o8pVWq" />

          <h3>Bench Dog</h3>
          <p>40-150 ProLift</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522269/TimberTools/Bench-Dog-Tools-40-150.jpg"
            alt="40-150 ProLift"
            title="40-150 ProLift"
          />
          <p>
            The ProLift is constructed specifically to fit Bench Dog router tables. It's a solid lift that has recieved great reviews if you have a
            Bench Dog Table.
          </p>
          <p>
            <strong>Insert Size</strong>
          </p>
          <p>8 1/4" x 11 3/4"</p>
          <p>
            <strong>Compatible Routers</strong>
          </p>
          <p>Porter-Cable 7518/7519</p>
          <p>WITH OPTIONAL ADAPTER:</p>
          <p>​Bosch 1617/1618 series</p>
          <p>​Dewalt 610/618 series</p>
          <p>Porter-Cable 690/890 series</p>
          <p>$360</p>

          <BuyButton productLink="https://amzn.to/2nGTxi4" />

          <h3>INCRA</h3>
          <p>Mast-R-Lift-II &#x26; PRL-V2</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/INCRA-Mast-R-Lift-II.jpg"
            alt="Mast-R-Lift-II"
            title="Mast-R-Lift-II"
          />
          <p>
            INCRA modifies the JessEm and Woodpeckers lifts to add their MagnaLOCK Rings. These models cost about the same as the unmodified versions
            and the magnetic rings have recieved high praise.
          </p>
          <p>
            <strong>Insert Size</strong>
          </p>
          <p>9 1/4" x 11 3/4"</p>
          <p>
            <strong>Compatible Routers</strong>
          </p>
          <p>​Bosch 1617/1618 series</p>
          <p>​Dewalt 610/618 series</p>
          <p>​Craftsman 1754x/28190</p>
          <p>​Rigid R29302</p>
          <p>​Hitachi M12VC &#x26; KM12VC</p>
          <p>​Makita RF1101 &#x26; RD1101</p>
          <p>​Milwaukee 56XX</p>
          <p>​Porter Cable 7518, 690-699, 890-899</p>
          <p>$360</p>
          <BuyButton productLink="https://amzn.to/2ouzQc5" />

          <h2>​The Need-To-Knows About these Lifts</h2>
          <p>
            ​The table above tells you most of what you need to know - but if your seriously considering one of these options I want to provide a some
            more depth for each. If your still here and still interested, let's dig a little deeper.
          </p>
          <h3>Why You Should Consider the JessEm Rout-R-Lift II </h3>
          <p>
            ​The Rout-R-Lift II is the low end lift that JessEm produces, but this is still a high quality piece of equipment. Matt Heere produced a
            great review (and shows some lift setup) in the video I'll include at the bottom of this section. As you can see when Matt is installing
            the motor into the lift, the motor is secured with a clamping mechanism. So while JessEm only lists a few models as being compatible with
            the lift, it is very likely any 3.5" motor would fit securely into the lift. The reason this lift costs less than it's bigger brother is
            due to the fact that it cannot support the bigger 4.14" and 4.2" router motors.
          </p>

          <YoutubeVideo videoId="AO6KxCy-zg4" />

          <p>
            If you have a 3.5" router motor, like the popular Bosch 1617, this lift is worthy of strong consideration. You get nearly half off
            relative to the other options, yet retain nearly all of the functionality.
          </p>
          <h3>​Should You Make the Leap to the Heftier JessEm Mast-R-Lift II?</h3>
          <p>
            The Mast-R-Lift is the bigger version of of JessEm's lift duo. You will undoubtedly ​find yourself asking "why should I choose the
            Mast-R-Lift vs the Rout-R-Lift". The answer is a more accomodating motor clamping system, specifically one that can hold larger motors up
            to 4.2" in diameter and an improved surface plate{" "}
            <a href="http://www.sawmillcreek.org/showthread.php?31568-Aluminum-vs-Phenolic-Router-Plates" target="_blank">
              anodized aluminum vs. phenolic
            </a>
            . Some say that build quality is better on the Mast-R-Lift, but both are solidly built. For my money, the reason you would upgrade is
            because you need to install a larger motor.
          </p>

          <YoutubeVideo videoId="8E2PHldPc98" />

          <h3>​Woodpeckers PRL-V2 Router Lift</h3>
          <p>
            ​The Woodpeckers PRL-V2 is our absolute favorite router lift. There are two reasons why: 1. the spring loaded motor raising and lower
            feature that we looked at earlier, and 2. the thumb wheel that is easily accessible for micro adjustments to the motor height. Both of
            these features significantly enhance the ease of operation of this lift relative to the others, and after all, this purchase is primarily
            motivated by convenience and ease of use. Another nice feature about the Woodpecker lift is the availability of a lift that will fit your
            needs no matter what. There are 6 versions of this router available: a 350, 414, and 420 each with either an 8 1/4" plate or a 9 1/4"
            plate. So when you are buying this lift make sure you match the model up with the router and table insert size for your outfit. Each
            version is priced the same at $360. Check out Thintz12's video review down below.
          </p>

          <YoutubeVideo videoId="g7CnVJr332E" />

          <h3>​Be careful if Your Considering the Bench Dog 40-150 Router Lift</h3>
          <p>
            ​The{" "}
            <a href="https://timberlinetools.com/Bench-Dog-40-150-Prolift-New-Model-p/bench%20dog%2040-150.htm" target="_blank">
              Bench Dog Router lift
            </a>{" "}
            is absolutely in the same class as the other lifts that we are looking at, however, it is made specifically for Bench Dog Router tables
            that have an 8 1/4" plate opening. This is not going to fit on most other tables. While the lift is robust and has all the typical
            functionality you would expect, it doesn't offer the same level of convenience as the Woodpeckers lift. I think this is a good choice if
            you already own a Benchdog table and you want to stay in the same brand with your lift.
          </p>

          <YoutubeVideo videoId="ILBv5D4bhmQ" />

          <h3>Umm What? The Deal on Incra's Modifications to the PRL-V2 and the Mast-R-Lift II</h3>
          <p>
            ​So INCRA is not producing there own router lifts. Instead, they have produced modified versions of both the PRL-V2 and the Mast-R-Lift II
            that we looked at earlier. Prices for the originals and INCRA's modified versions are about the same on the internet. The modification
            that was made to these lifts is fairly simple: INCRA has added the capability for these two lifts to accept their MagnaLOCK ring system.
            The system is pretty cool, and people do go crazy for it. Given that the price is the same, if you were thinking about either the PRL-V2
            or the Mast-R-Lift, I think jumping over to the Incra Version makes a lot of sense. If you want to see how the MagnaLOCK system works,
            check out the video below.
          </p>

          <YoutubeVideo videoId="X70Dbv0DlpM" />

          <h2>The Final Word​</h2>
          <p>This post can be summed up in three bullets:</p>
          <ul>
            <li>
              If your on a budget and you have a 3.5" router motor - get the{" "}
              <InContentProductLink href="https://amzn.to/2pvZcEh" text="Rout-R-Lift" />. You won't be dissapointed and you'll save almost $200.
            </li>
            <li>
              If you want our absolute favorite lift get the <InContentProductLink href="https://amzn.to/2o8pVWq" text="Woodpecker" />. The spring
              loaded lift raise/lower is great and the thumb wheel adjustment is a genius addition.
            </li>
            <li>
              While significantly lower on our list of "I want it", the INCRA ​MagnaLock throat plate system will definitely be attractive to some, if
              it is for you, opt for the <InContentProductLink href="https://amzn.to/2ouzQc5" text="INCRA version of the Woodpecker lift" />.{" "}
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
