import Image from "next/image"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'
const Work = () => {
       return <div className="w-full h-full ">
              <h2 className="h2 text-center mt-16 xl:mt-5 ">Mis Proyectos <span className="text-accent">Jeskarin</span></h2>
              <div className="w-[80%] h-[70%] flex flex-wrap justify-center gap-10  p-20 ml-14 lg:ml-24 mt-5        bg-[#570317]/50">
                     <Swiper
                            slidesPerView={3}
                            navigation={true} pagination={
                                   {
                                          clickable: true,
                                   }

                            } modules={{ Navigation, Pagination }}
                     >
                            <SwiperSlide>    <div className="w-[19rem] h-[19rem] cursor-pointer   bg-black">
                                   <Link href="https://jeskarin36.github.io/EditorImage/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Capturadepantalla 2024-12-12113626.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Editor de Fotos</h5>
                                          <div className="flex gap-2 flex-wrap pl-3">
                                                 <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                                 <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                                 <div className="w-24 h-6 text-center bg-yellow-500">JS</div>


                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide> <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/react-restaurant/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captur25.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="m-2 text-[1.2rem]">Restaurante</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide>    <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/react-skyloop/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captur0.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Tienda de Ropa</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide> <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/vite-search-image/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captura21219.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Buscador de Imagen</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide>  <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/facebook/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captura5340.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">IU Facebook</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                                 <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                                 <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide> <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/react-salon/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captura120725.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Peluqueria</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide>  <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/react-psicologa/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captura20958.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Psicologa</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/react-otroquest/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Capturadepantalla2024-12-12 121407.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Gamer</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide>  <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/aeropuerto-front-end/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Capturadepantalla2024-12-12112310.jpg" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Aeropuerto</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                                 <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                                 <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                                   <Link href="https://jeskarin36.github.io/portafolio/" target="_blank">
                                          <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                                 <Image src="/Captu15656.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="m-2 text-[1.2rem] ">Portafolio</h5>
                                          <div className="flex gap-2 flex-wrap  pl-3">
                                                 <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                                 <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                                 <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div></SwiperSlide>


                     </Swiper>
              </div>
       </div>;
};

export default Work;



/**
 *  return <div className="w-full h-full ">
              <h2 className="h2 text-center mt-16 xl:mt-5 ">Mis Proyectos <span className="text-accent">Jeskarin</span></h2>
              <div className="w-[80%] h-[70%] flex flex-wrap justify-center gap-10 overflow-y-scroll p-8 ml-14 lg:ml-24 mt-5        bg-[#570317]/50">
                    
                     <div className="w-[19rem] h-[19rem] cursor-pointer   bg-black">
                         <Link href="https://jeskarin36.github.io/EditorImage/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Capturadepantalla 2024-12-12113626.png" fill
                                          style={{ objectFit: "fill" }} ></Image>
                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Editor de Fotos</h5>
                            <div className="flex gap-2 flex-wrap pl-3">
                                   <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                   <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                   <div className="w-24 h-6 text-center bg-yellow-500">JS</div>


                            </div>
                         </Link>    
                     </div>
                    
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/react-restaurant/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captur25.png" fill
                                          style={{ objectFit: "fill" }} ></Image>
                            </div>
                            <h5 className="m-2 text-[1.2rem]">Restaurante</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                            <div className="w-24 h-6 text-center bg-blue-700">React</div>
                            </div>
                             </Link> 
                     </div>
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/react-skyloop/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captur0.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Tienda de Ropa</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                            <div className="w-24 h-6 text-center bg-blue-700">React</div>
                            </div>
                            </Link> 
                     </div>
                      <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                      <Link href="https://jeskarin36.github.io/vite-search-image/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captura21219.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Buscador de Imagen</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                            <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                  
                            </div>
                            </Link> 
                     </div>
                       <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                       <Link href="https://jeskarin36.github.io/facebook/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captura5340.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">IU Facebook</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                                   <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                   <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                   <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                            </div>
                            </Link> 
                     </div>
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/react-salon/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captura120725.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Peluqueria</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                                   <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                  
                            </div>
                            </Link> 
                     </div>
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/react-psicologa/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captura20958.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Psicologa</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                            <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                  
                            </div>
                            </Link> 
                     </div>
                    
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/react-otroquest/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Capturadepantalla2024-12-12 121407.png" fill
                                          style={{ objectFit: "fill" }} ></Image>

                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Gamer</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                            <div className="w-24 h-6 text-center bg-blue-700">React</div>
                                  
                            </div>
                            </Link> 
                     </div>
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/aeropuerto-front-end/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Capturadepantalla2024-12-12112310.jpg" fill
                                          style={{ objectFit: "fill" }} ></Image>
                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Aeropuerto</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                                   <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                   <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                   <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                            </div>
                            </Link> 
                     </div>
                     <div className="w-[19rem] h-[19rem] cursor-pointer bg-black">
                     <Link href="https://jeskarin36.github.io/portafolio/" target="_blank">
                            <div className="w-[100%] h-[55%] relative bg-indigo-900 ">
                                   <Image src="/Captu15656.png" fill
                                          style={{ objectFit: "fill" }} ></Image>
                            </div>
                            <h5 className="m-2 text-[1.2rem] ">Portafolio</h5>
                            <div className="flex gap-2 flex-wrap  pl-3">
                                   <div className="w-24 h-6 text-center bg-orange-600">HTML</div>
                                   <div className="w-24 h-6 text-center bg-blue-600">CSS</div>
                                   <div className="w-24 h-6 text-center bg-yellow-500">JS</div>

                            </div>
                            </Link> 
                     </div>
                     
              </div>
       </div>;
 */