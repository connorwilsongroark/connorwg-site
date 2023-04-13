import Page from "../components/Page";
import { useEffect } from "react";

import ExperienceCard from "../components/ExperienceCard";

const Experience = ({ routeId, setCurrentPageIndex, exitToLeft }) => {
  // Update current page on render
  useEffect(() => {
    setCurrentPageIndex(routeId);
  }, []);

  return (
    <Page>
      <div>
        <h2 className='text-5xl font-bold my-2 md:text-6xl'>Experience</h2>
        <p className='my-2 text-2xl font-semibold md:text-3xl '>
          Here's what I've been up to.
        </p>
        {/* Experience Cards container */}
        <section className='flex flex-col md:flex-row gap-5 mt-4'>
          {/*   TAL  */}
          <ExperienceCard>
            {/* company & position container */}
            <div className='flex justify-between items-center '>
              <div className=''>
                <h3 className='text-2xl font-bold'>The AD Leaf</h3>
                <h4 className='text-xl font-bold'>SEO & PPC Specialist</h4>
              </div>
              <img src='adleaflogo.svg' alt='' className='w-8 ' />
            </div>
            <hr className='my-3' />

            <ul className='list-disc ml-5 mt-3 mr-2 leading-relaxed '>
              <li className='my-2'>
                Implemented on-page SEO optimizations including keyword density,
                site speed optimization, and UX/UI improvements.
              </li>
              <li className='my-2'>
                Used Chrome DevTools and Lighthouse to troubleshoot reported
                bugs and styling issues.
              </li>
              <li className='my-2'>
                Designed and built pages on content management systems such as
                WordPress, Shopify, Joomla, and more.
              </li>
            </ul>
          </ExperienceCard>
          <ExperienceCard>
            {/* company, pos, logo */}
            <div className='flex justify-between items-center'>
              <div className=''>
                <h3 className='text-2xl font-bold'>Rootshell Planters</h3>
                <h4 className='text-xl font-bold'>Owner</h4>
              </div>
              <img src='RootshellLogo_IconBlack.svg' alt='' className='w-10' />
            </div>
            <hr className='my-3' />
            <ul className='list-disc ml-5 mt-3 mr-2 leading-relaxed'>
              {/* <li className='my-2 '>
                  Directly fielded all customer questions and concerns including
                  product inquiries, tracking details, and dispute resolution.
                </li>
                <li className='my-2 '>
                  Designed, troubleshot, and tweaked multiple iterations of a
                  Shopify store to improve user experience and conversion rate.
                </li>
                <li className='my-2 '>
                  Overwhelmingly positive reviews based on customer service,
                  communication, and product quality.
                </li> */}
              <li className='my-2 '>
                Designed, troubleshot, and tweaked multiple iterations of a
                Shopify store to optimize user experience and conversion rate.
              </li>
              <li className='my-2 '>
                Directly fielded all customer questions and concerns including
                product inquiries, tracking details, and dispute resolution.
              </li>
              <li className='my-2 '>
                Managed digital marketing efforts including ad placements,
                social media management, product copywriting, and graphics.
              </li>
            </ul>
          </ExperienceCard>
        </section>
      </div>
    </Page>
  );
};

export default Experience;
