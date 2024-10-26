export interface Links {
    name: string;
    path: string;
}

export const links: Links[] = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Events", path: "/events" },
    { name: "All Attendees", path: "/attendees" },
    { name: "All Sponsors", path: "/sponsors" },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
];