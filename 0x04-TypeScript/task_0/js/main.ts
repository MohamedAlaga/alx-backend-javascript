interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const s1: Student = {
    firstName: "Mohamed",
    lastName: "alaga",
    age: 10,
    location: "egypt"
};
const s2: Student = {
    firstName: "momo",
    lastName: "alaa",
    age: 12,
    location: "canada"
};

const studentsList = [s1, s2];

const data = document.createElement("table");
const tableHeaders = document.createElement("tr");
const header = document.createElement("th");
header.textContent = "First name";
tableHeaders.appendChild(header);
const header2 = document.createElement("th");
header2.textContent = "Location";
tableHeaders.appendChild(header2);
data.appendChild(tableHeaders);
studentsList.forEach(element => {
    const content = document.createElement("tr");
    const fName = document.createElement("td");
    fName.textContent = element.firstName;
    content.appendChild(fName);
    const location = document.createElement("td");
    location.textContent = element.location;
    content.appendChild(location);
    data.appendChild(content);
});

const body = document.body.appendChild(data);
