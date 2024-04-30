import profilePic from '../../public/profilePic.jpg'
import linkedIn from '../../public/linkedIn.png'
import gitHub from '../../public/gitHub.png'

function ProfileBox() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='pl-4 text-4xl font-bold'>Zachary Anderson</div>
      <div className='avatar'>
        <div className='w-78 mask mask-squircle'>
          <img src={profilePic.src} />
        </div>
      </div>
      <p className='text-xl'>B.S. Computer Engineering</p>
      <p className='text-xl'>Software Engineer I</p>
      <div className='flex flex-row gap-1'>
        <a className='link' href='https://github.com/Zeanderson'>
          <img src={gitHub.src} width='48' height='48' />
        </a>
        <a
          className='link'
          href='https://linkedin.com/in/zachary-anderson-729293250'
        >
          <img src={linkedIn.src} width='48' height='48' />
        </a>
      </div>
    </div>
  )
}

export default ProfileBox
