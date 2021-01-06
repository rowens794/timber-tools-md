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
          <HeroImage img={coverImage} />
          <PostTitle title={title} />

          <p>
            When I started in this hobby, I knew it was going to require a bit of investment to get setup. So I set aside ~$1,000 for tools to get
            myself started and figured I'd add to my shop when the need arised. This worked for me, but you don't need to lay a grand on the table on
            day 1.
          </p>
          <p>
            In this monster post I'm going to look a 4 different entry level budgets and provide you with the tools you should be looking at to get
            yourself started. ​
          </p>
          <p>
            ​With each step up in budget, the projects that you will be able to handle will grow and the speed with which you will work will increase.
          </p>

          <h2>Budget: About $250</h2>
          <p>
            ​First of all, don't get down about your limited funds. You can do a lot with $250, you'll certainly be able to equip yourself to handle
            some interesting projects. With a war chest this light, however, scouring for deals can help you stretch limited resources.
          </p>
          <h2>Getting Essential Woodworking Tools on the Cheap</h2>
          <p>
            Let's talk about a few strategies for building out your shop below retail price. There are the obvious ones like yard sales, craigslist,
            estate sales, and thrift stores, however, these can be hit or miss. First of all, not everyone lives in an area where these avenues exist.
            Second, when your brand new to woodworking, it can be hard to evaluate a tool that your buying second hand. Because of this, I'm not going
            to focus on these channels in this post, but I will say, if your willing to do some hunting for second hand tools, you can easily save 50%
            to 75% on some perfectly fine equipment.
          </p>
          <p>
            <strong>
              <a href="https://www.raise.com/buy-gift-cards?category=HomeandGarden">Raise.com</a>
            </strong>{" "}
            - Raise is an interesting site where individuals can buy and sell gift cards at a discount. Gift Cards for stores like Lowe's and Home
            Depot typically go for 3-5% below face, not too exciting. But Sear's and Harbor Freight are usually between 10-20% off.
          </p>
          <a href="https://www.raise.com/buy-gift-cards?category=HomeandGarden">
            <ProductImage
              src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1609522292/TimberTools/Raise-Screen.png"
              alt="Raise"
              title="Raise"
            />
          </a>
          <p>
            <strong>
              <a href="https://www.ebates.com/home-garden-tools/power-hand-tools">Ebates.com</a>
            </strong>{" "}
            - Ebates is something I'll check after I've already found a deal that I'm going to bite on. The rewards aren't usually good enough to
            compel me to purchase on their own. But if you get an extra 3-5% cash back over your entire $250 budget, it can add up to an extra hand
            tool for doing nothing more than using their link to an online store.
          </p>
          <a href="https://www.ebates.com/home-garden-tools/power-hand-tools">
            <ProductImage
              src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1609522292/TimberTools/Ebates-Screen.png"
              alt="Ebates"
              title="Ebates"
            />
          </a>
          <p>
            <strong>
              <a href="https://slickdeals.net/forums/forumdisplay.php?f=9&#x26;intagid%5B%5D=324">Slickdeals.net</a>
            </strong>{" "}
            - I love slickdeals. I've been a user for nearly 15 years. They have a sub forum dedicated to tool deals. Most of the deals are online and
            it is not uncommon at all to save 25% - 50% off retail with the deals on the site. The link above takes you directly to tool specific
            deals on the slickdeals forums.
          </p>
          <a href="https://slickdeals.net/forums/forumdisplay.php?f=9&#x26;intagid%5B%5D=324">
            <ProductImage
              src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1609522292/TimberTools/Slickdeals-Screen.png"
              alt="Slickdeals"
              title="Slickdeals"
            />
          </a>
          <h2>The Tools for the Job</h2>
          <p>
            Now that you know where to look, let's talk about what to look for. First, consider the fundamentals of what you're going to be doing.
            You'll need to shape your material, join material together, and finish it.
          </p>
          <p>
            In order to accomplish the three tasks above there are not a whole lot of tools that you'll absolutely need. A basic carpentry tool list
            would include the following:
          </p>
          <ul>
            <li>Saw w/ Miter Box</li>
            <li>Power Drill</li>
            <li>Screw Driver Set</li>
            <li>Sanding Block</li>
            <li>Chisel Set</li>
            <li>​Drill Bits</li>
            <li>Clamp Set</li>
            <li>Hammer</li>
            <li>Measuring &#x26; Squaring Tools</li>
          </ul>
          <h3>Why You need These</h3>
          <p>
            While an electric miter saw is a convenience, it is not necessary to do good work. A quality electric miter saw will run around $150-$200,
            that by itself would destroy our budget. A hand saw with a miter box does the job just as well at a fraction of the price. This highly
            rated <InContentProductLink href="https://amzn.to/2ozeU1t" text="Stanley version for ~$60" /> should get the job done, albeit with a bit
            more elbow grease.
          </p>
          <p>
            A drill is going to be a requirement. Luckily, a basic drill is all that's needed to accomplish 99% of what you'll want to do.{" "}
            <InContentProductLink href="https://amzn.to/2p9rGXg" text="Black and Decker produces a variable speed model" /> that will do just fine for
            about $40.​ But if you want to do anything with it, your going to want some bits to go with it, a reasonable quality set costs ~$20.
          </p>
          <p>
            There are a few secondary tools that aren't all that expensive but will definitely be needed around the shop. You may already have some of
            these but if not at least you'll have an idea of cost.​ A hammer, sanding block, chisel set, and screw drivers can all be had for $10 -
            $20 a piece. In total, the entire lot will cost you ~$45.
          </p>
          <p>
            To get reasonable results out of these tools your going to need to make accurate measurements and keep your work square. To accomplish
            this your going to want to pick up a tape, a combo square, and speed square. These items aren't expensive in total, these will ~$25.
          </p>
          <p>
            Finally, an extra set of hands is going to be hard to come by on the cheap. Luckily, a good starter set of clamps only runs about $60.
          </p>
          <p>
            Well there you have it, everything you need to get started on your first project for $250. Keep in mind, when I was pricing this equipment
            I didn't take any of the potential discounts we looked at earlier into account.
          </p>
          <p>
            If you have one or two of these items already, don't mind looking around at a yard sale or two, and take 5 minutes to visit Slickdeals,
            Raise, and Ebates - you could easily get this down low enough to fund your first material purchase as well.
          </p>
          <h2>Projects You'll be Equipped to Handle​</h2>
          <p>
            While you have a decent starter shop, it's important to keep in mind the projects that your tools can handle. You are going to want to
            focus on projects that don't require your stock to be ripped to a different dimensions than what you purchased it at. You are currently
            only set up to do crosscuts with your miter saw. So while you can turn an 8' 2x4 into two 4' 2x4s, your not going to be able to turn that
            same board into two 2x2s.
          </p>
          <p>
            Additionally, complex joinery like mortise and tenon's or dovetail's are out of the question for the time being. You'll will need to focus
            joinery that can be accomplished with good ol' fashion glue and screws.
          </p>
          <p>
            While fine furniture making is unlikely at this point, you can still make some really cool projects. Outdoor furniture in particular is a
            good place to look for inspiration until you gain some experience and get some more specialized equipment in your shop.
          </p>

          <h2>Budget: About $500</h2>
          <p>
            An extra $250 makes a big difference as you fill out your shop with the essential woodworking tools we're looking at in this post. ​ As we
            double our budget we are going to expand the functionality of the shop and add a lot more convenience to our builds.
          </p>
          <p>Before we let's review tools that will remain the same from the previous build:</p>
          <ul>
            <li>Drill Bits ~$20</li>
            <li>Hammer ~$7</li>
            <li>Screw Drivers ~$20</li>
            <li>Chisel Set ~$10</li>
            <li>Tape Measure ~$10</li>
            <li>Combo Square ~$10</li>
            <li>Speed Square ~$6</li>
            <li>Clamps ~$60</li>
            <li>Drill ~$35</li>
          </ul>
          <p>
            These basics are going to set you back about $180, leaving you with $320 left to work with. We are going to be leaving behind two hand
            powered tools from the $250 shop and upgrading to powered alternatives. This should lead to more consistent results, more enjoyable
            builds, and increased efficiency. These are all goods things that only the biggest fans of{" "}
            <a href="http://www.pbs.org/woodwrightsshop/home/">The Woodwright's Shop</a> would argue with.
          </p>
          <h2>​Upgrades from the $250 Shop</h2>
          <p>
            First, let's dump that hand powered saw/miter box. It gets the job done, but it takes forever. We're still on a lean budget, but shelling
            out ~$110 for a <InContentProductLink href="https://amzn.to/2oWAmha" text="10 inch electric miter saw" /> makes a lot of sense. This won't
            be your forever saw, but it should do fine for most projects. It can handle up to a 4x6 stock which will cover 99% of what a beginning
            wood worker will throw at it.
          </p>
          <p>
            Second, <a href="https://en.wikipedia.org/wiki/Kesuke_Miyagi">Kesuke Miyagi</a> will probably roll over in his grave - but hand sanding a
            large work piece isn't my idea of an enjoyable hobby. Luckily, a decent random orbital sander isn't all that expensive. This{" "}
            <InContentProductLink href="https://amzn.to/2nYK6qz" text="SKIL sander" /> is highly rated and priced at just over $40.
          </p>
          <p>
            These two upgrades <strong>will</strong> make this a more enjoyable hobby. The total outlay at this point is $330. Let's take a look at
            some added functionality we can bring to the $500 shop.
          </p>
          <h2>The New Addition: Tablesaw</h2>
          <p>
            One of the most heavily used tools in your shop will be your table saw. It is absolutely essential for ripping stock to size, working with
            composite material (like plywood and MDF), and venturing into the world of{" "}
            <a href="https://www.tablesawcentral.com/the-ultimate-list-of-table-saw-jigs/">wood working jigs</a>. Budget is a limiting factor in a
            $500 build, but at $150 it is hard to pass up adding this <InContentProductLink href="https://amzn.to/2oWLH14" text="Craftsman saw" /> to
            your shop - even with limited funds.
          </p>

          <YoutubeVideo videoId="sEb4FBb-zKQ" />

          <p>​When your buying a budget saw there are going to be some drawbacks. There are 3 underwhelming aspects of this saw:</p>
          <ol>
            <li>
              <strong>Small Work Surface</strong> - at 25" x 17" your not going to be fighting for space to balance stock on, but it isn't a lot of
              real estate. Balancing large work pieces or sheets of plywood won't be comfortable. For a typical project, however, this should be
              enough space for you to cut or rip what you need to.
              <br />
              <br />
            </li>
            <li>
              ​<strong>Lack of Dust Collection Port</strong>- When I was a new wood worker, this didn't seem like that big of a deal. TRUST ME - not
              being able to control dust is a pain. It's not a deal breaker (especially if your on a budget), but it is a pain.
              <br />
              <br />
            </li>
            <li>
              <strong>Non-Standard Miter Slots</strong> - This one is a downer. One of the primary advantages of having a table saw is access to jigs
              that expand the saws functionality. This is a major issue if you plan on buying after market jigs. Given that we are limiting the cost
              of this buildout to $500, I am guessing that after market jigs are probably low on the priority list. Your going to want jigs once you
              start researching what they enable you to do, my advice is to build your own - there are plenty of{" "}
              <a href="https://www.pinterest.com/rongwallace/workshop-jig-plans/?lp=true">plans online</a>.<br />
              <br />
            </li>
          </ol>
          <h2>Projects You'll be Equipped to Handle</h2>
          <p>
            At this point you will have the tools you need to attack most projects. Check out{" "}
            <a href="https://www.pinterest.com/search/pins/?q=simple%20woodworking%20projects&#x26;rs=typed&#x26;term_meta%5B%5D=simple%7Ctyped&#x26;term_meta%5B%5D=woodworking%7Ctyped&#x26;term_meta%5B%5D=projects%7Ctyped">
              pinterest
            </a>{" "}
            for projects that use simple joinery, plain edges, and straight lines.
          </p>
          <p>
            Hopefully, seeing some of the projects you'll be able to handle will get you excited. Everything you will be doing will be done with
            screws and pins, but as I'm sure you'll see in the pictures on pinterest - there are still some cool projects that you can do with simple
            tools.
          </p>
          <p>
            In order to take your work to the next level, you may have to do the same with your budget. Let's take a look at what $1,000 would buy and
            what we could do with it.
          </p>

          <h2>Budget: About $1,000</h2>
          <p>
            Once you start thinking about spending a $1,000 to get yourself setup, you really can put yourself in a position where you can get
            everything you need to complete just about any project. You'll be able to take rough lumber and turn it into something that is beautiful.
            Let's see how exactly you do that.
          </p>
          <p>
            At four figures, we are starting to talk about a major investment in a hobby. When I was first building my shop I justified this to myself
            if a couple of ways:
          </p>
          <ul>
            <li>
              ​The tools I was buying hold there value relatively well, if I decided I wanted to quit at some point down the line I'd be able to
              realistically recoup 50-75% of my investment.
            </li>
            <li>
              In the grand scheme of hobbies, this isn't all that expensive. Think about golf or biking, you'll easily spend just as much setting
              yourself up.
            </li>
            <li>
              I am a young guy with a new family. I have a number of projects under my belt now and these projects have been pieces of furniture we've
              needed. Had I not built what I did, we would have bought it. After 3-4 projects your tools pay for themselves.
            </li>
          </ul>
          <h2>Cherry Picking from the Last Build</h2>
          <p>While our budget has doubled, we have still identified a basic carpentry tool list that's workable from the earlier build. ​</p>
          <ul>
            <li>Drill Bits ~$20</li>
            <li>Hammer ~$7</li>
            <li>Screw Drivers ~$20</li>
            <li>Chisel Set ~$10</li>
            <li>Tape Measure ~$10</li>
            <li>Combo Square ~$10</li>
            <li>Speed Square ~$6</li>
            <li>Clamps ~$60</li>
            <li>Drill ~$35</li>
            <li>Electric Sander ~$40</li>
          </ul>
          <p>
            This list of tools will set you back $220. Additionally, at this point you will want to consider expanding your collection of clamps, in
            particular, adding some larger clamps to your arsenal will definitely come in handy. 2x 24 inch﻿﻿﻿﻿ clamps and 2x 36 inch clamps will add
            another $50 bringing the running total to $270.
          </p>
          <p>
            When I built my shop I opted to buy a much higher quality miter saw and table saw than I truly needed at the time. It ate up a ton of my
            budget and forced me to put off adding the tools that would allow me to buy cheaper stock for 2-3 years. During that time my savings
            buying rough cut lumber would have probably paid for the upgraded equipment I started out with.
          </p>
          <h3>Learning From My Mistakes</h3>
          <p>
            If I had it to do over again, I would stick to an entry level miter saw and table saw until I had both the funds and need to upgrade to
            more capable saws. Because of this, I'd stick to the two saws we looked at in the $500 build: ​The Craftsman XSP{" "}
            <InContentProductLink href="https://amzn.to/2oWOTcU" text="Craftsman Table Saw" /> for ~$150 and{" "}
            <InContentProductLink href="https://amzn.to/2pj7bEs" text="Hitachi 10 inch Miter Saw" /> for ~110. These two additions bring our running
            total to just over $500.
          </p>
          <p>
            ​There are some diverging paths that you could take at this point: some may want to get a{" "}
            <Link href="https://www.timberandtools.com/best-wood-router-reviews-spring-2017/">
              <a>router</a>
            </Link>{" "}
            with a{" "}
            <Link href="https://www.timberandtools.com/our-top-router-table-reviews-of-2017/">
              <a>router table</a>
            </Link>{" "}
            for edge work and improved joinery capabilities, some may want to start looking at some of the interesting 3rd party jigs - two of my
            favorites are the <InContentProductLink href="https://amzn.to/2piSP7c" text="DowelMax" /> and the{" "}
            <InContentProductLink href="https://amzn.to/2onOUZl" text="Kreg Pocket System" />, but my recommendation would be to equip yourself to buy
            cheap stock.
          </p>
          <h2>Buying a Jointer and a Planer​</h2>
          <p>
            ​Buying rough cut lumber saves a ton of money. Buying lumber that has had all four sides surfaced (
            <a href="http://www.thewoodwhisperer.com/articles/s2s-and-s4s-what-gives/">s4s</a>) will cost roughly 4 times as much as buying rough cut
            lumber. Let's look at an example: I'm going to build a table that will require 50 board feet of oak. If I buy finished oak it will cost
            around $5.5 / bf or $275. Alternatively, I can buy rough cut oak at $1.25/bf or ~$65. In this one project I've saved $210. That's enough
            for a new power tool.
          </p>
          <p>
            ​So, what do you need to get yourself ready to buy rough cut lumber. Ideally you will have 3 tools: a table saw (check), a jointer and a
            planer. The table saw is already part of this build - let's look at the jointer and the planer.
          </p>
          <h3>What does a jointer do?​</h3>
          <p>
            A jointer allows you to cut a perfectly flat edge that is at a 90 degree angle to the fence. With a jointer you can joint to adjacent
            faces - for instance the bottom and the edge, so that that are flat and square to each other.
          </p>
          <p>
            The problem is, it's nearly impossible to ​keep from turning a board into 1 large wedge if you were to simply send the board through the
            jointer on all four sides. There just isn't enough edge support against the fence to ensure that all sides remain square.
          </p>
          <h3>​What does a planer do?</h3>
          <p>
            The solution to potentially wedged boards on a jointer is to add a planer to the mix. A planer has a flat surface with a cutting edge that
            is exactly 180 degrees to the surface. This allows you to position the jointed edge flat on the planers surface and make a cut to the
            opposite side of the board that is perfectly square. As an added bonus, the planer allows you incredible control over the thickness of the
            boards you're planing. ​
          </p>
          <p>​The family handyman has a great video of how this process works.</p>

          <YoutubeVideo videoId="G3YbasoBKpY" />

          <h2>​Jointer &#x26; Planer Recommendations</h2>
          <p>
            We have just about $500 remaining in our $1,000 shop build. That is not a lot of room to pull in these specialized tools, but you can get
            two quality tools at this price. WEN makes both a <InContentProductLink href="https://amzn.to/2piLMvk" text="6 inch jointer" /> ($240) and
            a <InContentProductLink href="https://amzn.to/2nvXRAX" text="12 inch planer" /> ($260) that come in right at budget. Both tools come
            highly rated.
          </p>
          <h2>Projects You'll be Equipped to Handle</h2>
          <p>
            We only added 3 things to the $1,000 build over the $500: a few more clamps, a jointer, and a planer. The types of projects you'll be
            prepared to handle won't change. But the fact that you get attack them with much cheaper rough cut lumber is huge.​
          </p>

          <h2>Budget: About $2,500</h2>
          <p>
            Ok, the leap from $1,000 to $2,500 is a big one. I certainly didn't make it at one time. It took me years. But I know folks that decided
            they wanted to get into woodworking and dropped at least $2,500 getting themselves outfitted. When you do make the jump, the thought
            process becomes much less about making sure you can get the job done and becomes more about having quality tools to get the job done.
          </p>

          <p>
            At $2,500 the purchases you'll be considering will be less about adding oodles of new functionality, although there will be some of that,
            and more about adding tools that will last for many years to come.
          </p>
          <p>Let's review some of the basics you're going to want to have around the shop.</p>
          <h2>The Basics​</h2>
          <h3>Essentials ~$65</h3>
          <ul>
            <li>​Hammer ~$7</li>
            <li>Screw Drivers ~20</li>
            <li>Chisel Set ~$10</li>
            <li>Small Hand Saw ~$15</li>
          </ul>
          <h3>Measuring Accessories​ ~$50</h3>
          <ul>
            <li>Tape Measure ~$10</li>
            <li>Combo Square ~$10</li>
            <li>Speed Square ~$6</li>
            <li>In﻿﻿﻿cra T-R﻿﻿﻿ule ~$25</li>
          </ul>
          <h3>​Small Power Tools & Accessories ~$290</h3>
          <ul>
            <li>Basic Clamps + 2x 24" Clamps + 2x 36" Clamps ~$110</li>
            <li>
              <InContentProductLink href="https://amzn.to/2oWAf5x" text="Electric Sander" /> ~$60
            </li>
            <li>
              <InContentProductLink href="https://amzn.to/2oWMhMi" text="Power Drill" /> ~$100
            </li>
            <li>Drill Bits ~$20</li>
            <li>Router Bits ~$25</li>
          </ul>
          <p>
            We've added a few tools to the list basics from previous builds. This list will consume around ~$400 of the $2,500 budget. The remaining
            $2,100 is going to be devoted to 9 tools that that handle just about any project you can think up.
          </p>
          <h2>The Major Woodworking Equipment</h2>
          <h3>Material Prep</h3>
          <p>
            As we talked about in the $1,000 shop, having the ability to finish rough sawn lumber will save you substantial amounts of money. The
            first tools we will want to look at will help us turn these ugly boards into something beautiful and more importantly, useable.
          </p>
          <p>
            At this point, the WEN <InContentProductLink href="https://amzn.to/2nYxjUW" text="jointer" /> and{" "}
            <InContentProductLink href="https://amzn.to/2ogeLRf" text="Planer" /> that we looked at earlier are still the best in our budget. Together
            they will set the build back $500.
          </p>
          <p>We are going to have 2 dedicated ​saws in the shop: a table saw and miter saw.</p>
          <h3>The Table Saw - Contractor over Cabinet (at this point)</h3>
          <p>
            My​ recommendation for a $2,500 build would be the <InContentProductLink href="https://amzn.to/2ofScvL" text="Bosch 4100" />. This saw,
            with an absolutely amazing stand, runs ~$530. This is 3.5x more than the table saw we looked at for the last build. Let me tell you why
            you should pay it.
          </p>
          <ul>
            <li>
              <strong>Compact and Easy to Store</strong>​ - When your budget is $2,500, you are probably not yet in a dedicated shop. Most likely you
              are either in a garage or a basement. This saw provides plenty of work surface, and expands to provide even more. Yet, it also folds up
              in 5 seconds flat to make room for the next task.
              <br />
              <br />
            </li>
            <li>
              <strong>Room for Dados</strong> - The arbor on this saw can accommodate a 3/4" dado stack. Dados will become important to you seek to
              expand your capabilities. The fact that this saw can handle them no problem is a huge plus.
              <br />
              <br />
            </li>
            <li>
              <strong>Killer Fence</strong> - The fence on this saw is top notch after a little bit of setup. The included measuring tape on the saw
              makes single handed operation of the fence almost effortless.
              <br />
              <br />
            </li>
            <li>
              <strong>Gets the Small Things Right</strong> - The saw is setup for good dust collection, the miter slots are standard sized, and
              included in the box are safety features like a riving knife, blade gaurd, and anti-kickback pawls.
              <br />
              <br />
            </li>
          </ul>
          <p>
            You're not going to get me to stop saying great things about this saw. I own it and I love it (as does just about every reviewer on
            Amazon). I've attached a great video overview of the saw so you'd understand why your putting more than 20% of your budget towards it.
          </p>

          <YoutubeVideo videoId="KoIMHGCWY30" />

          <h3>Miter Saw - Dewalt DW716</h3>
          <p>
            The <InContentProductLink href="https://amzn.to/2oUdySd" text="DW716" /> is on of the best miter saws on the market. The 12 inch blade can
            handle 2"x10" cross cuts and 45 degree cuts through stock as large as 2"x8". The 15 amp motor runs at 3,600 rpm and cuts through thick
            stock without a problem.
          </p>
          <p>
            At $300, the saw is expensive, but it is one of the more affordable saws that offer a 12 inch blade and a double bevel. The double bevel
            allows you to adjust both the angle at which the blade cuts into the wood and the tilt of the blade relative to the workpiece. Having
            control over both angles allows much easier cuts of trims and moldings. It's one of those features that you won't use with every project -
            but when you do need it, you'll be glad you have it
          </p>
          <h3>Adding a Router to the Shop</h3>
          <p>
            ​One tool that has been notably missing from the earlier builds is a router. There are so many reasons to own a router that I am not going
            to even try to list them. But if you want to get the creative juices flowing, take a look at this{" "}
            <a href="https://www.pinterest.com/search/pins/?q=Router%20projects%20ideas&#x26;rs=guide&#x26;term_meta%5B%5D=ideas%7Cguide%7Cword%7C2&#x26;add_refine=ideas%7Cguide%7Cword%7C2">
              Pinterest
            </a>{" "}
            page. The important thing to know is that this versatile tool can help you accomplish a number of tasks, everything from finishing edges
            to cutting dove tails.
          </p>
          <p>
            The ​only reason you would not want this tool in your shop is the cost. You'll pay around $150-200 for the motor itself, another $30-50
            for a basic set of router bits, and then $150-$250 for a router table.
          </p>
          <h3>Router Equipment to Look At</h3>
          <p>
            We've{" "}
            <Link href="https://www.timberandtools.com/best-wood-router-reviews">
              <a>written about routers</a>
            </Link>{" "}
            on the site before and my favorite is the <a href="https://amzn.to/2nvLGUI">Bosch 1617</a>​. It is light enough that you can control it
            when using it handheld, yet powerful enough that it won't have any problems when you mount it under a table. On top of that, it comes with
            a plunge base which makes it significantly easier to use handheld. The package clocks in at ~$190.
          </p>
          <p>
            To get the most out of your router, you are going to want a router table. You may find yourself asking if you really need one - if you do,{" "}
            <a href="https://www.timberandtools.com/why-you-need-a-router-table/">check this post out</a>.​ It's one of those purchases that you won't
            truly understand how valuable it is until you have one. Given the budget of $2,500, I'd suggest looking at the{" "}
            <InContentProductLink href="https://amzn.to/2nYmKkY" text="Bosch RA1171" /> ($150). If you want to see our favorite tables along with
            write-ups, check{" "}
            <Link href="https://www.timberandtools.com/router-table-reviews">
              <a>them out here.</a>
            </Link>
          </p>
          <p>
            Finally, at the beginning you'll do just fine with a basic set of router bits that run ~$40. A starter set will typically include straight
            bits for edge matching material, a selection of edge finishing bits, and some joinery bits. As you work on a few projects you may find
            that more specialized bits are needed. But specialized bits are expensive - so purchasing them as you have a specific need makes more
            sense than buying in anticipation of a need.
          </p>
          <h3>Keeping the Shop Clean​</h3>
          <p>
            ​Table saws, jointers, planers, and routers produce a lot of saw dust. Not being in control of the wood shavings that these tools produce
            can make you feel like you are constantly swimming in dust. Mitigating this problem often doesn't take more than hooking a shop vac up to
            the dust collection port of these tools.
          </p>
          <p>
            You'll want a vac that has a strong motor, large bucket capacity, and a reasonably long hose so that you don't have to drag it all over
            your workspace. The <InContentProductLink href="https://amzn.to/2nYmO4c" text="Craftsman XSP" />​ Craftsman XSP has a 16 gallon bucket, a
            6.5 hp motor and should fit the bill nicely, it costs just over $100.
          </p>
          <h2>Projects You'll be Equipped to Handle</h2>
          <p>
            ​At this point your skill with the tools should be the only thing holding you back. You will have all of the necessary equipment to
            attempt just about anything you can think of.
          </p>
          <p>
            ​In order to excel you are going to need to read up on jig building so that you can produce consistent repeatable cuts.{" "}
            <a href="https://www.pinterest.com/TimberAndTools/woodworking-jigs/">Ideas for jigs</a> are a dime a dozen online and you could easily
            lose a couple of hours browsing the hundreds of ideas people think up. A more economical approach would be to build your jigs as your
            projects demand them. After you go through that exercise 4-5 times, you'll find you've accumulated quite the collection of jigs without
            even trying.
          </p>

          <h2>Reviewing The Options</h2>
          <p>
            The level of sophistication in a $250 shop is significantly less than a $2,500 shop. But keep in mind even a $2,500 budget is entry level.
            Acquiring a shop full of the perfect tools for each and every job takes a life time. But that doesn't mean that producing quality work
            takes a lifetime. One of the most enjoyable aspects of this hobby is the constant need to solve problems with the tools you have in order
            to produce good work.
          </p>
          <p>
            Buy the tools you can afford and experiment with different ways of using those tools to achieve the results that you want. Hopefully this
            post will have helped you identify what those absolutely essential woodworking tools every woodworker needs actually are.
          </p>
        </div>
      </article>
    </>
  );
}
