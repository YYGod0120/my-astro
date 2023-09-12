import type {
  TransitionAnimationPair,
  TransitionDirectionalAnimations,
} from "astro";

const distant = {
  "200px": "cardSlideToRight",
  "300px": "cardSlideToRight1",
  "400px": "cardSlideToRight2",
  "500px": "cardSlideToRight3",
};
export function anmi(
  during: number,
  dis: string
): TransitionDirectionalAnimations {
  const transitionAnimationPair: TransitionAnimationPair = {
    old: {
      name: distant[dis],
      duration: `${during}ms`,
      easing: "linear",
    },
    new: {
      name: distant[dis],
      duration: `${during}ms`,
      easing: "linear",
    },
  };
  const anmi: TransitionDirectionalAnimations = {
    forwards: transitionAnimationPair,
    backwards: transitionAnimationPair,
  };
  return anmi;
}
