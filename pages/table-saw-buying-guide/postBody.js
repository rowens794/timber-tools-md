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
        {" "}
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} title={title} />
          <PostTitle title={title} />
          <p>
            In this, my first post of 2021, I’m going to provide you with the low down on setting yourself up with the right table saw. We are going
            to cover the different types of table-saws and who benefits from each type so that you can figure out which is right for your shop.
          </p>
          <p>
            We will also be breaking the market for table saws down by budget so that you can focus on the saws that won’t wreck your wallet. From the
            feedback I’ve gotten from readers in the past, I know a lot you are looking for the best table saw under $500 and I promise you I’ll help
            you find it.
          </p>
          <p>
            Before I start I do want to say that you will notice some affiliate links in this article. These links _(which are primarily to Amazon)
            allow me to spend the time to write this type of content. In total, I spend about 20 hours in researching, writing, and proofreading for
            each article on the site. If you find the article helpful, please click on one of the red links - even if you don’t intend on buying
            anything, it’s an easy way to thank me and it costs you nothing.
          </p>
          <p>Let’s dive in!</p>
          <h2>The Types of Table Saws</h2>
          <p>
            Before we talk about the more nuanced differences between the different types of table saws, it’s important to realize that there are 2
            broad categories of table saws: those that are easily moved around or <strong>portable table saws</strong> and those that are not{" "}
            <strong>stationary table saws</strong>.
          </p>
          <h3>Portable Table Saws</h3>
          <p>
            As you probably guessed portable table saws offer some level of mobility. Keep in mind portability is a relative term as even the most
            portable table saws still weigh ~50 pounds. These are big tools, probably one of the largest tools that you’ll have in your shop.
          </p>
          <p>
            While the thought of portability may sound nice, you will actually need to think hard about how important portability is to you when
            you’re making your purchase.
          </p>
          <p>
            Sure, it’s nice to have a saw that is portable, but that flexibility comes at the cost of stability. When you are ripping large workpieces
            it’s important that the saw doesn’t move around and bind up while you are feeding stock past the blade.
          </p>
          <p>
            On the other hand, a rock-solid table saw sounds great too, unless you are in a small shop and you don’t have unlimited space for what can
            be a tool that takes up as much space as a car.
          </p>
          <p>All that is to say that you’ll need to consider the trade-offs of each when you are making this purchase.</p>
          <p>
            Within each of these broad categories, there are 5 subcategories that define certain features. Let’s take a look at each of these
            sub-categories so that you can better understand exactly which type best meets your needs.
          </p>
          <h3>Benchtop saws</h3>
          <p>
            Benchtop saws are intended to be as lightweight and portable as possible. As the category name implies, these tools are meant to sit right
            on top of your workbench. They are also built to be moved. A typical benchtop saw weighs between 30-50 pounds. While you wouldn’t want to
            be lugging them around all of the time. They are easy enough to stow away in your garage.
          </p>
          <p>
            Convenience and portability are the primary selling points for benchtop saws. If you have a small shop these are definitely worth
            considering and they may be one of the only options available to you.
          </p>
          <p>
            To keep the weight of these saws down manufactures tend to use a lot of plastic in the body construction and while that can make these
            saws feel a bit flimsy, it typically has little effect on the operation.
          </p>
          <p>
            These saws tend to be aimed at light-duty users and as such, benchtop saws are usually among the least feature-rich saws on the market.
            You won’t get a stand or a fancy rip fence. But the feature light models do have a side benefit - benchtop saws tend to be among the least
            expensive table saw options and can usually be found for less than $400.
          </p>
          <h3>Jobsite saws</h3>
          <p>
            Jobsite saws represent a pretty big step up from benchtops. It is fairly common for these saws to weigh close to 100 pounds. Jobsite saws
            are intended to travel to job sites, as the name suggests, so while they are heavy they are usually built with some degree of portability
            in mind.
          </p>
          <p>
            Jobsite saws are typically sold with a stand. These stands can be one of the most important features when considering a saw in this
            category. There are two things you will likely want your stand to be able to do:
          </p>
          <ol>
            <li>Fold up without removing the saw</li>
            <li>Travel on wheels</li>
          </ol>
          <p>
            Even if you don’t intend on having your saw leave your workshop, the ability to easily move and store your saw is important if you have
            limited space.
          </p>
          <p>
            Jobsite saws come with some pretty big advantages over benchtop saws. For one, the worksurface is typically much larger, usually more than
            twice that of benchtops. Also, you tend to see more convenient features such as the capacity for a 10-inch blade and the ability to
            accommodate a dado stack in Jobsite saws.
          </p>
          <p>
            Of course, these larger, heavier, more feature-rich saws command a price premium over the smaller benchtop saws and typically run in the
            $400-$1,000 price range.
          </p>
          <h3>Contractor saws</h3>
          <p>
            Distinguishing between contractor saws and jobsite saws can be difficult nowadays and most of the difference comes down to marketing
            lingo. But generally when you hear people talking about contractor saws and comparing them to jobsite saws: contractor saws will be the
            larger more feature-rich of the two.
          </p>
          <p>
            Originally contractor saws positioned themselves as alternatives to true cabinet saws, contractor saws maintained powerful motors but also
            some degree of portability. Over time, the emergence closing of the feature gap between jobsite saws and larger stationary saws has pushed
            this category into more of a marketing classification.
          </p>
          <p>
            One of the main differences that you will see between contractor saws and jobsite saws today, is that contractor saws usually feature a
            non-collapsible base - which does lead to added stability over a jobsite saw.
          </p>
          <h3>Hybrid saws</h3>
          <p>
            While hybrid saws look a lot like Cabinet saws, the similarities are typically only skin deep. Hybrid saws feature motors that can be run
            off a 110v line and produce between 1 ½ - 1 ¾ hp like jobsite and contractor saws, but they often come wrapped in a full cabinet enclosure
            like professional cabinet saws.
          </p>
          <p>
            They represent a middle ground between the truly portable saws and the much heavier and more powerful cabinet saws. While you don’t get
            everything that makes a cabinet saw the tool of choice for professional woodworkers, you do get a lot of great features in a hybrid saw.
            For instance, the tables on a hybrid saw are usually cast iron and much larger, usually 2x, than what you would get on a jobsite or
            contractor’s saw.
          </p>
          <p>
            Also, the larger worksurfaces translate into a much heavier unit, between 250 and 500 pounds. While the added weight doesn’t help with
            portability, it does mean much less vibration during operation relative to a contractor saw.
          </p>
          <p>
            Hybrid saws represent a big step up in budget relative to contractor and jobsite saws. These units typically start at ~$1,000 and go all
            the way up to ~$3,000.
          </p>
          <h3>Cabinet saws</h3>
          <p>
            Cabinet saws are the go-to choice for professionals. They offer all of the features that make operation efficient, accurate, and easy.
            They have a large work surface that is made from high-quality materials, they feature high horsepower motors that can easily cut through
            thick dense material, and their components are accurate and easily adjusted.
          </p>
          <p>While all of this is great, it does come with some trade-offs that don’t work for a lot of hobbyist woodworkers.</p>
          <p>
            First, portability is non-existent, these saws almost always weigh over 500 pounds, so even scooting them to somewhere else inside your
            shop is out of the question without multiple helpers or equipment.
          </p>
          <p>
            Second, they require a lot of space. Most hobbyists are working out of their garage or basement. Installing equipment that takes up as
            much room as a small car is often out of the question.
          </p>
          <p>
            Third, they require 220v electricity. So unless your shop is already equipped to handle large equipment you’ll need to call an
            electrician.
          </p>
          <p>Finally, cabinet table saws are expensive. Many start at ~2,500 and can cost as much as $10,000.</p>
          <h2>Best Table Saws By Budget</h2>
          <p>
            Now that you have an understanding of the types of table saws that are on the market and which fit your needs, it’s time to take a look at
            what you can get for a given budget.
          </p>
          <h3>Best Table Saw Under $300</h3>
          <p>
            At a budget of less than $300 you are going to be constrained primarily to benchtop saws. This isn’t necessarily a bad thing as you can
            get some quality tools at this price range. My two favorite saws for a budget of less than $300 are the <strong>Dewalt DWE7485</strong>{" "}
            and <strong>Delta 36-6013</strong>.
          </p>
          <h4>Dewalt DWE7485</h4>
          <p>
            This Dewalt Benchtop saw is great. It features a 24.5-inch rip capacity, which is important because that enables you to rip full-size
            sheet goods (4’x8’) to any width. It’s a very highly reviewed saw with a 4.8 rating across 3,600 reviews on Amazon. The biggest downside
            to this saw is the fact that it only has a 8.5-inch blade capacity, which means you won’t be able to rip 4-inch thick wood.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609775962/TimberTools/DWE7485.jpg"
            alt="Dewalt DWE7485"
            title="Dewalt DWE7485"
          />

          <BuyButton productLink="https://amzn.to/3nhwjsJ" />

          <h4>Delta 36-6013</h4>
          <p>
            This Delta saw is very similar to the Dewalt saw above: similar table size and similar rip capacity. Both saws are highly rated, although
            the Dewalt has significantly more ratings. The big advantage this saw has over the Dewalt is that it supports a 10-inch blade, which
            allows you to rip up-to 3 ⅛ inch stock.
          </p>
          <p>
            Both Dewalt and Delta benchtop saws fall into sub-$300 territory, but only during certain times of the year. You’ll have to keep an eye on
            the price to get it at this level. You can click my links to see where they are right now on Amazon.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609775962/TimberTools/Delta_36-6013.jpg"
            alt="Delta 36-6013"
            title="Delta 36-6013"
          />
          <BuyButton productLink="https://amzn.to/3ofAwOW" />

          <h3>Best Table Saw Under $500</h3>
          <p>
            This step-up in the budget from $300 to $500 is pretty big in terms of what you can buy and I definitely recommend saving if you can. The
            extra $200 allows you to move from bench top to job site category saws.
          </p>
          <h4>Metabo HPT Jobsite Table Saw</h4>
          <p>
            This Metabo HPT saw regularly sells for around $450. It’s a solid saw that comes with a rolling stand for easy portability. It does have a
            10-inch blade for increased maximum depth cuts and it’s fence expands out to 35 inches, which is nice since the table can fully support
            that weight of sheet goods.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609778546/TimberTools/metabo-hpt.jpg"
            alt="Metabo HPT"
            title="Metabo HPT Jobsite Saw"
          />
          <BuyButton productLink="https://amzn.to/2JJ1jEx" />

          <h4>Bosch 4100XC</h4>
          <p>
            This Bosch 4100 is the table saw that I own and I love it. It does everything that I could ask and stows and rolls out of the way easily
            when I need it to. My experience with the saw has been that it runs vibration free which not only allows more precise cuts but also makes
            you feel a lot safer while you’re running it.
          </p>
          <p>
            The biggest downside is that it is hard to find at &#x3C;$500. The standard amazon price is $600, but you will see it from time to time
            fall below the $500 mark, you just have to watch it consistently over time.
          </p>
          <p>
            I’ve actually done a full write-up on this saw and you can read more about it{" "}
            <Link href="/bosch-4100-review">
              <a>here</a>
            </Link>
            .
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609778546/TimberTools/bosch-4100xc.jpg"
            alt="Bosch 4100"
            title="Bosch 4100 Saw"
          />

          <BuyButton productLink="https://amzn.to/3rUZNQG" />

          <h3>Best Table Saw Under $1,000</h3>
          <p>The jump in the budget to $1,000 brings you into true contractor saw territory.</p>
          <h4>Delta 5000 Series</h4>
          <p>
            The Delta 5000 Series is another big upgrade in terms of the overall operation. This is a beefy saw weighing in at ~300 lbs. It has a
            large and solid work surface that makes supporting material easy and a great fence system to cut material to width accurately. My father
            has this saw in a dedicated workshop, and even though I like my Bosch 4100, I always get a little bit jealous when I use his Delta.
          </p>
          <p>
            Of course, now you are beginning to have to make other trade-offs with this saw. It has a large footprint, and while you can roll it from
            place to place, you can never really stow it away. It’s big and it takes up a lot of room.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609778546/TimberTools/delta-36-5100T2.jpg"
            alt="Delta 36-5100"
            title="Delta 36-5100 Saw"
          />

          <BuyButton productLink="https://amzn.to/3o9m4YS" />

          <h3>Best Table Saw Under $2,500</h3>
          <h4>Powermatic PM1000</h4>
          <p>
            If your budget can permit it, the last saw I will be recommending is the Powermatic PM1000. This is a Hybrid saw that looks a lot like a
            true cabinet saw, but doesn’t quite have the horsepower of a true cab.
          </p>
          <p>
            A lot of stars are going to have to align for this saw to make sense for you. You going to have to have space, the ability to deal with a
            mostly immovable piece of hardware, and the budget. But if they do, I’d imagine that this would have a dream to have in your shop.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609778546/TimberTools/PM1000.jpg"
            alt="Powermatic PM1000"
            title="Powermatic 1000 Saw"
          />
          <BuyButton productLink="https://amzn.to/3ohCEWs" />

          <h2>Best Table Saw for Beginners</h2>
          <p>
            We’ve looked at a number of saws already, but I do frequently see people asking about the best table saw for beginning woodworkers
            regardless of budget. In this scenario, I understand the desire to get the least expensive saw that will get work done. I would not
            recommend going this route, however. When I started woodworking I bought the Bosch 4100 and I couldn’t be happier with the purchase, more
            than 5 years later.
          </p>
          <p>
            Any time I get this question I always recommend the <a href="https://amzn.to/3rUZNQG">Bosch 4100</a>. It may seem like a pricey saw for a
            new woodworker, but it’s the type of saw that will grow along with you. Another thing to keep in mind is that it holds its value very well
            and if you decide later on that the hobby isn’t for you, you should be able to get pretty close to your original purchase price selling
            the saw on craigslist or Facebook.
          </p>
        </div>
      </article>
    </>
  );
}
