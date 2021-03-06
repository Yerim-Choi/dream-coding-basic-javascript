// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  // join
  // 배열에 있는 모든 item을 string으로 변환
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // split
  // separtor limit
  // 구분자를 통해 배열에 하나의 값으로 생성
  const result = fruits.split(",", 4);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // reverse
  // 원본 배열도 순서를 반전으로 변형
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice
  // 배열의 변경을 원하는 인덱스와 제거할 요소의 수
  // 원본 배열을 변형
  // const result = array.splice(2, 3);
  // console.log(result); // [3, 4, 5]
  // console.log(array); // [1, 2]

  // slice
  // 원본 배열은 그대로 두고 새로운 배열을 생성
  const result = array.slice(2, 5);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88)
];

// Q5. find a student with the score 90
{
  // find
  // 첫번째로 true에 해당하는 값을 return
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter
  // 조건에 맞는 데이터만 추출
  const result = students.filter((student) => {
    return student.enrolled === true;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some
  // 조건에 맞는지 boolean 반환
  // const result = students.some((student) => student.score < 50);
  // console.log(result);

  // every
  // 모든 배열의 데이터가 조건에 맞는지 boolean 반환
  const result = students.every((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  //reduce
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 오름차순
    // .sort((a, b) => b - a) // 내림차순
    .join();
  console.log(result);
}