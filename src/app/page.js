import { Header } from "@/components/header";

export default function Homepage() {
  return (
    <div className="mb-10">
      <Header />
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2 mt-10">
          <div className="category">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff810a"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <p className="text-xs font-bold text-slate-500">BENEFITS</p>
          </div>
          <h1 className="text-3xl w-[480px] text-center font-medium">
            Drive results 5x faster by meeting people where they are
          </h1>
        </div>
        <div className="bg-orange-600 w-[90%] h-[480px] rounded-3xl">
          <div className="bg-white w-fit px-5 py-3 mx-16 my-14 rounded-full font-semibold">
            <ul className="flex gap-5 ">
              <li>Build with AI</li>
              <li>Five minutes a day</li>
              <li>Measure Impact</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-5 px-5 py-3 mx-10">
            <h3 className="text-5xl font-normal w-[300px]">
              Build and create with AI
            </h3>
            <p className="w-[200px] font-extralight">
              Instanly turn colisteral into research-driven experience
            </p>
            <button className="btn-secondary">Try the AI</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 -mt-4">
          <div
            className="card
          "
          >
            <div className="flex items-end">
              <h3>92</h3>
              <p className="text-4xl">%</p>
            </div>
            <p className="text-slate-400">of employees prefer Arist</p>
          </div>
          <div
            className="card
          "
          >
            <div className="flex items-end">
              <h3>+30</h3>
              <p className="text-4xl">%</p>
            </div>
            <p className="text-slate-400">confidence lift</p>
          </div>
          <div
            className="card
          "
          >
            <div className="flex items-end">
              <h3>500</h3>
              <p className="text-4xl">k</p>
            </div>
            <p className="text-slate-400">employees trained</p>
          </div>
          <div
            className="card
          "
          >
            <div className="flex items-end">
              <h3>90</h3>
              <p className="text-4xl">%</p>
            </div>
            <p className="text-slate-400">confidence lift</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-10">
          <div className="category">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff810a"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <p className="text-xs font-bold text-slate-500">FEATURES</p>
          </div>
          <h1 className="text-3xl w-[480px] text-center font-medium">
            How it works
          </h1>
        </div>
      </div>
    </div>
  );
}
