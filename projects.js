let projects = [
    {
        'title': 'KenarHat [E-Commerce]',
        'description': 'The online marketing market of Jessore\'s traditional date Gur-Patali market is \'khanharat\'. The goal of khanharhat is to manufacture and market pure wheat and gourd production under the intensive care of the trees. Kennaharhat is a social initiative. A portion of its income will be spent on children\'s education.',
        'role': 'Developer & Designer',
        'demoLinks': ['http://www.kenarhat.com'],
        'tools': 'PHP, Laravel, Passport, Caching, Notification, MySQL, Composer, and Git, Html, CSS, Bootstrap 4, Bulk Api Integration, JavaScript, Angular.js, AJAX, REST and JSON.'
    },
    {
        'title': 'School Management System with Mobile Application',
        'description': 'This application fully customizable for School management. System Features are Student Admission able, Subject Assignable, Exam Creatable, Automatic ID card generate able, Teachers and Students Attendance Take able through manually or Bio-Metric fingerprint Device. Teacher can assign students Exam marks though this system. Mark sheet will be automatically generatable. System intergraded with bull SMS APIs so when student punch on biometric device it able to send SMS to their guardian. Admin users also generate students repots. This application continuously developing base on the institute requirements.',
        'role': 'Developer & Designer',
        'demoLinks': ['http://soft.inktechs.com'],
        'tools': 'PHP, Laravel, Passport, OAuth2, Caching, Notification, MySQL,Composer, and Git, Html, CSS, Bootstrap 3, JavaScript, Angular.js, AJAX, REST and JSON, Bulk Api Integration, Bio-metric Device Inflation'
    },
    {
        'title': 'Online Admission System for Daffodil International University',
        'description': 'Applicants are using this system to apply in Daffodil International University on Any subjects and pay their admission fee. Admin offices are used for reporting, verification and SMS purposes.',
        'role': 'Associate Frontend & Backend Developer',
        'demoLinks': ['http://admission.daffodilvarsity.edu.bd', 'http://admission.daffodilvarsity.edu.bd',],
        'tools': 'Angular5, Angular Material, Git, Flex-Layout, Java, Spring Boot, REST APIs etc.'
    },
    {
        'title': 'Grade Sheet Approval for Daffodil International University',
        'description': 'Multiple types of Grade sheet Approval setup manageable for admin offices. Base on given setup admin officer approve submitted grade sheet.',
        'role': 'Associate Frontend & Backend Developer',
        'demoLinks': ['http://gradesheetapprove.daffodilvarsity.edu.bd'],
        'tools': 'Angular5, Angular Material, Git, Flex-Layout, Java, Spring Boot, REST APIs etc.'
    },
    {
        'title': 'Who Is Caller',
        'description': 'WhoIsCaller: Caller ID & Call Blocker is the best app for identifying unknown callers and number blocking functionality. It is the simple and most accurate Caller ID app can help you instantly identify the incoming calls not in your contact list.\n' + 'Features are Tracks the name, Operator of incoming number and location of the caller at the time of incoming call, Add numbers to blacklist, Complete information of any mobile number with its Service provider, Easy Call Logs, Easily you can detect received call, missed call, rejected call, Call drop call, Caller Profile with details, Search any Number from our huge contact list, Smart Contact list.',
        'role': 'Developer and Designer',
        'demoLinks': ['https://play.google.com/store/apps/details?id=com.pixonlab.whoiscaller'],
        'tools': 'Laravel, PHP, MySQL, Git, RESTful API, Android, Broadcast receiver, service, SQLite Database, Android Telephony Manager, JSON, Volley, Material Design, Telephony Manager, XML.'
    },
    {
        'title': 'Last Minute News',
        'description': 'Newspaper application. This application develops focused on Bangladeshi Users but Country base categories available. Features Read the best news from national & regional newspapers & websites, Browse by categories- a personalized home screen with easy access to your favorite topics. Add Categories to your news home, Read, like, and share, share news over Hangout, SMS, WhatsApp, Email, Facebook or any other app you have installed, Keep updated with the latest news from different popular newspapers. Read news offline, Push Notification.',
        'role': 'Developer',
        'demoLinks': ['https://play.google.com/store/apps/details?id=news.pixonlab.com'],
        'tools': 'PHP, Lumen, MySQL, Web Scraping, Git, RESTful API, Android, Java, SQLite Database, JSON, Volley, AdMob Integrations, Services, GSON, Picasso, Material Design, XML.'
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
