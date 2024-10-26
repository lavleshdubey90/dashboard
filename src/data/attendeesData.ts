export interface Attendee {
    name: string;
    designation: string;
    email: string;
    company: string;
    mobile: string;
    role: 'speaker' | 'delegate' | 'sponsor' | 'moderator';
    checkedIn: 'yes' | 'no';
}

export const attendees: Attendee[] = [
    { name: "Alice Johnson", designation: "CEO", email: "alice.johnson@example.com", company: "Tech Innovations", mobile: "123-456-7890", role: "speaker", checkedIn: "yes" },
    { name: "Bob Smith", designation: "Marketing Manager", email: "bob.smith@example.com", company: "Creative Agency", mobile: "123-456-7891", role: "delegate", checkedIn: "no" },
    { name: "Charlie Brown", designation: "CTO", email: "charlie.brown@example.com", company: "Future Tech", mobile: "123-456-7892", role: "speaker", checkedIn: "yes" },
    { name: "David Wilson", designation: "Sales Lead", email: "david.wilson@example.com", company: "Sales Corp", mobile: "123-456-7893", role: "delegate", checkedIn: "yes" },
    { name: "Eva Green", designation: "Product Manager", email: "eva.green@example.com", company: "Innovate Solutions", mobile: "123-456-7894", role: "moderator", checkedIn: "no" },
    { name: "Frank White", designation: "HR Manager", email: "frank.white@example.com", company: "People First", mobile: "123-456-7895", role: "sponsor", checkedIn: "yes" },
    { name: "Grace Hall", designation: "Lead Designer", email: "grace.hall@example.com", company: "Design Hub", mobile: "123-456-7896", role: "speaker", checkedIn: "no" },
    { name: "Henry Adams", designation: "Business Analyst", email: "henry.adams@example.com", company: "Data Insights", mobile: "123-456-7897", role: "delegate", checkedIn: "yes" },
    { name: "Ivy Taylor", designation: "CTO", email: "ivy.taylor@example.com", company: "Tech Giants", mobile: "123-456-7898", role: "moderator", checkedIn: "no" },
    { name: "Jack Robinson", designation: "Event Coordinator", email: "jack.robinson@example.com", company: "Event Masters", mobile: "123-456-7899", role: "sponsor", checkedIn: "yes" },
    { name: "Kathy Parker", designation: "Marketing Director", email: "kathy.parker@example.com", company: "Brand Builders", mobile: "123-456-7800", role: "speaker", checkedIn: "no" },
    { name: "Liam Jones", designation: "Operations Manager", email: "liam.jones@example.com", company: "Efficiency Experts", mobile: "123-456-7801", role: "delegate", checkedIn: "yes" },
    { name: "Mia King", designation: "Software Engineer", email: "mia.king@example.com", company: "Code Crafters", mobile: "123-456-7802", role: "speaker", checkedIn: "no" },
    { name: "Nate Lee", designation: "Customer Success Manager", email: "nate.lee@example.com", company: "Client First", mobile: "123-456-7803", role: "delegate", checkedIn: "yes" },
    { name: "Olivia Scott", designation: "Financial Analyst", email: "olivia.scott@example.com", company: "Money Matters", mobile: "123-456-7804", role: "moderator", checkedIn: "no" },
    { name: "Peter Turner", designation: "Product Owner", email: "peter.turner@example.com", company: "Innovate Labs", mobile: "123-456-7805", role: "sponsor", checkedIn: "yes" },
    { name: "Quinn Murphy", designation: "Content Strategist", email: "quinn.murphy@example.com", company: "Content Creators", mobile: "123-456-7806", role: "speaker", checkedIn: "no" },
    { name: "Rachel Young", designation: "Data Scientist", email: "rachel.young@example.com", company: "Analytics Inc.", mobile: "123-456-7807", role: "delegate", checkedIn: "yes" },
    { name: "Steve Martinez", designation: "Web Developer", email: "steve.martinez@example.com", company: "Web Wonders", mobile: "123-456-7808", role: "moderator", checkedIn: "no" },
    { name: "Tina Evans", designation: "UX Designer", email: "tina.evans@example.com", company: "User Focus", mobile: "123-456-7809", role: "sponsor", checkedIn: "yes" },
    { name: "Uma Price", designation: "Social Media Manager", email: "uma.price@example.com", company: "Social Stars", mobile: "123-456-7810", role: "speaker", checkedIn: "no" },
    { name: "Victor Harris", designation: "SEO Specialist", email: "victor.harris@example.com", company: "Search Gurus", mobile: "123-456-7811", role: "delegate", checkedIn: "yes" },
    { name: "Wendy Clark", designation: "Legal Advisor", email: "wendy.clark@example.com", company: "Law Firm", mobile: "123-456-7812", role: "moderator", checkedIn: "no" },
    { name: "Xander Brooks", designation: "IT Support", email: "xander.brooks@example.com", company: "Tech Solutions", mobile: "123-456-7813", role: "sponsor", checkedIn: "yes" },
    { name: "Yara Rivera", designation: "Business Developer", email: "yara.rivera@example.com", company: "Growth Partners", mobile: "123-456-7814", role: "speaker", checkedIn: "no" },
    { name: "Zane Kim", designation: "Account Manager", email: "zane.kim@example.com", company: "Client Relations", mobile: "123-456-7815", role: "delegate", checkedIn: "yes" },
    { name: "Amy Long", designation: "Sales Executive", email: "amy.long@example.com", company: "Sales Pros", mobile: "123-456-7816", role: "moderator", checkedIn: "no" },
    { name: "Brian James", designation: "Technical Writer", email: "brian.james@example.com", company: "Writing Works", mobile: "123-456-7817", role: "sponsor", checkedIn: "yes" },
    { name: "Catherine Hill", designation: "Graphic Designer", email: "catherine.hill@example.com", company: "Visuals Co", mobile: "123-456-7818", role: "speaker", checkedIn: "no" },
    { name: "Derek Scott", designation: "Project Manager", email: "derek.scott@example.com", company: "Project Solutions", mobile: "123-456-7819", role: "delegate", checkedIn: "yes" },
    { name: "Eva Lewis", designation: "Research Analyst", email: "eva.lewis@example.com", company: "Insight Analytics", mobile: "123-456-7820", role: "moderator", checkedIn: "no" },
    { name: "Felix Ramirez", designation: "Web Designer", email: "felix.ramirez@example.com", company: "Design Innovations", mobile: "123-456-7821", role: "sponsor", checkedIn: "yes" },
    { name: "Grace Walker", designation: "Event Planner", email: "grace.walker@example.com", company: "Event Organizers", mobile: "123-456-7822", role: "speaker", checkedIn: "no" },
    { name: "Hugo Martinez", designation: "Customer Support", email: "hugo.martinez@example.com", company: "Help Desk", mobile: "123-456-7823", role: "delegate", checkedIn: "yes" },
    { name: "Iris Adams", designation: "Finance Manager", email: "iris.adams@example.com", company: "Finance Corp", mobile: "123-456-7824", role: "moderator", checkedIn: "no" },
    { name: "James Moore", designation: "Operations Director", email: "james.moore@example.com", company: "Operations Hub", mobile: "123-456-7825", role: "sponsor", checkedIn: "yes" },
    { name: "Kara Nelson", designation: "Marketing Executive", email: "kara.nelson@example.com", company: "Market Leaders", mobile: "123-456-7826", role: "speaker", checkedIn: "no" },
    { name: "Liam Johnson", designation: "Data Analyst", email: "liam.johnson@example.com", company: "Data Insights", mobile: "123-456-7827", role: "delegate", checkedIn: "yes" },
    { name: "Megan Perez", designation: "Legal Assistant", email: "megan.perez@example.com", company: "Legal Experts", mobile: "123-456-7828", role: "moderator", checkedIn: "no" },
    { name: "Noah Cooper", designation: "Business Consultant", email: "noah.cooper@example.com", company: "Consulting Group", mobile: "123-456-7829", role: "sponsor", checkedIn: "yes" },
    { name: "Olive Rivera", designation: "Sales Manager", email: "olive.rivera@example.com", company: "Sales Team", mobile: "123-456-7830", role: "speaker", checkedIn: "no" },
    { name: "Paul Young", designation: "Database Administrator", email: "paul.young@example.com", company: "Data Management", mobile: "123-456-7831", role: "delegate", checkedIn: "yes" },
    { name: "Quinn Carter", designation: "UX Researcher", email: "quinn.carter@example.com", company: "User Experience", mobile: "123-456-7832", role: "moderator", checkedIn: "no" },
    { name: "Rita Edwards", designation: "Event Specialist", email: "rita.edwards@example.com", company: "Events R Us", mobile: "123-456-7833", role: "sponsor", checkedIn: "yes" },
    { name: "Sammy Fisher", designation: "Content Writer", email: "sammy.fisher@example.com", company: "Content Hub", mobile: "123-456-7834", role: "speaker", checkedIn: "no" },
    { name: "Tina Brooks", designation: "Customer Relationship Manager", email: "tina.brooks@example.com", company: "Customer Focus", mobile: "123-456-7835", role: "delegate", checkedIn: "yes" },
    { name: "Ursula Reed", designation: "IT Consultant", email: "ursula.reed@example.com", company: "Tech Solutions", mobile: "123-456-7836", role: "moderator", checkedIn: "no" },
    { name: "Vera Wright", designation: "Event Producer", email: "vera.wright@example.com", company: "Production House", mobile: "123-456-7837", role: "sponsor", checkedIn: "yes" },
    { name: "Walter Smith", designation: "Advertising Specialist", email: "walter.smith@example.com", company: "Ad Agency", mobile: "123-456-7838", role: "speaker", checkedIn: "no" },
    { name: "Xena Grant", designation: "Training Coordinator", email: "xena.grant@example.com", company: "Training Solutions", mobile: "123-456-7839", role: "delegate", checkedIn: "yes" },
    { name: "Yvonne Baker", designation: "Program Manager", email: "yvonne.baker@example.com", company: "Program Partners", mobile: "123-456-7840", role: "moderator", checkedIn: "no" },
    { name: "Zara Hunter", designation: "Compliance Officer", email: "zara.hunter@example.com", company: "Compliance Co", mobile: "123-456-7841", role: "sponsor", checkedIn: "yes" },
];