function Timeline() {
  return (
    <ul className='timeline timeline-vertical timeline-snap-icon max-md:timeline-compact'>
      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-start mb-10 md:text-end'>
          <time className='font-mono italic'>2023</time>
          <div className='collapse'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              <div className='pb-2'>
                <div className='text-lg font-black'>
                  <p>Infrastructure and Operations Summer Internship</p>
                </div>
              </div>
              <label>J.B. Hunt Transport Services</label>
            </div>
            <div className='collapse-content'>
              <p className='text-sm'>
                During the summer as a Infrastructure and Operations intern for
                the Networking team, my primary responsibility was to assist in
                web development for applications in our operations. This
                internship provided a comprehensive full-stack experience,
                requiring me to delve into backend, frontend, and the intricate
                connections between them. I tackled a diverse array of tasks,
                from crafting backend scripts for servers and nodes to frontend
                web development utilizing technologies such as React and
                Tailwind CSS. In addition to my development work, I got into
                some networking fundamental topics ranging from subnetting to
                the intricacies of multi-cloud design architectures. Overall,
                this internship served as an enriching journey into the world of
                networking, fostering both my technical abilities and my growth
                as a software developer.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <div className='timeline-end mb-10'>
          <time className='font-mono italic'>2024</time>
          <div className='collapse'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              <div className='pb-2'>
                <div className='text-lg font-black'>
                  <p>Infrastructure and Operations Annual Internship</p>
                </div>
              </div>
              <label>J.B. Hunt Transport Services</label>
            </div>
            <div className='collapse-content'>
              <p className='text-sm'>
                Building upon my previous summer internship, I had the privilege
                of returning to the Networking team as an annual intern during
                the spring season. This time around, I embarked on a more
                autonomous journey, taking the helm in the development of web
                applications and server-side scripting projects. The internship
                provided me with a unique opportunity to take ownership of my
                work, allowing me to independently conceptualize, design, and
                implement web applications that are now actively utilized by
                various teams within the company. One notable project involved
                leveraging Ansible to streamline the retrieval of router and
                switch information into the frontend applications I developed
                for our operations teams. This hands-on experience not only
                sharpened my technical skills but also instilled in me a sense
                of responsibility and initiative crucial for success in the
                software industry. It was like a stepping stone into the real
                world of software development, giving me the hands-on skills and
                confidence I need for what's next in my career.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-start mb-10 md:text-end'>
          <time className='font-mono italic'>2024</time>
          <div className='collapse'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              <div className='pb-2'>
                <div className='text-lg font-black'>
                  <p>Software Engineer I</p>
                </div>
              </div>
              <label>J.B. Hunt Transport Services</label>
            </div>
            <div className='collapse-content'>
              <p className='text-sm'>Current Position</p>
            </div>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  )
}

export default Timeline
