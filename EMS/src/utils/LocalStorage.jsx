let employee = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@company.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve the issue with incorrect login validation.",
        backgroundColor: "#f87171",
        date: "2025-04-06",
        category: "bug",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update user dashboard",
        description: "Redesign layout for better UX.",
        backgroundColor: "#60a5fa",
        date: "2025-04-08",
        category: "feature",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer issue follow-up",
        description: "Contact user who reported crashing issue.",
        backgroundColor: "#fbbf24",
        date: "2025-04-05",
        category: "support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 1 }
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@company.com",
    password: "123",
    tasks: [
      {
        title: "Create new report page",
        description: "Build report UI with filters.",
        backgroundColor: "#34d399",
        date: "2025-04-07",
        category: "feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix broken API call",
        description: "Resolve fetch error in report generation.",
        backgroundColor: "#f87171",
        date: "2025-04-06",
        category: "bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Clean up unused CSS",
        description: "Remove unnecessary styles from project.",
        backgroundColor: "#c084fc",
        date: "2025-04-09",
        category: "refactor",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 3,
    firstName: "Reyansh",
    email: "employee3@company.com",
    password: "123",
    tasks: [
      {
        title: "Email validation check",
        description: "Add stricter validation to form fields.",
        backgroundColor: "#facc15",
        date: "2025-04-06",
        category: "bug",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Research new chart library",
        description: "Look into Recharts alternatives.",
        backgroundColor: "#60a5fa",
        date: "2025-04-10",
        category: "research",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 0, failed: 0 }
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@company.com",
    password: "123",
    tasks: [
      {
        title: "Write unit tests",
        description: "Improve test coverage to 90%.",
        backgroundColor: "#f59e0b",
        date: "2025-04-06",
        category: "testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix deployment issue",
        description: "Resolve Netlify deployment failure.",
        backgroundColor: "#ef4444",
        date: "2025-04-04",
        category: "bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Navbar component",
        description: "Improve structure and styling of navbar.",
        backgroundColor: "#818cf8",
        date: "2025-04-03",
        category: "refactor",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 1, newTask: 0, completed: 2, failed: 0 }
  },
  {
    id: 5,
    firstName: "Kian",
    email: "employee5@company.com",
    password: "123",
    tasks: [
      {
        title: "Database optimization",
        description: "Add indexing to improve query speed.",
        backgroundColor: "#10b981",
        date: "2025-04-08",
        category: "backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix search filter",
        description: "Bug in keyword matching logic.",
        backgroundColor: "#f87171",
        date: "2025-04-06",
        category: "bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Prepare for sprint demo",
        description: "Compile slides and summary notes.",
        backgroundColor: "#fcd34d",
        date: "2025-04-09",
        category: "presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 }
  }
];

let admin = [
  {
    id: 1,
    firstName: "Ashu",
    email: "admin@company.com",
    password: "123"
  }
];


  export const setlocalstorage=()=>{
    localStorage.setItem("employee",JSON.stringify(employee))
    localStorage.setItem("admin",JSON.stringify(admin))
  }
  export const getlocalstorage = () => {
    let employee = JSON.parse(localStorage.getItem("employee"));
    let admin = JSON.parse(localStorage.getItem("admin"));
    return { employee, admin };
  };
  