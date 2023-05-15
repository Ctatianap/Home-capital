// Debemos calcular la nómina (salary neto y deductionses) de un empleado, para eso
// debes solicitarle que ingrese su salary en pesos colombianos, luego debes realizar los
// siguientes cálculos a partir de un salario base que es COP 950.000
// ● Se le descuenta el 8% de su salary
// ● Si gana por encima del salario base y hasta COP 2’000.000 se le descuenta
// también el 1.5% del adicional, pero si gana por encima de COP 2’000.000 se
// descuenta el 2% del adicional
// Después de calcular su nómina, debes imprimir en pantalla su salario antes y después
// de las deductionses y el total que se le deducirá.

function payrollCalculator(salary) {
  const base = 950000;
  const aboveBase = 2000000;
  let deductions = salary * 0.08;
  let bonus = salary - base;

  if (bonus > 0) {
    if (salary <= aboveBase) {
      deductions += bonus * 0.015;
    } else {
      deductions += bonus * 0.02;
    }
  }

  const salaryNeto = salary - deductions;
  const totalDeductions = deductions.toFixed(0);

  return `Tu salario es de: ${salary.toLocaleString()} y el total deducido es: ${totalDeductions} \n
          salario neto: ${salaryNeto.toLocaleString()}`;
}

const salary = parseInt(prompt('Ingresa tu salario: '));
console.log(payrollCalculator(salary));
