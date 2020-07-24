export enum Difficulty {
	EASY = "EASY",
	MEDIUM = "MEDUIM",
	HARD = "HARD",
}

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {

    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await (await fetch(endPoint)).json();
    console.log(data)
};
