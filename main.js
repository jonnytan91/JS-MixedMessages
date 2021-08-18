const noun1 = ['Jimmy', 'Jack', 'Lauren', 'Aislinn', 'John', 'Fred', 'Linda']
const verb = ['hates', 'loves', 'practices', 'entangles', 'acts', 'judges', 'endures']
const noun2 = ['cheese', 'eggs', 'bacon', 'sausage', 'crossaints', 'coffee', 'more bacon']

const randNoun1 = () => {
	return Math.floor(Math.random()*noun1.length)
}
const randVerb = () => {
	return Math.floor(Math.random()*verb.length)
}
const randNoun2 = () => {
	return Math.floor(Math.random()*noun2.length)
}
console.log(noun1[randNoun1()],verb[randVerb()],noun2[randNoun2()]  )