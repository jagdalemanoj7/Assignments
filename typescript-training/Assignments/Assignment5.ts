/* Employee Table 
S.No    Name           Base      Salary Experience    Year-End Rating 
                                    (years)             (out of 5)
-----------------------------------------------------------------------
1   Alice Johnson    75000.0          5.1                  4.2
2   Bob Smith        68000.0          3.2                  3.8
3   Carol Davis      82000.0          7.1                  4.5
4   David Brown      90000.0         10.2                  2.5
5   Eva Green        60000.0          2.4                  3.5
------------------------------------------------------------------------
Hike
Rating          % of base Salary         Bonus
                as variable pay
> =4.0              15.0                 1500
>=3 && < 4          10.0                 1200
< 3.0               3.0                   300
-------------------------------------------------------------------------
Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary . 
-------------------------------------------------------------------------*/

const empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000.0, 5.1, 4.2]);
empData.set("Bob Smith", [68000.0, 3.2, 3.8]);
empData.set("Carol Davis", [82000.0, 7.1, 4.5]);
empData.set("David Brown", [90000.0, 10.2, 2.5]);
empData.set("Eva Green", [60000.0, 2.4, 3.5]);

const hikeMap: Map<string, number> = new Map();

for (const key of empData.keys()) {
  const data = empData.get(key)!;
  const baseSalary = data[0];
  const experience = data[1];
  const rating = data[2];

  const hikePercentage = calculateHike(baseSalary, experience, rating)

  hikeMap.set(key, hikePercentage)
}

console.log('Hike Percentage for each employee:')
console.log(hikeMap)

function calculateHike(
  baseSalary: number,
  experience: number,
  rating: number,
): number {
  let variablePayPercentage = 0;
  let bonus = 0;
  let reward = 0;

  if (rating >= 4.0) {
    variablePayPercentage = 15.0;
    bonus = 1500;
  } else if (rating >= 3 && rating < 4.0) {
    variablePayPercentage = 10.0;
    bonus = 1200;
  } else {
    variablePayPercentage = 3.0;
    bonus = 300;
  }

  if (experience >= 5) reward = 5000;

  const hike = baseSalary * variablePayPercentage + bonus + reward;
  return (hike / baseSalary) * 100;
}
