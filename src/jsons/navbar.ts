import SolutionPopup from "@/components/navbarPopups/SolutionPopup.tsx";

const navbarRoutes = [
    {
        label: "solutions",
        href: "solutions",
        component: SolutionPopup,
    },
    {
        label: "Contact",
        href: "support",
    },
    {
        label: "SignIn",
        href: "signin",
    }, {
        label: "Pricing",
        href: "pricing",
    },
    {
        label: "Community",
        href: "community",
    },
    {
        label: "Offerings",
        href: "offerings",
    },
]
export default navbarRoutes;