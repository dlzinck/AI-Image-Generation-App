import { surpriseMePrompts } from '../constants';

export function getRandomPropmpt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPropmpt(prompt);

    return randomPrompt;
}