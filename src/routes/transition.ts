import gsap from 'gsap';
import { wrapNewLines } from '$lib/js/wrapNewLines';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const enter = (node: any, { duration = 0.5 }) => {
	gsap.registerPlugin(ScrollTrigger);

	const timeline = gsap.timeline({ defaults: { duration } });

	timeline.from(node, {
		opacity: 1,
		x: '-100vw',
		ease: 'power2.out'
	});

	return {
		delay: 0,
		duration: timeline.duration() * 1000,
		css: () => ``
	};
};

export const exit = (node: any, { duration = 0.5 }) => {
	gsap.registerPlugin(ScrollTrigger);

	// if ((pathOut = '/')) {
	// 	console.log('declenchement de sortie pour la page HOME');
	// }

	const timeline = gsap.timeline({ defaults: { duration } });
	timeline.to(node, {
		opacity: 1,
		x: '-100vw',
		ease: 'power2.out'
	});

	return {
		delay: 0,
		duration: timeline.duration() * 1000,
		css: () => ``
	};
};
