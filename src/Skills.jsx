import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillProps from "./SkillProps.jsx";
import {
	faHtml5,
	faSass,
	faCss,
	faJs,
	faReact,
	faGithub,
	faNode,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
	return (
		<>
			<div
				id="Skills"
				className="h-screen p-4 grid grid-cols-1 place-items-center"
			>
				<div className="p-4 rounded-3xl flex justify-center flex-col shadow-[0_0_10px] h-[600px]">
					<div className="technical-skills text-center text-3xl">
						<h2>Technical skills</h2>
					</div>

					<div className="grid grid-cols-3 gap-4 p-4 place-items-center">
						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faHtml5} size="xl" />}
							languages="HTML"
							LvlExp="Intermediate"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faCss} size="xl" />}
							languages="CSS"
							LvlExp="Intermediate"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faSass} size="xl" />}
							languages="SASS"
							LvlExp="Intermediate"
						/>

						<SkillProps
							verifiedIcon={
								<svg
									className="w-[34px] h-[34px] "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
								</svg>
							}
							languages="Tailwindcss"
							LvlExp="Intermediate"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faJs} size="xl" />}
							languages="JavaScript"
							LvlExp="Basic"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faReact} size="xl" />}
							languages="React.Js"
							LvlExp="Basic"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faNode} size="xl" />}
							languages="Node.Js"
							LvlExp="Basic"
						/>

						<SkillProps
							verifiedIcon={<FontAwesomeIcon icon={faGithub} size="xl" />}
							languages="Github"
							LvlExp="Basic"
						/>

						<SkillProps
							verifiedIcon={
								<svg
									className="w-[34px] h-[34px]"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="m20.7011 10.1255-.0253-.0672-2.4501-6.63953c-.0498-.13013-.1381-.24053-.2521-.31534-.1141-.07354-.2472-.10896-.3812-.10147-.1341.00748-.2628.05751-.3686.14332-.1047.08828-.1806.2079-.2175.34259l-1.6543 5.2556H8.65334l-1.65429-5.2556c-.03588-.13542-.11197-.25564-.21745-.34356-.10584-.08582-.23449-.13584-.36857-.14333-.13409-.00748-.26716.02794-.38125.10148-.11376.07511-.20195.18541-.25213.31534l-2.45472 6.6367-.02437.0671c-.35269.9569-.39623 2.007-.12404 2.9918.27219.9849.84535 1.8511 1.63305 2.4682l.00844.0068.02249.0166 3.73223 2.9022 1.84647 1.4512 1.1247.8817c.1316.1037.2922.1599.4574.1599.1652 0 .3258-.0562.4574-.1599l1.1247-.8817 1.8464-1.4512 3.7548-2.9198.0093-.0077c.786-.6172 1.3578-1.4826 1.6296-2.4661.2717-.9835.2288-2.0321-.1224-2.9881Z"
									/>
								</svg>
							}
							languages="Git-Version-Control"
							LvlExp="Basic"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
