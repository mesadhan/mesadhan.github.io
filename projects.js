let projects = [

    {
        'title': 'Online Admission System for Daffodil International University',
        'description': 'Applicants are using this system to apply in Daffodil International University on Any subjects and pay their admission fee. Admin offices are used for reporting, verification and SMS purposes.',
        'role': 'Associate Frontend & Backend Developer',
        'demoLinks': ['http://admission.daffodilvarsity.edu.bd', 'http://admission.daffodilvarsity.edu.bd',],
        'tools': 'Angular5, Angular Material, Git, Flex-Layout, Java, Spring Boot, REST APIs etc.'
    },
    {
        'title': 'Online Admission System for Daffodil International University',
        'description': 'Applicants are using this system to apply in Daffodil International University on Any subjects and pay their admission fee. Admin offices are used for reporting, verification and SMS purposes.',
        'role': 'Associate Frontend & Backend Developer',
        'demoLinks': ['http://admission.daffodilvarsity.edu.bd'],
        'tools': 'Angular5, Angular Material, Git, Flex-Layout, Java, Spring Boot, REST APIs etc.'
    },

];


let projectSection = document.getElementById('projectSection');

for (let project of projects) {


    let linkHtml = '';
    for (let i = 0; i < project.demoLinks.length; i++) {
        linkHtml += ` <a target="_blank" href="${project.demoLinks[i]}">[Link_${i + 1}] </a> `;
    }


    projectSection.innerHTML += `

    <div style="border: 1px solid #bebebe; padding: 5px; margin-top: 5px;">
        <h3><b> Project Title: </b> ${project.title} </h3>
        <p><strong> Description: </strong> ${project.description}</p>
        <p><strong> Role: </strong> ${project.role}</p>
        <p><strong> Demo Link: </strong> ${linkHtml} </p>
        <p><strong> Tools: </strong> ${project.tools}</p>
    </div>
    
`;
}
