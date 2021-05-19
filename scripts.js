//Эта функция реализует вычислиение квадратного корня из заданного числа с заданной точностью
function calculate(number, accuracy) {
	let abs = Math.abs(number);
	let sqrt = Math.sqrt(abs);
	//округляем для заданной точности
	let result = sqrt.ToFixed(accuracy);

	if(number < 0) {
		result += "i";
	}
	return result;
}