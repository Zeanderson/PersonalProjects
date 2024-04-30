import linkedIn from '../public/linkedIn.png'
import gitHub from '../public/gitHub.png'
import email from '../public/email.png'
import ProfileBox from './components/ProfileBox'
import Timeline from './components/Timeline'

export default function Home() {
  return (
    <div>
      <header>
        <div className='navbar bg-base-100'>
          <div className='flex-1'>
            <a className='btn btn-ghost text-xl'>Home</a>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <details>
                  <summary>Projects</summary>
                  <ul className='rounded-t-none bg-base-100 p-2'>
                    <li>
                      <a>Gatmate</a>
                    </li>
                    <li>
                      <a>Razorfit</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className='flex flex-col items-center gap-10 pb-14 pt-10 md:pb-10'>
          <div className='flex flex-col items-center gap-10 md:flex-row'>
            <ProfileBox />
            <div className='flex max-w-3xl flex-col items-center gap-2'>
              <p className='text-xl'>
                I'm Zack Anderson, a recent graduate from the University of
                Arkansas with a Bachelor's of Science in Computer Engineering.
                I'm thrilled to announce that I've accepted a software
                engineering position at J.B. Hunt Transport Services, where I'll
                be joining one of their dynamic Infrastructure & Operations
                teams, specifically focusing on Networking.
              </p>
              <p className='text-xl'>
                With a deep-seated passion for software development, I am eager
                to immerse myself in new challenges and opportunities for growth
                within the tech industry. I believe in continuous learning and
                innovation, and I'm excited to contribute my skills and
                enthusiasm to the innovative projects at J.B. Hunt Transport
                Services.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </main>

      <footer className='footer items-center bg-neutral pl-4 text-neutral-content'>
        <aside className='grid-flow-col items-center'>
          <nav className='flex flex-row gap-4'>
            <div className='flex flex-col items-center gap-2 md:flex-row'>
              <img src={email.src} width='38' height='38' />
              <p>zackanderson14@gmail.com</p>
            </div>

            <div className='flex flex-col items-center gap-2 md:flex-row '>
              <a className='link' href='https://github.com/Zeanderson'>
                <img src={gitHub.src} width='38' height='38' />
              </a>
              <p>Zeanders</p>
            </div>

            <div className='flex flex-col items-center gap-2 md:flex-row'>
              <a
                className='link'
                href='https://linkedin.com/in/zachary-anderson-729293250'
              >
                <img src={linkedIn.src} width='38' height='38' />
              </a>
              <p>Zachary Anderson</p>
            </div>
          </nav>
        </aside>
      </footer>
    </div>
  )
}
