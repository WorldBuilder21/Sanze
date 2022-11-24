import React, { useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router";
import { UserAuth } from "../../utils/Context/AuthContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import cinasoul from "./assets/images/cinasoul.jpg";
import ojorleycover from "./assets/images/ojorleycover.jpeg";
import zombiecover from "./assets/images/zombiecover.png";
import fellakuti from "./assets/images/fellakuti.webp";
import Abomvelocover from "./assets/images/Abomvelocover.jpg";
import daliwonga from "./assets/images/daliwonga.jpg";
import darkovibes from "./assets/images/darkovibes.jpg";
import tomorrowcover from "./assets/images/tomorrowcover.webp";
import diamondplatnumzcover from "./assets/images/diamondplatnumzcover.jpg";
import Inama from "./assets/images/Inama.jpg";

import lumba from "./assets/lumba.png";
import darkosongphoto from "./assets/darkosongphoto.jpg";
import "./styles.css";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { audios } from "../../audioData";
import { getAudioData } from "../../utils/store/audio/audioSlice";

export default function HomeScreen() {
  const [isOPen, setIsOpen] = useState(false);
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  const handleLogOut = () => {
    logOut();
  };
  return (
    <body>
      <nav className="bg-zinc-800 px-4 py-2.5 sticky w-full z-20 top-0 left-0 drop-shadow-lg  ">
        <div className=" flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="active:stroke-slate-200 stroke-gray-400 -ml-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="text-2xl ml-10 text-white font-semibold whitespace-nowrap">
              Sanza
            </span>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="flex py-2 pr-4 pl-3 text-white hover:bg-zinc-800 bg-zinc-700 rounded-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 -ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Log out
          </button>
          <Transition appear show={isOPen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden   p-6 text-left align-middle transition-all">
                      <div class="relative bg-zinc-700 rounded-lg shadow">
                        <button
                          type="button"
                          onClick={handleClose}
                          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                          data-modal-toggle="popup-modal"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-6 text-center">
                          <svg
                            aria-hidden="true"
                            class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <h3 class="mb-5 text-lg font-normal text-white ">
                            Are you sure you want to log out
                          </h3>
                          <button
                            onClick={handleLogOut}
                            type="button"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                          >
                            Yes, I'm sure
                          </button>
                          <button
                            onClick={handleClose}
                            type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          >
                            No, cancel
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </nav>
      <div class="banner">
        <div class="banner_contents">
          <h1 class="banner_title">Crazy Tings</h1>
        </div>
        <div class="banner_fadeBottom"></div>
      </div>

      <div class="title">LATEST HITS</div>
      <div class="holder">
        <div class="list-container">
          {audios.map((audio, index) => (
            <div
              onClick={() => {
                dispatch(getAudioData(audio));
                navigate("/home/playerScreen");
              }}
              key={index}
              class="card"
            >
              <img
                class="songart"
                src={audio.cover}
                alt=""
                height="1000"
                width="1000"
              />
              <div class="details">
                <div class="song-name">
                  <a href="Song Pages/Alone - Burna Boy/songpage.html">
                    {audio.name}
                  </a>
                </div>
                <div class="artist-name">{audio.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="title">POPULAR ARTISTS</div>
      <div class="holder">
        <div class="artist-container">
          <div class="artist-card">
            <img
              class="artist-image"
              src={fellakuti}
              alt=""
              height="1000"
              width="1000"
            />
            <div class="artist-username">Fella Kuti</div>
          </div>
          <div class="artist-card">
            <img
              class="artist-image"
              // src="assets/lumba.png"
              src={cinasoul}
              alt=""
              height="1000"
              width="1000"
            />
            <div class="artist-username">Cina Soul</div>
          </div>

          <div class="artist-card">
            <img
              class="artist-image"
              src={daliwonga}
              alt=""
              height="1000"
              width="1000"
            />
            <div class="artist-username">Daliwonga</div>
          </div>

          <div class="artist-card">
            <img
              class="artist-image"
              src={darkovibes}
              alt=""
              height="1000"
              width="1000"
            />
            <div class="artist-username">Darko vibes</div>
          </div>

          <div class="artist-card">
            <img
              class="artist-image"
              src={Inama}
              alt=""
              height="1000"
              width="1000"
            />
            <div class="artist-username">Diamond Platnumz</div>
          </div>
        </div>
      </div>
    </body>
  );
  // return (
  //   <div>
  //     <nav className="bg-zinc-800 px-4 py-2.5 sticky w-full z-20 top-0 left-0 drop-shadow-lg  ">
  //       <div className=" flex flex-wrap items-center justify-between">
  //         <div className="flex items-center">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth="1.5"
  //             stroke="currentColor"
  //             className="active:stroke-slate-200 stroke-gray-400 -ml-2 w-6 h-6"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  //             />
  //           </svg>
  //           <span className="text-2xl ml-10 text-white font-semibold whitespace-nowrap">
  //             Sanza
  //           </span>
  //         </div>
  //         <button
  //           type="button"
  //           onClick={openModal}
  //           className="flex py-2 pr-4 pl-3 text-white hover:bg-zinc-800 bg-zinc-700 rounded-lg "
  //         >
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth="1.5"
  //             stroke="currentColor"
  //             className="w-6 h-6 mr-2 -ml-1"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
  //             />
  //           </svg>
  //           Log out
  //         </button>
  //         <Transition appear show={isOPen} as={Fragment}>
  //           <Dialog as="div" className="relative z-10" onClose={handleClose}>
  //             <Transition.Child
  //               as={Fragment}
  //               enter="ease-out duration-300"
  //               enterFrom="opacity-0"
  //               enterTo="opacity-100"
  //               leave="ease-in duration-200"
  //               leaveFrom="opacity-100"
  //               leaveTo="opacity-0"
  //             >
  //               <div className="fixed inset-0 bg-black bg-opacity-25" />
  //             </Transition.Child>
  //             <div className="fixed inset-0 overflow-y-auto">
  //               <div className="flex min-h-full items-center justify-center p-4 text-center">
  //                 <Transition.Child
  //                   as={Fragment}
  //                   enter="ease-out duration-300"
  //                   enterFrom="opacity-0 scale-95"
  //                   enterTo="opacity-100 scale-100"
  //                   leave="ease-in duration-200"
  //                   leaveFrom="opacity-100 scale-100"
  //                   leaveTo="opacity-0 scale-95"
  //                 >
  //                   <Dialog.Panel className="w-full max-w-md transform overflow-hidden   p-6 text-left align-middle transition-all">
  //                     <div class="relative bg-zinc-700 rounded-lg shadow">
  //                       <button
  //                         type="button"
  //                         onClick={handleClose}
  //                         class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
  //                         data-modal-toggle="popup-modal"
  //                       >
  //                         <svg
  //                           aria-hidden="true"
  //                           class="w-5 h-5"
  //                           fill="currentColor"
  //                           viewBox="0 0 20 20"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <path
  //                             fill-rule="evenodd"
  //                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                             clip-rule="evenodd"
  //                           ></path>
  //                         </svg>
  //                         <span class="sr-only">Close modal</span>
  //                       </button>
  //                       <div class="p-6 text-center">
  //                         <svg
  //                           aria-hidden="true"
  //                           class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
  //                           fill="none"
  //                           stroke="currentColor"
  //                           viewBox="0 0 24 24"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <path
  //                             stroke-linecap="round"
  //                             stroke-linejoin="round"
  //                             stroke-width="2"
  //                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //                           ></path>
  //                         </svg>
  //                         <h3 class="mb-5 text-lg font-normal text-white ">
  //                           Are you sure you want to log out
  //                         </h3>
  //                         <button
  //                           onClick={handleLogOut}
  //                           type="button"
  //                           class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
  //                         >
  //                           Yes, I'm sure
  //                         </button>
  //                         <button
  //                           onClick={handleClose}
  //                           type="button"
  //                           class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
  //                         >
  //                           No, cancel
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </Dialog.Panel>
  //                 </Transition.Child>
  //               </div>
  //             </div>
  //           </Dialog>
  //         </Transition>
  //       </div>
  //     </nav>
  //     <div className=" bg-zinc-800 p-4">
  //       <div className="bg-repeat bg-cover w-full bg-zinc-800 aspect-[3/4] h-96 bg-center bg-origin-content rounded-md bg-[url('https://consequence.net/wp-content/uploads/2022/05/burna-boy-last-last-stream.jpg?quality=80')] md:bg-[url('https://loudlivefest.com/wp-content/uploads/2022/01/Burna-Banner.png')]"></div>
  //     </div>
  //     <div className="flex flex-col bg-zinc-800">
  //       <div className="text-white m-3 font-semibold text-5xl">
  //         Popular Artist
  //       </div>
  //       <div className="flex flex-col md:flex-row">
  //         <div className="rounded-lg shadow-xl m-3 max-w-sm bg-zinc-900">
  //           <div className="flex m-3 items-center">
  //             <img
  //               alt="artist cover"
  //               src={burnapfp}
  //               className="w-28 h-28 rounded-full"
  //             />
  //             <div className="flex flex-col">
  //               <div
  //                 style={{ fontFamily: "Poppins" }}
  //                 className="text-white ml-4 font-semibold text-3xl"
  //               >
  //                 Burna Boy
  //               </div>
  //               <div className="ml-4 text-slate-400">Official artist</div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="rounded-lg shadow-xl m-3 max-w-sm bg-zinc-900">
  //           <div className="flex m-3 items-center">
  //             <img
  //               alt="artist cover"
  //               src="https://play-lh.googleusercontent.com/e0rC0oUpTodsOAaOWwNt35bGFCgcYAHUl_gmBLkzNgZkH0X6spngLjAnconmW72odsIA"
  //               className="w-28 h-28 rounded-full"
  //             />
  //             <div className="flex flex-col">
  //               <div
  //                 style={{ fontFamily: "Poppins" }}
  //                 className="text-white ml-4 font-semibold text-3xl"
  //               >
  //                 Daddy lumba
  //               </div>
  //               <div className="ml-4 text-slate-400">Official artist</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="text-white m-3 font-semibold text-5xl">Latest hits</div>
  //       <div className="flex flex-col md:flex-row">
  //         {audios.map((audio, index) => (
  //           <div
  //             key={index}
  //             onClick={() => {
  //               dispatch(getAudioData(audio));
  //               navigate("/home/playerScreen");
  //               console.log(audio_selector.cover);
  //             }}
  //             class="relative m-4 max-w-sm rounded-lg shadow-md"
  //           >
  //             <img
  //               class="r rounded-t-lg rounded-b-lg object-cover"
  //               src={audio.cover}
  //               alt="..."
  //             />
  //             <div class="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gray-800 px-4 py-2 opacity-70">
  //               <div class="flex items-center justify-between">
  //                 <div class="flex flex-col">
  //                   <div class="text-xl font-bold text-white">{audio.name}</div>
  //                   <div class="text-md text-slate-400">{audio.artist}</div>
  //                 </div>
  //                 <div class="relative flex h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-full bg-green-600">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     viewBox="0 0 24 24"
  //                     fill="currentColor"
  //                     class="h-6 w-6"
  //                   >
  //                     <path
  //                       fill-rule="evenodd"
  //                       d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
  //                       clip-rule="evenodd"
  //                     />
  //                   </svg>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}
