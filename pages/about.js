import Head from 'next/head';
import Image from 'next/image';
import photo from '../Public/Catharine_Bio_Podcast.jpeg';

export default function About() {
  return (
    <>
      <Head>
        <title>About – alpha</title>
      </Head>

      <section className="bg-pink-600 text-white text-center py-20">
        <h1 className="text-5xl font-serif font-bold lowercase tracking-tight">alpha</h1>
        <p className="text-md mt-2">leading women in STEM podcast</p>
      </section>

      <section className="bg-white text-black px-6 py-16 sm:px-12 md:px-24 lg:px-48 space-y-12">
        <h2 className="text-pink-600 uppercase text-sm font-bold tracking-wide">About alpha</h2>
        <h3 className="text-2xl md:text-3xl font-bold leading-snug">
          alpha is for the firsts. The onlys. The women rewriting what leadership looks like in STEM.
        </h3>
        <p>This isn’t just a podcast. It’s a call to the women who’ve walked into rooms not built for them - and stayed. To those who’ve felt the weight of being brilliant and underestimated at the same time. To the ones who’ve led quietly, taught fearlessly, and built relentlessly.</p>
        <p>alpha is here to reflect what they’ve known all along: they’ve always belonged.</p>
        <p>Named for the beginning - the first - alpha is a platform created to center the voices of women in science, technology, engineering, and math. Through honest conversations, unapologetic storytelling, and shared experience, alpha brings visibility to the power, purpose, and persistence of women who are shaping the future of their fields.</p>
        <p>Welcome to alpha.</p>
      </section>

      <section className="bg-white text-black px-6 py-16 sm:px-12 md:px-24 lg:px-48">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Image 
              src={photo} 
              alt="Catharine Young" 
              className="rounded-xl w-full h-auto object-cover" 
              placeholder="blur"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-pink-600 uppercase text-sm font-bold tracking-wide">About Catharine</h2>
            <p className="text-lg">
              I’m a scientist. An immigrant. A mother. A builder. I’ve worked across research, policy, advocacy and global health, from the lab to the White House, and I’ve carried both ambition and heartbreak along the way.
            </p>
            <p className="text-lg">
              In every space I’ve been, I’ve met women who are pushing science and innovation forward, leading with clarity. Women who are transforming their fields while holding far more than what’s written in their titles.
            </p>
            <p className="text-lg">
              alpha was born from those conversations.
            </p>
            <p className="text-lg">
              It came from seeing just how much brilliance was already out there - and how few platforms reflected it back. From hearing women in STEM name the stakes of their work, their leadership, their vision - and knowing that those stories weren’t optional. They were essential.
            </p>
            <p className="text-lg">
              My work has always lived at the intersection of science and systems change. I’ve helped launch global initiatives, advised policy at the highest levels, and built coalitions across sectors and countries. But alpha is different. It’s not about institutions. It’s about connection.
            </p>
            <p className="text-lg">
              This isn’t about giving women in STEM a voice. It’s about building the kind of platform their voices were always meant for.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
