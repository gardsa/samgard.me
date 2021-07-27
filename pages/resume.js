import Head from 'next/head'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Sam Gard - Resume</title>
      </Head>
      <header>
        <h1>Sam Gard, Front-End Developer</h1>
        <div id='contact'>
          <div class='email'>
            <strong>Email:</strong> <a href='mailto:hello@samgard.me'>hello@samgard.me</a>
          </div>
          <div class='phone'>
            <strong>Phone:</strong> 021 022 03905
          </div>
          <div class='website'>
            <strong>Website:</strong> <a href='www.samgard.me'>www.samgard.me</a>
          </div>
        </div>
      </header>
      <section id='summary'>
        <strong>Personal statement:</strong>
        <p style={{ marginTop: '0' }}>
          I am a creative and resourceful front-end developer with 4+ years of experience
          building high-quality applications in complex environments.
        </p>
        <p>
          I have a keen attention to detail and a pragmatic problem-solving approach. I’m
          passionate about delivering performant solutions that meet stakeholder
          requirements, delight users, and are easily maintainable.
        </p>
        <p>
          I seek to continually improve my workflow, guide and collaborate with team
          members, advocate for the end-user, and bridge the gap between UI/UX design and
          code implementation.
        </p>
      </section>
      <hr />
      <section id='skills'>
        <header>
          <h2>Technical Skills</h2>
        </header>
        <table>
          <thead className={utilStyles.a11y}>
            <tr>
              <th>Skill</th>
              <th>Keywords</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '25%', verticalAlign: 'top' }}>Front-End</td>
              <td class='keywords'>
                HTML, CSS/SASS, Javascript, React, Redux, Next.js, Jest, Enzyme,
                Testing-Library, Mock Service Worker, Webpack, Storybook, Apollo/GraphQL,
                Prismic Headless CMS
              </td>
            </tr>
            <tr>
              <td style={{ width: '25%', verticalAlign: 'top' }}>DevOps/Tooling</td>
              <td class='keywords'>
                Git, GitHub, Terraform, Terragrunt, AWS, Netlify, Docker, ESLint,
                Prettier, Husky, Sentry, LogRocket, Hotjar
              </td>
            </tr>
            <tr>
              <td style={{ width: '25%', verticalAlign: 'top' }}>UI/UX Design</td>
              <td class='keywords'>Miro, Figma, InVision, Adobe XD, Balsamiq</td>
            </tr>
            <tr>
              <td style={{ width: '25%', verticalAlign: 'top' }}>Project</td>
              <td class='keywords'>Agile, Trello, JIRA</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr />
      <section id='employment'>
        <header>
          <h2>Professional Experience</h2>
        </header>
        <div>
          <h3>
            <em>Front-End Developer</em>, <a href='https://abletech.nz/'>Abletech</a>
          </h3>
          <span class='location'></span> <span class='tenure'>2017-11 — Present</span>
          <p></p>
          <ul>
            <li>Front-end web development and consultancy</li>
            <li>Expanding interest and capability in UI/UX design</li>
            <li>Ongoing involvement in recruitment and mentoring processes</li>
            <li>Delivery of tech talks and workshops to the wider team</li>
            <li>Health and Safety representative (June 2020 - present)</li>
          </ul>
        </div>
        <div>
          <h3>
            <em>Intern Developer</em>, <a href='https://abletech.nz/'>Abletech</a>
          </h3>
          <span class='location'></span> <span class='tenure'>2016-11 — 2017-02</span>
          <p>
            <p>Rebuilt and streamlined the existing AED Locations web application</p>
          </p>
        </div>
        <div>
          <h3>
            <em>Intern Developer</em>, <a href='https://abletech.nz/'>Abletech</a>
          </h3>
          <span class='location'></span> <span class='tenure'>2015-11 — 2016-02</span>
          <p>
            <p>
              Built and shipped AddressFinder&#39;s &#39;Suggest&#39; feature to support
              crowd sourced data corrections.
            </p>
          </p>
        </div>
      </section>
      <hr />
      <section id='projects'>
        <header>
          <h2>Projects</h2>
        </header>
        <div>
          <h3>
            <em>UI/UX design & Front-end development</em>, Under NDA
          </h3>
          <span class='tenure'>2021-05 — Present</span>
          <p>
            A front-end application built to face and support the back-end trading engine.
          </p>
          <ul>
            <li>Defining core user tasks</li>
            <li>Creating user flows and wireframes</li>
            <li>Producing a clickable prototype</li>
            <li>Working closely with the brand and strategy team involved</li>
            <li>Sole front-end developer building the React/TypeScript SPA</li>
            <li>
              Providing guidance on creating the statically generated marketing site
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <em>Front-end development</em>,{' '}
            <a href='https://lighthousefunds.nz/'>Lighthouse Funds</a>
          </h3>
          <span class='tenure'>2020-12 — 2021-05</span>
          <p>
            A brochureware site built using the JAMstack approach with Next.js, Netlify
            and Prismic.
          </p>
          <ul>
            <li>Selected appropriate technologies based on business requirements</li>
            <li>Integrated with a number of third party services</li>
            <li>
              Worked closely with the stakeholders and design team to deliver the site in
              the agreed timeframe
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <em>Front-end development</em>,{' '}
            <a href='https://www.lic.co.nz/'>Livestock Improvement Corporation</a>
          </h3>
          <span class='tenure'>2017-11 — 2021-01</span>
          <p>
            Suite of micro front-ends integrated with back-end microservices, replacing
            legacy systems.
          </p>
          <ul>
            <li>Replaced an MVP Ruby/Rails front-end with a React front-end</li>
            <li>
              Contributed extensively to the private package library for shared React
              components
            </li>
            <li>
              Implemented a “Three-Amigos” approach with the product owner and design team
              to solve design problems efficiently
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section id='education'>
        <header>
          <h2>Education</h2>
        </header>
        <div>
          <h3>
            <em>Bachelor of Design Innovation</em>,{' '}
            <a href='https://wgtn.ac.nz/'>Victoria University of Wellington</a>
          </h3>
          <span class='tenure'>2015-03 — 2017-12</span>

          <p>Major in Media Design, Grade average A- (7.54), Dean’s List 2016</p>
        </div>
      </section>
      <hr />
      <section id='service'>
        <header>
          <h2>Volunteer Service</h2>
        </header>
        <div>
          <h3>
            <em>Wellington Operational Support</em>,{' '}
            <a href='https://firesupport.org.nz/'>Fire and Emergency NZ</a>
          </h3>
          <span class='tenure'>2018-12 — 2021-06</span>

          <p>
            <p>
              Trained for, and responded to incidents as part of a specialist support
              unit, to aid and assist front-line firefighters in achieving successful
              operational outcomes.
            </p>
          </p>
          <ul>
            <li>Victim support</li>
            <li>Evacuation support</li>
            <li>Salvage</li>
            <li>Community education</li>
            <li>Traffic control</li>
            <li>Lighting</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
