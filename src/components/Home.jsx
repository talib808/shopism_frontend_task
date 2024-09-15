import React, { useState } from "react";

function Home() {
  const [selectedNeck, setSelectedNeck] = useState("");

  const handleSelectChange = (event) => {
    setSelectedNeck(event.target.value);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex gap-0 items-start">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-20 py-8 w-full rounded-none min-h-[818px] max-md:px-5 max-md:max-w-full">
              <img
                alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c7a8b03620588f76577e2428feef28b6a37b052439ec6ad8176cb38d12a0f73?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                className="object-cover absolute inset-0 w-full h-full "
              />
              <div className="flex relative flex-col pt-1.5 rounded min-h-[758px] max-md:max-w-full">
                <img
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e0c1eebc6bd5c9f158b9ed8c510bee8a11aae7b17a0b907f4c65676e0723ac0?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col w-full rounded min-h-[752px] max-md:max-w-full">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d450c58cd1a5ba5cf8e58d10606d8c34ec311f2597a561dcf6824205fac59df9?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col justify-center py-px w-full rounded min-h-[752px] max-md:max-w-full">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb6614d544562329f3be0c08dd6aa874d8d7cf3b016b0ddae778b1f6ad71cdb?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col px-12 pt-1.5 pb-16 w-full rounded min-h-[751px] max-md:px-5 max-md:max-w-full">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3556b6eb1711772138b544664dd0a4cc614132ca66f3ad034f5551a3585dc82?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex relative gap-5  justify-between items-start self-end max-w-full text-lg font-medium text-center text-neutral-700 w-[660px]">
                        <div className="self-start ">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e338f114912265ed1f430d6923c9358c60142eaefab3342902feeef77fdf7243?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                          className="object-contain mt-1.5  w-[26px] "
                        />
                      
                        </div>
                       
                        <div className="self-start">Sizer</div>
                        <div className="my-auto">Get the look</div>
                        <div className="my-auto">Settings</div>
                      </div>
                      <div className="flex relative flex-wrap gap-5 justify-between mt-12 mr-8 w-full max-w-[1154px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex flex-col my-auto text-xs font-medium text-center w-[20%]">
                          <div className="self-start tracking-normal text-neutral-700">
                            Stylists
                          </div>
                          <div className="flex flex-col items-start mt-4 h-[269px] text-neutral-500">
                            <img
                              alt=""
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82c6a5a463f445645c700f985914717ea9f4715ff490ebcf6223e7dc4864a5e3?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                              className="object-contain aspect-[0.98] w-[51px]"
                            />
                            <img
                              alt=""
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f7ea685c4bfbdac07259a1a877b5428eb28870310f3b525e4225eab6b9af457?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                              className="object-contain mt-1 aspect-[0.98] w-[51px]"
                            />
                            <img
                              alt=""
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b912b8a65a925de30a9dab4b16f1b37dbfe495f2f803b05bd037487a98343?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                              className="object-contain mt-1 aspect-square w-[51px]"
                            />
                            <img
                              alt=""
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afa29fa57e679e7a82af277e0bc0ac09d9264ba7e6bad0fc963e729ef1fa79b8?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                              className="object-contain mt-1 aspect-[0.98] w-[51px]"
                            />
                            <div className="flex flex-col items-center mt-1 bg-white h-[51px] w-[51px]">
                              <div className="px-2.5 w-full rounded-full border border-solid bg-neutral-100 border-neutral-100 h-[51px]">
                                see all
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" w-[70%] flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
                          <div className="flex flex-col self-stretch pt-2.5 pb-28 my-auto w-20 text-xs whitespace-nowrap max-md:pb-24">
                            <div className="group flex flex-col px-1.5 py-1.5 w-full rounded bg-neutral-100 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Neck
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                  
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>

                            <div className="group flex flex-col px-1.5 py-1.5 mt-7 w-full rounded bg-neutral-100 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Shoulder
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col px-1.5 py-1.5 mt-16 w-full rounded bg-neutral-100 max-md:mt-10 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Arms
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group  flex flex-col p-1.5 mt-24 w-full rounded bg-neutral-100 max-md:mt-10 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Leg
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center self-stretch pl-8 my-auto w-[214px]">
                            <div className="text-lg font-medium tracking-normal text-center text-black">
                              Set your perfect fit
                            </div>
                            <div className="flex relative flex-col justify-center items-start self-start px-1.5 py-5 mt-2 w-full aspect-[0.347] max-md:pr-5">
                              <img
                                loading="lazy"
                                alt=""
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3177f762a6dea4226910e94762d4ae73d3533976cf1087fb4849e4c5f3e28d0e?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                                className="object-cover absolute inset-0 size-full"
                              />
                              <div className="flex relative gap-2.5 items-start">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d53af52391146de21c984bc9c09ec29b72eb0b3af5848770da35e80bc732db2?placeholderIfAbsent=true&apiKey=a5dfa76aa08547c9aa789753e666d60a"
                                  className="object-contain aspect-[0.28] w-[138px]"
                                />
                              </div>
                            </div>
                            <div className="overflow-hidden gap-2.5 self-stretch px-9 py-3 text-lg font-medium tracking-normal text-center text-white whitespace-nowrap rounded-lg bg-black hover:bg-black cursor-pointer bg-opacity-30 max-md:px-5">
                              Apply
                            </div>
                          </div>
                          <div className="flex flex-col self-stretch px-0.5 pb-7 my-auto text-xs whitespace-nowrap w-[84px]">
                            <div className="group flex z-10 flex-col p-1.5 -mt-4 w-full rounded bg-neutral-100 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Height
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col px-1.5 py-1.5 mt-14 w-full rounded bg-neutral-100 max-md:mt-10 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Chest
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col px-1.5 py-1.5 mt-5 w-full rounded bg-neutral-100 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Waist
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col p-1.5 mt-8 w-full rounded bg-neutral-100 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Hips
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                            <div className="group flex flex-col px-1.5 py-1.5 mt-32 w-full rounded bg-neutral-100 max-md:mt-10 hover:bg-pink-300">
                              <div className="self-start font-medium text-black group-hover:text-pink-700">
                                Shoe
                              </div>
                              <div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-500 text-neutral-600">
                                <select
                                  value={selectedNeck}
                                  onChange={handleSelectChange}
                                  className="border-none bg-transparent outline-none cursor-pointer"
                                >
                                  <option value="">Select</option>
                                  <option value="Round"> 1 cm </option>
                                  <option value="V-neck">2 cm</option>
                                  <option value="Collar">3 cm </option>
                                  <option value="Round">4 cm</option>
                                  <option value="V-neck">5 cm</option>
                                  <option value="Collar">6 cm</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Home;
