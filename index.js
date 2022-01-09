// Your code here
function createEmployeeRecord(arr){
    let empObj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: 1,
        timeInEvents: [],
        timeOutEvents: []
    };

    return empObj
};


function createEmployeeRecords(arr){
    let empArr = {}

    for (let i of arr){
        let employeeRecord = createEmployeeRecord(arr[0])
    }

    return empArr;
};


let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]