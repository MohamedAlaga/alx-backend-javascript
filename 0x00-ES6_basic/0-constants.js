export const taskFirst = () => 'I prefer const when I can.';

export function getLast() {
    return ' is okay';
}

export let taskNext = () =>{
    let combination = 'But sometimes let';
    return combination += getLast();};
