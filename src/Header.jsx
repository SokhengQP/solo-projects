import { useState, useEffect } from 'react';



export default function Header() {
     function showMenu(event) {
          event = document.querySelector('.links-Active');
          event.classList.toggle('links');
     }
     
     // Switching Themes
     const savedTheme = localStorage.getItem('switchTheme') || 'light';
     const [themes, setThemes] = useState(savedTheme);
     
     useEffect(() => {
          document.body.classList.toggle('dark-mode', themes === 'dark-mode');
          localStorage.setItem('switchTheme', themes);
          
     }, [themes]);
     
     function toggleTheme() {
          setThemes(prevTheme => prevTheme === 'light' ? 'dark-mode' : 'light');
     }
     
     
     return (
				<>
					{/* Header-container */}
					<div className="flex items-center justify-between sticky top-0 z-10 h-[80px] flex-shrink-0">
						<div className="mr-12 flex flex-shrink-0 drop-shadow-md px-4">
							<img
								className="h-[80px] rounded-[50%]"
								src="https://cf-sparkai-live.s3.amazonaws.com/users/11178409/spark_ai/o_bg-remover-gen_2qvXidcAFAdyzZlV74rWSuBHBEt.png"
								alt="Kim-Sokheng || Personal-Portfolio"
							/>
						</div>

						{/* hader-right */}
						<div className="menu px-4">
							{/* menu */}
							<div className="flex px-4">
								{/* header-right links */}
								<div className="opacity-0 flex items-center gap-4 mr-4 links-Active w-fit">
									<a href="#AboutMe" className="">
										About
									</a>
									<a href="#Skills" className="">
										Skills
									</a>
									<a href="#Experience" className="">
										Experience
									</a>
									<a href="#myProject" className="">
										Project
									</a>
								</div>

						
								<div className="flex items-center justify-center hover:cursor-pointer h-[34px] w-[34px] rounded-3xl">
									<svg
										onClick={showMenu}
										className="h-[24px] p-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
									</svg>
								</div>

								<div
									onClick={toggleTheme}
									id="toggleTheme"
									className="flex items-center justify-center hover:cursor-pointer h-[34px] w-[26px] rounded-3xl relative"
								>
									{/* sun */}
									<svg
										className="h-[18px] absolute left-0 z-10"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
									</svg>

									<p className="text-3xl rounded-md h-[2px] w-[40px] -rotate-[70deg] -z-20"></p>

									{/* moon */}
									<svg
										className=" h-[18px] absolute right-0 z-10"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
									>
										<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					

					
				</>
			);
}