import event1 from "/event1.jpg";
import event2 from "/event2.jpg";
import event3 from "/event3.jpg";
import event4 from "/event4.jpg";
import event5 from "/event5.jpg";
import event6 from "/event6.jpg";

export interface Event {
    id: number;
    image: string;
    title: string;
    location: string;
    date: string;
    time: string;
    venue: string;
    totalRegistrations: number;
    totalAttendees: number;
    checkedInSpeakers: number;
    checkedInSponsors: number;
    pendingDelegates: number;
}

export const allEvents: Event[] = [
    {
        id: 1,
        image: event1,
        title: "Community Art Exhibition",
        location: "Old Town, USA",
        date: "2023-10-01",
        time: "10:00 AM - 5:00 PM",
        venue: "Art Center Gallery",
        totalRegistrations: 150,
        totalAttendees: 120,
        checkedInSpeakers: 5,
        checkedInSponsors: 3,
        pendingDelegates: 10,
    },
    {
        id: 2,
        image: event2,
        title: "Downtown Music Festival",
        location: "Downtown, USA",
        date: "2023-11-15",
        time: "12:00 PM - 10:00 PM",
        venue: "City Park Stage",
        totalRegistrations: 300,
        totalAttendees: 250,
        checkedInSpeakers: 10,
        checkedInSponsors: 5,
        pendingDelegates: 20,
    },
    {
        id: 3,
        image: event3,
        title: "Tech Innovation Summit",
        location: "Seattle, WA",
        date: "2023-09-25",
        time: "9:00 AM - 6:00 PM",
        venue: "Convention Center",
        totalRegistrations: 200,
        totalAttendees: 180,
        checkedInSpeakers: 8,
        checkedInSponsors: 4,
        pendingDelegates: 15,
    },
    {
        id: 4,
        image: event4,
        title: "Annual Charity Gala",
        location: "Boston, MA",
        date: "2023-08-10",
        time: "7:00 PM - 11:00 PM",
        venue: "Grand Hotel Ballroom",
        totalRegistrations: 100,
        totalAttendees: 90,
        checkedInSpeakers: 2,
        checkedInSponsors: 1,
        pendingDelegates: 5,
    },
    {
        id: 5,
        image: event5,
        title: "Food & Wine Festival",
        location: "Miami, FL",
        date: "2023-10-05",
        time: "2:00 PM - 8:00 PM",
        venue: "Miami Beach Convention Center",
        totalRegistrations: 250,
        totalAttendees: 220,
        checkedInSpeakers: 6,
        checkedInSponsors: 2,
        pendingDelegates: 30,
    },
    {
        id: 6,
        image: event6,
        title: "Fall Outdoor Concert",
        location: "Dallas, TX",
        date: "2024-10-30",
        time: "4:00 PM - 10:00 PM",
        venue: "Dallas Arboretum",
        totalRegistrations: 500,
        totalAttendees: 450,
        checkedInSpeakers: 3,
        checkedInSponsors: 7,
        pendingDelegates: 50,
    },
];
