// map()
var council = [

    { id: 2100, name: 'President Jacqueline' },
  
    { id: 2114, name: 'Vice-president James' },
  
    { id: 3016, name: 'House-captain Otis' },
  
    { id: 4818, name: 'Prefect Finneas' }
  
  ];

  const councilIds = council.map(obj => obj.id)
  console.log(councilIds)

  // 2. Reduce()
  var employees = [

    {
  
      id: 111,
  
      name: "Chelsea Foster",
  
      years: 7,
  
    },
  
    {
  
      id: 102,
  
      name: "Aggie Sparling",
  
      years: 13,
  
    },
  
    {
  
      id: 123,
  
      name: "Timmy Matthews",
  
      years: 23,
  
    },
  
    {
  
      id: 119,
  
      name: "Emmet Foster",
  
      years: 22,
  
    }
  
  ];
  const totalYears = employees.reduce((accumulator,emp)=>{
    return accumulator+emp.years;
  },0)
  console.log(totalYears)

  // filters()
  var members =
[
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  {
    id: 66,
    name: "Emmet Foster",
    workExp: 22,
    deptExp: 9,
    isPermanent: true,
  },
  {
    id: 89,
    name: "Brent Dolan",
    workExp: 16,
    deptExp: 12,
    isPermanent: true,
  },
];

const isPermanentMembers = members.filter(member => member.isPermanent == true)
console.log(isPermanentMembers)