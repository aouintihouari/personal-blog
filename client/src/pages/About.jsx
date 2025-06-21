import SocialIcons from "../components/SocialIcons";

const About = ({ darkMode }) => {
  return (
    <article>
      <h1 className="text-preset-2 dark:text-neutral-0 relative z-10 my-2 inline-block leading-none font-bold text-neutral-700 before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-[6px] before:w-full before:bg-blue-700 before:content-['']">
        About Me
      </h1>
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        Hi, I'm Paulina! Ever since I can remember, I've had a passion for
        creativity and problem-solving. That's what led me to the world of
        front-end web development. There's something magical about seeing an
        idea come to life in the browser—whether it's a simple layout experiment
        or a complex interface for a bigger project.
      </p>
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        When I'm not coding, I love getting lost in a good book. My taste is
        pretty eclectic: I'll happily read everything from fantasy novels to
        biographies of tech pioneers. Reading helps me unwind and often sparks
        new ideas for my coding projects.
      </p>
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        Another big passion of mine is the great outdoors. Hiking allows me to
        disconnect from the digital world and reconnect with nature. I love
        challenging hikes with rewarding views at the top. And if I'm not on the
        trails, you might catch me rock climbing. The combination of mental
        focus and physical endurance is a perfect parallel to tackling tough
        coding challenges!
      </p>
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        Some of my favorite books:
      </p>
      <ul className="text-preset-7 mx-4 my-5 list-disc text-neutral-600 dark:text-neutral-400">
        <li>
          <span className="font-bold">“The Pragmatic Programmer”</span> by
          Andrew Hunt and David Thomas (for helpful insights into software
          development)
        </li>
        <li>
          <span className="font-bold">“Ready Player One”</span> by Ernest Cline
          (for some futuristic escapism)
        </li>
        <li>
          <span className="font-bold">“The Hobbit”</span> by J.R.R. Tolkien (for
          a bit of fantasy fun)
        </li>
        <li>
          <span className="font-bold">“Educated”</span> by Tara Westover (for
          incredible inspiration)
        </li>
      </ul>
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        I absolutely love my workspace as a place that inspires me to do my best
        work, so I thought I'd share it with you:
      </p>
      <img
        className="rounded-[16px]"
        src="/assets/images/image-workspace-large.jpg"
        alt=""
      />
      <p className="text-preset-7 my-5 text-neutral-600 dark:text-neutral-400">
        I hope this blog not only documents my growth but also helps others see
        that coding can be for everyone. Thanks for joining me on this journey!
      </p>
      <h3 className="text-preset-4 dark:text-neutral-0 text-neutral-700">
        Follow me
      </h3>
      <SocialIcons darkMode={darkMode} />
    </article>
  );
};

export default About;
