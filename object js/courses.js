const aCourse = {
    code: "CSE121B",
    NAME: "Javascript Language",

    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instuctor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC ',
            enrolled: 28,
            days: 'TTh', 
            instructor: 'Sis A',
        },
    ],
};
// enrollStudent: function (sectionNum) {
//     // find the right section...Array.findIndex will work here
//     const sectionIndex = this.sections.findIndex(
//         (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//         this.sections[sectionIndex].enrolled++;
//         renderSections(this.sections);
//     }
// },

// dropStudent: function (sectionNum) {
//     // find the right section...Array.findIndex will work here
//     const sectionIndex = this.sections.findIndex(
//         (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//         this.sections[sectionIndex].enrolled--;
//         renderSections(this.sections);
//     }
// },
// };
changeEnrollment: function (sectionNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  }

function setCourseInfo(course) {
    const courseName = document.queryselector('#courseName');

    const courseCode = document.queryselector('#courseCode')

    courseName.textContent = course.name;

    courseCode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);