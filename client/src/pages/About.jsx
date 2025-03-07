export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Campus Digest
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Campus Digest! This blog was created by Pranshu Upadhyay
              as a personal project to create a platform to share thoughts and ideas
              amongst the university students.
            </p>

            <p>
              On this blog, you'll find weekly events and news about whats currently
              happening in BITS such as Hackathons, Events, Sports and Contests.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
