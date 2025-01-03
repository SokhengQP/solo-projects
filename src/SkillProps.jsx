import PropTypes from 'prop-types';


export default function SkillProps({ verifiedIcon, languages, LvlExp }) {
	return (
		<>
			<article className="flex items-center justify-center gap-6 p-4 rounded-2xl">
				<div className="py-4 "> {verifiedIcon} </div>
				<div className="leading-8">
					<div className="text-nowrap">{languages}</div>
					<div>{LvlExp}</div>
				</div>
			</article>
		</>
	);
}

SkillProps.propTypes = {
	verifiedIcon: PropTypes.object,
	languages: PropTypes.string.isRequired,
	LvlExp: PropTypes.string.isRequired,
};