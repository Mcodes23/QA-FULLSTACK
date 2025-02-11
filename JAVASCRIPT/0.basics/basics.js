const myGrade1 = (mark) => {
    if (mark < 0 || mark > 100) return 'invalid input';
    return mark === 100 ? 'A' :
           mark >= 70 ? 'B' :
           mark >= 50 ? 'C' :
           mark >= 30 ? 'D' :
           'F';
}

console.log(myGrade1(657))