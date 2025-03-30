import normalImage from '../assets/normal.jpg';
import goofyImage from '../assets/goofy.jpg';
import backGround from '../assets/background.png';
import Header from '../components/header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 bg-fixed" style={{ backgroundImage: `url(${backGround})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <>
        <Header />
      </>
      <div class="flex flex-row w-full max-lg:flex-wrap max-lg:justify-center items-center overflow">
        <div class="basis-1/2 max-lg:basis-full mx-10 p-3 bg-slate-800 rounded-2xl drop-shadow-2xl my-5 min-w-96">
          <div class="py-4 px-4 text-4xl font-extralight text-white text-center">
            Welcome to my website. I learned how to make a website using React and Tailwind in TWO DAYS just for this portfolio. That's the level of dedication to expect from me.
          </div>
        </div>
        <div class="basis-1/2 max-lg:basis-full mx-10 p-3 bg-slate-800 rounded-2xl drop-shadow-2xl flex max-md:flex-wrap items-center overflow-hidden my-5 min-w-96">
          <img class="size-48 rounded-xl hover:scale-125 ease-in-out duration-500 object-cover object-top min-w-36 max-md:basis-full max-md:object-fill" src={normalImage}></img>
          <div class="py-4 px-4 text-4xl font-extralight text-white text-center">
            I am Alexander Hawkins, a soon to be high school graduate, self-taught in video/photo editing, graphic design, scriptwriting, audio mixing, and more.
          </div>
        </div>
      </div>
      <div class="text-white font-semibold text-2xl text-center p-8 flex items-center justify-center">
        <div class="w-1/2 max-lg:w-full">
          My main self-learning has been through my YouTube channel. Through only a few videos, I have created full documentaries, tutorials, informational videos, and more, and have managed to gain over a million views. Here is some of my best work:
        </div>
      </div>
      <div class="flex flex-row items-center gap-5 p-5 max-lg:flex-wrap pb-24">
        <div class="basis-1/3 max-lg:basis-full p-3 bg-slate-800 rounded-2xl drop-shadow-2xl">
          <iframe class="w-full h-[18rem] rounded-xl" src="https://www.youtube.com/embed/YRjZchvCl84"></iframe>
          <div class="text-white font-semibold text-center translate-y-1">
            Long-form documentary. My best ever video, 1 week of work.
          </div>
        </div>
        <div class="basis-1/3 max-lg:basis-full p-3 bg-slate-800 rounded-2xl drop-shadow-2xl">
          <iframe class="w-full h-[18rem] rounded-xl" src="https://www.youtube.com/embed/j2QQvOv6000"></iframe>
          <div class="text-white font-semibold text-center translate-y-1">
            Comprehensive tutorial for a newly released mod.
          </div>
        </div>
        <div class="basis-1/3 max-lg:basis-full p-3 bg-slate-800 rounded-2xl drop-shadow-2xl">
          <iframe class="w-full h-[18rem] rounded-xl" src="https://www.youtube.com/embed/j5UxN7sqQDU"></iframe>
          <div class="text-white font-semibold text-center translate-y-1">
            Shorter informational video to clear up misconceptions in the community.
          </div>
        </div>
      </div>
      <div class="flex fixed w-full justify-center bottom-5 drop-shadow-lg">
        <div class="bg-slate-900 rounded-2xl p-3 shadow-lg flex items-center text-white max-sm:text-xs font-bold hover:scale-110 ease-in-out duration-300">
          Discord: sinc0s - Email: <a href="mailto:sincosbusiness@gmail.com" class="text-blue-500 underline mx-1">sincosbusiness@gmail.com</a> - Have a lovely day :)
        </div>
      </div>
    </main>
  )
}