function solution(a, c) {
    var answer = [];
    
    for (var i = 0;i<c.length;i++){
        var a1=a.slice(c[i][0]-1,c[i][1]);
        a1.sort();
        answer.push(a1[c[i][2]-1]);
    }
    return answer;
}

var num = [1, 5, 2, 6, 3, 7, 4];
var arr = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(num,arr)); 