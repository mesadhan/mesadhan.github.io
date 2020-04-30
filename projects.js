let projects = [
    {
        'title': 'Offer Management Kit',
        'description': 'It\'s a marketing tool. It\'s an end to end solution for dynamic offer management. Through privilege & policies, it able to create offer campaigns. The system easily track traffics and their interactions base on analities. The main goal is to facilitate paid offers, to the groups of traffic. It\'s has a smart control panel so offer owner able to enable and disable the client access, also limit offer access.',
        'role': 'Developer & Designer',
        'type': 'private',
        'message': 'Paid Product',
        'demoLinks': [],
        'tools': 'Javascript, NodeJS, PostgreSQL, Git, RESTful API, JSON, Linux, Bash, Shell, Nginx, Firewall, HTML, CSS'
    },
    {
        'title': 'Email Marketing Kit',
        'description': 'It\'s basically an email marketing tool, which is basically able to automate response and replies. This tool is specially made for local clients so that different types of campaigns provider can promote their products, show their analytics and more. The main goal is to make life easier through automation so that tool can of customer basic request.',
        'role': 'Developer & Designer',
        'type': 'private',
        'message': 'Paid Product',
        'demoLinks': [],
        'tools': 'Javascript, NodeJS, PostgreSQL, Git, RESTful API, JSON, Linux, Bash, Shell, Nginx, SMTP, IMAP, HTML, CSS'
    },
    {
        'title': 'পকেটে বাংলাদেশ - Bangladesh In Pocket',
        'description': 'Its basically contains Bangladesh 68 districts Infomation. Its helps those people who are love to travel, they can get information about popular spots. Base On Web Scrapping Process Data then Store it as resource files after that Parse and process View will be Populated. This app can work offline and user-friendly. If someone new at any place they can get information about that place and history',
        'role': 'Developer & Designer',
        'demoLinks': ['https://play.google.com/store/apps/details?id=com.inktechs.bangladesh_in_pocket'],
        'tools': 'PHP, Laravel, Web Scraping, Git, RESTful API, Android, Java, SQLite Database, JSON, Volley, Services, GSON, Picasso, Material Design,JSON, XML.'
    },
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
    {
        'title': 'Cricket Zone - Live Score, Ranking & Sports News',
        'description': 'Cricket Zone is the fastest app to give you Live Cricket Score, Get Live cricket scores from around the world just in a single tap, updated in real-time, ball-by-ball coverage. Ongoing series, past matches, live matches, Cricketer ranking, news and fixture details in one place, Enjoy with real-time updates, rich content,fast and much more',
        'role': 'Developer & Designer',
        'demoLinks': ['https://play.google.com/store/apps/details?id=pixonlab.com.cricketzone'],
        'tools': 'Web Scraping, Git, RESTful API, Android, Java, SQLite Database, JSON, Volley, Services, GSON, Picasso, Material Design, JSON, XML, CrickBuzz API'
    },
    {
        'title': 'QR Barcode Reader',
        'description': 'QR Barcode Reader is the fastest QR code reader / barcode scanner app out there. QR Code Reader is an essential app for every Android device. QR codes and barcodes are everywhere; you can now scan and read them with the use of QR Code Reader.',
        'role': 'Developer & Designer',
        'demoLinks': ['https://play.google.com/store/apps/details?id=pixonlab.com.qrreader'],
        'tools': 'Android, Java, JSON, Services JSON, XML, AddMob Intregration, ZXing library'
    }

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
