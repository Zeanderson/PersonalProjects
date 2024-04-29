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
        <div className='flex flex-row items-center justify-between gap-2'>
          <ProfileBox />
          <div className='flex max-w-lg flex-col items-center gap-2'>
            <div className='pl-4 text-4xl font-bold'>About Me</div>
            <p>
              My name is Zachary (Zack) Anderson and I am a recent grad from the
              University of Arkansas with a bachelors of science in Computer
              Engineering.{' '}
            </p>
          </div>
          <Timeline />
        </div>
      </main>
      <footer className='footer items-center bg-neutral p-4 text-neutral-content'>
        <aside className='grid-flow-col items-center'>
          {/* This is the right side footer :0  */}
          {/* <p>Copyright ©Anderson LLC 2024 - All right reserved</p> */}
        </aside>
        <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          <div className='flex flex-row items-center gap-2'>
            <img src={email.src} width='38' height='38' />
            <p>zackanderson14@gmail.com</p>
          </div>

          <div className='flex flex-row items-center gap-2 '>
            <a className='link' href='https://github.com/Zeanderson'>
              <img src={gitHub.src} width='38' height='38' />
            </a>
            <p>Zeanders</p>
          </div>

          <div className='flex flex-row items-center gap-2'>
            <a
              className='link'
              href='https://linkedin.com/in/zachary-anderson-729293250'
            >
              <img src={linkedIn.src} width='38' height='38' />
            </a>
            <p>Zachary Anderson</p>
          </div>
        </nav>
      </footer>
    </div>
  )
}
