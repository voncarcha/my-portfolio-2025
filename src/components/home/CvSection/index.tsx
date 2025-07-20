import { ITEMS } from './constants';
import Item from './Item';
import Background from './Background';

const CvSection = () => {
  return (
    <article className="relative w-full pb-[100px] lg:pb-[200px]">
      <section className="mx-auto max-w-screen-xl px-[20px]">
        <header className="w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Curriculum Vitae
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            I&apos;ve worked on{' '}
            <span className="gradient-text">more than 100 websites</span> for
            great organizations
          </h2>
        </header>

        <div className="flex w-full flex-col justify-between gap-[20px] pt-2 lg:flex-row lg:pt-10">
          <section className="w-full lg:w-1/2" aria-labelledby="work-experience">
            <h3 id="work-experience" className="sr-only">Work Experience</h3>
            <ul className="w-full" role="list">
              {ITEMS.map((item) => (
                <Item key={item.company} item={item} />
              ))}
            </ul>
          </section>
          
          <aside className="w-full lg:w-[500px]" aria-labelledby="additional-info">
            <h3 id="additional-info" className="sr-only">Additional Information</h3>
            
            <section aria-labelledby="education-heading">
              <h4 id="education-heading" className="block pt-6 text-sm font-semibold text-app-300">
                Education
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                Lyceum of the Philippines University, Cavite
                <br /> Bachelor of Science in Information Technology (2008-2013)
              </p>
            </section>
            
            <section aria-labelledby="role-heading">
              <h4 id="role-heading" className="block pt-6 text-sm font-semibold text-app-300">
                What I do
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                Front-end developer (primary), Web Designer
              </p>
            </section>
            
            <section aria-labelledby="languages-heading">
              <h4 id="languages-heading" className="block pt-6 text-sm font-semibold text-app-300">
                Languages / Frameworks
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                TypeScript, JavaScript, React, Next.js, Node.js, HTML, CSS
              </p>
            </section>
            
            <section aria-labelledby="styling-heading">
              <h4 id="styling-heading" className="block pt-6 text-sm font-semibold text-app-300">
                Styling / UI Libraries
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                TailwindCSS, Ant Design, Material UI, shadcn, styled-components
              </p>
            </section>
            
            <section aria-labelledby="cms-heading">
              <h4 id="cms-heading" className="block pt-6 text-sm font-semibold text-app-300">
                Content Management Systems
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                Strapi, Wordpress, Saleor, Shopify
              </p>
            </section>
            
            <section aria-labelledby="state-heading">
              <h4 id="state-heading" className="block pt-6 text-sm font-semibold text-app-300">
                State Management
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                Redux, React Query, Zustand, Context API
              </p>
            </section>
            
            <section aria-labelledby="tools-heading">
              <h4 id="tools-heading" className="block pt-6 text-sm font-semibold text-app-300">
                Other Tools
              </h4>
              <p className="text-md block pt-1 font-semibold text-app-100">
                Storybook, Docker, Git, Figma, and many more...
              </p>
            </section>
          </aside>
        </div>
      </section>
      <Background />
    </article>
  );
};

export default CvSection;
