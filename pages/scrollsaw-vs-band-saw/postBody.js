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

          <h2>Scroll Saw vs Band Saw: What's the Difference?</h2>
          <p>
            Although both tools are made to cut curves, each serves a more specific purpose. Before you can decide between them, you should know what
            kind of work you'd like to do. Will you use your new saw to cut intricately-detailed pieces like ornaments or puzzles? Or, would you like
            to make bigger projects like arched moldings or curved furniture? If you have a project in mind, the decision between bandsaw and scroll
            saw is easy.
          </p>
          <h2>Advantages of a Scroll Saw</h2>
          <p>
            For tight curves on projects like artwork, clocks, and puzzles, nothing beats the scroll saw. This tool excels at cutting arcs as small as
            the head of a pin. The scroll saw's narrow blade also produces a thin kerf that allows pieces to fit back together almost as if they were
            never cut apart. That might not sound useful, but it's exactly what you need to do to make something like a jigsaw puzzle. It's also a
            great technique for producing marquetry and inlays.
          </p>
          <p>
            Another reason to choose a scroll saw vs band saw is that it can make cutouts in the middle of a part. For example, imagine that you'd
            like to cut a large ring out of a piece of plywood to make a clock. It would be impossible to make the inside cut out with a bandsaw
            because you'd have to cut right through the ring itself. With a scroll saw, you can detach the blade at one end, drill a hole through the
            inside of the ring, insert the blade through that hole and reattach it to the saw. Then you simply turn the saw on and make the cut.
            Woodworkers use this technique to make highly detailed artwork out of wood like landscapes and portraits.
          </p>
          <p>
            You should consider buying a scroll saw if you're going to make small projects to sell at craft shows or on a site like{" "}
            <a href="https://www.etsy.com/">Etsy</a>. You'll be able to make artwork, jewelry and so much more. Most scroll saws can cut material up
            to about 1-½" thick, which is all you need for the majority of craft projects.
          </p>
          <h2>Reasons to Choose a Bandsaw</h2>
          <p>
            The scroll saw is a versatile tool, but it can't do everything. Sure, it's the right saw for small pieces with super-tight curves. But the
            bandsaw is your best friend when you need an all-around workhorse for a variety of cuts in thick materials.
          </p>
          <p>There are several different types of bandsaws, and each type is designed to do certain things better than others.</p>
          <p>
            Benchtop bandsaws are small and portable. They're meant for contractors who bring them along to jobsites and for woodworkers who don't
            have room for a bigger tool. Despite their size, benchtop bandsaws are quite capable. You can cut big curves in plywood or solid wood,
            make rip cuts in thick hardwoods and do almost anything a bigger saw can do. Just make sure to get a high-quality saw made for serious
            hobbyists or professionals. You'll learn how to select a good tool in a moment.
          </p>
          <p>
            Stationary bandsaws have bigger motors than benchtop models, so they outperform the smaller saws when cutting thick, hard materials like
            oak, hickory and pecan. They also accept wider blades, which means they can produce smoother and straighter cuts. Wide blades aren't good
            for tight curves, but they're excellent for rip cuts.
          </p>
          <p>
            You might want to rip material on the bandsaw when it's bowed, curved or warped. It's much safer to cut a warped board on the bandsaw than
            on the tablesaw because there's no chance of kickback. Many woodworkers start their projects by cutting their rough lumber slightly
            oversized on the bandsaw before jointing and planing. After they've planed two faces and jointed an edge, they'll move to the table saw to
            cut everything to final size.
          </p>
          <p>
            Many bandsaws are equipped with fences that aid in rip cutting. You'll also find a variety of jigs for cutting arches, circles and other
            shapes.
          </p>
          <p>
            <a href="https://woodgears.ca/bandsaw/resaw.html">Resaw bandsaws</a> are generally big, powerful tools that are designed for slicing thick
            boards into thin veneers. These saws have strong motors, wide blades and are really good at making straight cuts. Instrument makers use
            resaw bandsaws to cut thin veneers from solid wood to create the sound boards and backs for guitars, violins and other musical
            instruments.
          </p>
          <p>
            Big resaw bandsaws can also cut curves, but when fitted with wide blades, they're limited to large arcs. You can usually attach a smaller
            blade, but if you think you'll be using small blades often, you're probably better off getting a different bandsaw that's made for curves,
            not resawing.
          </p>
          <h2>Best Scroll Saw for the Money</h2>
          <p>
            Now that you know the difference between the scroll saw and bandsaw, you can choose the type of tool you really need. If you've decided on
            a scroll saw, here's how to select a good one.
          </p>
          <p>
            It's important to know whether you'll use your new saw once every couple of months or every day. You can get an inexpensive saw that works
            just fine for occasional use, but you'll have to spend more on something that will need to withstand daily operation.
          </p>
          <p>
            For the occasional hobbyist, brands like Craftsman, Skil and Ryobi are just fine. These tools usually have plastic bodies, metal tables
            and light-duty motors. Expect to spend up to $200 on a good hobby scroll saw of this kind. One model to consider is the{" "}
            <InContentProductLink href="https://amzn.to/2oWD3iW" text="Rikon 16 VS scroll saw" /> It features a tilting table, plastic blade guard and
            work light for around $199 online.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Bosch-RA1171-Fence.jpg"
            alt="Dewalt-Scroll-Saw"
            title="Dewalt-Scroll-Saw"
          />
          <p>Dewalt DW788</p>
          <p>
            If you plan to use your scroll saw on a daily basis, you might want to look at tools from Delta, DeWalt or Jet. A good saw from one of
            these manufacturers can cost somewhere between $400 and $1000, depending on features like tool-free blade clamps, stand, dust blower and
            blade speed. DeWalt's DW788 is a great starter saw for about $480. It has variable speed so you can adjust the blade for the material
            you're cutting, plus a flexible dust blower and tool-free blade clamps. You can add a stand for another $70 or so.
          </p>
          <h2>Best Band Saw for the Money</h2>
          <p>
            Because there are different types of bandsaws, the best saw for you will depend on your needs. If you've decided on a benchtop saw,
            Rikon's 10-305 is a good choice. It's an excellent general-purpose saw for ripping, cutting curves and even resawing material up to 4-⅝"
            wide. It has a tilting steel table, rip-fence and ⅓ horsepower motor, features you should look for in any good benchtop saw. This tool
            should set you back about $280-$300.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522271/TimberTools/Rikon-10-305.jpg"
            alt="Rikon-10-305"
            title="Rikon-10-305"
          />
          <BuyButton productLink="2oWD3iW" />
          <p>
            Decent stationary bandsaws run anywhere from $750 to $1500 or more. You want a heavy saw to reduce vibration and a powerful motor. Look
            for something with 1-¼ horsepower or more, multiple speeds and a lot of resaw capacity (12" or so). Jet's 14" Deluxe Pro Bandsaw, Model
            JWBS-14DXPRO, is a great option. It has all of these features, and you should be able to find it for about $1000.
          </p>

          <p>
            If you're looking for a lower-priced saw to get started, consider the JET 708115K. It's another 14" saw with tilting table, although it
            has a smaller motor (1HP) and single blade speed. You can pick up one of these saws for about $750.
          </p>
          <h2>Bandsaw or Scroll Saw: Do You Need Just One?</h2>
          <p>
            It's possible that you may need both a scroll saw and bandsaw. You won't be able to cut super-tight curves with a bandsaw, and a scroll
            saw can't make straight rip cuts in thick stock.
          </p>
          <p>
            Many woodworkers have both tools. But, if your budget or workspace won't accommodate two saws, you'll have to decide what capabilities you
            need most.
          </p>
          <p>
            For <a href="http://scrollsawer.com/">craft projects, artwork and small workpieces</a>, get yourself a good scroll saw. If you'll be
            building furniture, molding, cabinets or doing home improvements, buy a bandsaw.
          </p>
        </div>
      </article>
    </>
  );
}
