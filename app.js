// Student Records Data Processor
// Pure JavaScript - no HTML, CSS, Node.js, or external libraries

const students = [
  {
    "id": 1,
    "name": "Aira Santos",
    "year": 1,
    "course": "BSIT",
    "grades": [
      88,
      90,
      87
    ],
    "enrolled": true
  },
  {
    "id": 2,
    "name": "Ben Cruz",
    "year": 2,
    "course": "BSIT",
    "grades": [
      91,
      89,
      93
    ],
    "enrolled": true
  },
  {
    "id": 3,
    "name": "Carla Reyes",
    "year": 3,
    "course": "BSCS",
    "grades": [
      95,
      94,
      96
    ],
    "enrolled": true
  },
  {
    "id": 4,
    "name": "Daniel Garcia",
    "year": 4,
    "course": "BSCS",
    "grades": [
      90,
      92,
      91
    ],
    "enrolled": false
  },
  {
    "id": 5,
    "name": "Ella Mendoza",
    "year": 1,
    "course": "BSBA",
    "grades": [
      85,
      88,
      86
    ],
    "enrolled": true
  },
  {
    "id": 6,
    "name": "Francis Lim",
    "year": 2,
    "course": "BSBA",
    "grades": [
      89,
      87,
      90
    ],
    "enrolled": true
  },
  {
    "id": 7,
    "name": "Grace Aquino",
    "year": 3,
    "course": "BSED",
    "grades": [
      92,
      94,
      93
    ],
    "enrolled": true
  },
  {
    "id": 8,
    "name": "Henry Torres",
    "year": 4,
    "course": "BSED",
    "grades": [
      86,
      89,
      88
    ],
    "enrolled": false
  },
  {
    "id": 9,
    "name": "Ivy Navarro",
    "year": 1,
    "course": "BSIT",
    "grades": [
      94,
      91,
      95
    ],
    "enrolled": true
  },
  {
    "id": 10,
    "name": "John Flores",
    "year": 2,
    "course": "BSCS",
    "grades": [
      87,
      90,
      88
    ],
    "enrolled": true
  },
  {
    "id": 11,
    "name": "Karen Dela Cruz",
    "year": 3,
    "course": "BSBA",
    "grades": [
      91,
      93,
      90
    ],
    "enrolled": true
  },
  {
    "id": 12,
    "name": "Leo Ramos",
    "year": 4,
    "course": "BSIT",
    "grades": [
      84,
      86,
      85
    ],
    "enrolled": false
  },
  {
    "id": 13,
    "name": "Maria Villanueva",
    "year": 1,
    "course": "BSED",
    "grades": [
      89,
      92,
      90
    ],
    "enrolled": true
  },
  {
    "id": 14,
    "name": "Nathan Bautista",
    "year": 2,
    "course": "BSCS",
    "grades": [
      96,
      95,
      94
    ],
    "enrolled": true
  },
  {
    "id": 15,
    "name": "Olivia Castillo",
    "year": 3,
    "course": "BSIT",
    "grades": [
      90,
      91,
      92
    ],
    "enrolled": true
  },
  {
    "id": 16,
    "name": "Paolo Fernandez",
    "year": 4,
    "course": "BSBA",
    "grades": [
      88,
      86,
      89
    ],
    "enrolled": false
  },
  {
    "id": 17,
    "name": "Queenie Morales",
    "year": 1,
    "course": "BSCS",
    "grades": [
      93,
      92,
      94
    ],
    "enrolled": true
  },
  {
    "id": 18,
    "name": "Rafael Diaz",
    "year": 2,
    "course": "BSED",
    "grades": [
      85,
      87,
      86
    ],
    "enrolled": true
  },
  {
    "id": 19,
    "name": "Sophia Herrera",
    "year": 3,
    "course": "BSBA",
    "grades": [
      95,
      93,
      94
    ],
    "enrolled": true
  },
  {
    "id": 20,
    "name": "Thomas Aquino",
    "year": 4,
    "course": "BSIT",
    "grades": [
      89,
      90,
      88
    ],
    "enrolled": false
  },
  {
    "id": 21,
    "name": "Una Mercado",
    "year": 1,
    "course": "BSED",
    "grades": [
      91,
      89,
      92
    ],
    "enrolled": true
  },
  {
    "id": 22,
    "name": "Victor Salazar",
    "year": 2,
    "course": "BSBA",
    "grades": [
      86,
      88,
      87
    ],
    "enrolled": true
  },
  {
    "id": 23,
    "name": "Wendy Padilla",
    "year": 3,
    "course": "BSCS",
    "grades": [
      90,
      93,
      92
    ],
    "enrolled": true
  },
  {
    "id": 24,
    "name": "Xavier Tan",
    "year": 4,
    "course": "BSED",
    "grades": [
      94,
      91,
      93
    ],
    "enrolled": false
  },
  {
    "id": 25,
    "name": "Yvonne Chua",
    "year": 1,
    "course": "BSIT",
    "grades": [
      87,
      89,
      88
    ],
    "enrolled": true
  },
  {
    "id": 26,
    "name": "Zachary Ong",
    "year": 2,
    "course": "BSCS",
    "grades": [
      92,
      95,
      93
    ],
    "enrolled": true
  },
  {
    "id": 27,
    "name": "Angela Rivera",
    "year": 3,
    "course": "BSBA",
    "grades": [
      89,
      91,
      90
    ],
    "enrolled": true
  },
  {
    "id": 28,
    "name": "Brian Manalo",
    "year": 4,
    "course": "BSIT",
    "grades": [
      83,
      85,
      84
    ],
    "enrolled": false
  },
  {
    "id": 29,
    "name": "Chloe Santos",
    "year": 2,
    "course": "BSED",
    "grades": [
      96,
      94,
      95
    ],
    "enrolled": true
  },
  {
    "id": 30,
    "name": "David Kim",
    "year": 3,
    "course": "BSBA",
    "grades": [],
    "enrolled": false
  }
];

function validateStudents(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }
}

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades) || student.grades.length === 0) {
        return 0;
    }
    return student.grades.reduce((sum, grade) => sum + Number(grade), 0) / student.grades.length;
}

function getTopStudents(students, n) {
    validateStudents(students);
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("n must be a non-negative integer.");
    }

    return students
        .map(student => ({
            ...student,
            averageGrade: getAverageGrade(student)
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, n);
}

function groupByCourse(students) {
    validateStudents(students);

    return students.reduce((groups, student) => {
        const course = student.course || "Unknown";
        if (!groups[course]) {
            groups[course] = [];
        }
        groups[course].push({ ...student, grades: [...(student.grades || [])] });
        return groups;
    }, {});
}

function getEnrolledCount(students) {
    validateStudents(students);

    return {
        enrolled: students.filter(student => student.enrolled === true).length,
        notEnrolled: students.filter(student => student.enrolled === false).length
    };
}

function findStudent(students, name) {
    validateStudents(students);
    if (typeof name !== "string") {
        return null;
    }

    const searchName = name.trim().toLowerCase();
    return students.find(student =>
        typeof student.name === "string" &&
        student.name.toLowerCase() === searchName
    ) || null;
}

function getCourseAverages(students) {
    validateStudents(students);

    const grouped = students.reduce((courses, student) => {
        const course = student.course || "Unknown";
        if (!courses[course]) {
            courses[course] = [];
        }
        if (Array.isArray(student.grades)) {
            courses[course].push(...student.grades.map(Number));
        }
        return courses;
    }, {});

    return Object.entries(grouped)
        .map(([course, grades]) => ({
            course,
            averageGrade: grades.length
                ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length
                : 0
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade);
}

function exportSummary(students) {
    validateStudents(students);

    const averages = students.map(student => getAverageGrade(student));
    const overallAverage = averages.length
        ? averages.reduce((sum, average) => sum + average, 0) / averages.length
        : 0;

    const top = getTopStudents(students, 1);

    return {
        totalStudents: students.length,
        overallAverageGrade: Number(overallAverage.toFixed(2)),
        topPerformingStudent: top.length
            ? {
                id: top[0].id,
                name: top[0].name,
                averageGrade: Number(top[0].averageGrade.toFixed(2))
            }
            : null,
        breakdownByCourse: getCourseAverages(students)
    };
}

// Optional stretch goal: filter students by year level.
function filterByYear(students, year) {
    validateStudents(students);
    return students
        .filter(student => student.year === year)
        .map(student => ({ ...student, grades: [...(student.grades || [])] }));
}

// Optional stretch goal: sort students alphabetically without changing original data.
function sortByName(students) {
    validateStudents(students);
    return students
        .map(student => ({ ...student, grades: [...(student.grades || [])] }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

function main() {
    console.log("========================================");
    console.log("   STUDENT RECORDS DATA PROCESSOR");
    console.log("========================================");

    console.log("\nTOTAL STUDENTS");
    console.log(students.length);

    console.log("\nENROLLMENT COUNT");
    console.log(getEnrolledCount(students));

    console.log("\nTOP 5 STUDENTS");
    console.table(
        getTopStudents(students, 5).map(student => ({
            ID: student.id,
            Name: student.name,
            Course: student.course,
            Average: Number(student.averageGrade.toFixed(2))
        }))
    );

    console.log("\nAVERAGE GRADE BY COURSE");
    console.table(
        getCourseAverages(students).map(item => ({
            Course: item.course,
            "Average Grade": Number(item.averageGrade.toFixed(2))
        }))
    );

    console.log("\nGROUPED BY COURSE");
    console.log(groupByCourse(students));

    console.log("\nFIND STUDENT: \"Carla Reyes\"");
    console.log(findStudent(students, "carla reyes"));

    console.log("\nFIND STUDENT: \"Nobody\"");
    console.log(findStudent(students, "Nobody"));

    console.log("\nEXPORT SUMMARY");
    console.log(exportSummary(students));

    console.log("\nOPTIONAL: FILTER BY YEAR 2");
    console.table(filterByYear(students, 2).map(student => ({
        ID: student.id,
        Name: student.name,
        Course: student.course
    })));

    console.log("\nOPTIONAL: SORT BY NAME");
    console.table(sortByName(students).map(student => ({
        ID: student.id,
        Name: student.name
    })));
}

main();
