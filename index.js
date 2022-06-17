const questions = [
    "O que aprendir hoje",
    "O que deixou aborrecido? e o que eu poderia fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas ajudei hoje",

]
const ask = (index = 0) => {
    process.stdout.write(questions[index] + " > ")
}
ask()
const answers =[]
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)

  }else{
    console.log(answers)
    process.exit()
  }

  })

  process.on("exit", () => {
    console.log(`
    Bakana João!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborrecidoe você poderia melhorar foi:
    ${answers[1]}

    O quendeixou feliz hoje:
    ${answers[2]}
    Você ajudou ${[3]} pessoas hoje!!

    volte amanhã para novas reflexões!!
    `)
  })


